import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { TaskInterface } from 'src/app/tasks/types/task.interface';
import { FilterEnum } from 'src/app/tasks/types/filter.enum';
import { TasksFacade } from 'src/app/tasks/tasks.facade';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  isTaskListEmpty$: Observable<boolean>;
  isAllTasksSelected$: Observable<boolean>;
  visibleTasks$: Observable<TaskInterface[]>;
  filter$: Observable<FilterEnum> = this.tasksFacade.getFilter();
  tasks$: Observable<TaskInterface[]> = this.tasksFacade.getTasks();
  destroy$: Subject<void> = new Subject<void>();

  editingId: string | null = null;

  constructor(private tasksFacade: TasksFacade) {
    this.isAllTasksSelected$ = this.tasksFacade
      .getTasks()
      .pipe(map((tasks) => tasks.every((task) => task.isCompleted)));

    this.isTaskListEmpty$ = this.tasksFacade
      .getTasks()
      .pipe(map((tasks) => tasks.length === 0));
  }

  ngOnInit(): void {
    this.showVisibleTasks();
  }

  showVisibleTasks(): void {
    this.visibleTasks$ = combineLatest([this.filter$, this.tasks$]).pipe(
      map(([filter, tasks]: [FilterEnum, TaskInterface[]]) => {
        if (filter === FilterEnum.active) {
          return tasks.filter((task) => !task.isCompleted);
        } else if (filter === FilterEnum.completed) {
          return tasks.filter((task) => task.isCompleted);
        }
        return tasks;
      }),
      takeUntil(this.destroy$),
    );
  }

  toggleAllTasks(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.tasksFacade.toggleAllTasks(target.checked);
  }

  setEditingId(editingId: any): void {
    this.editingId = editingId;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
