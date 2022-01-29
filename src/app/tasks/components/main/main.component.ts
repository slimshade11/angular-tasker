import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { TaskInterface } from 'src/app/tasks/types/task.interface';
import { FilterEnum } from 'src/app/tasks/types/filter.enum';
import { TasksFacade } from 'src/app/tasks/tasks.facade';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  visibleTasks$: Observable<TaskInterface[]>;
  filter$: Observable<FilterEnum> = this.tasksFacade.getFilter();
  tasks$: Observable<TaskInterface[]> = this.tasksFacade.getTasks();

  constructor(private tasksFacade: TasksFacade) {
    this.showVisibleTasks();
  }

  ngOnInit(): void {}

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
    );
  }
}
