import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterEnum } from 'src/app/tasks/types/filter.enum';
import { TaskInterface } from 'src/app/tasks/types/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksState {
  tasks$: BehaviorSubject<TaskInterface[]> = new BehaviorSubject<TaskInterface[]>([]);
  filter$: BehaviorSubject<FilterEnum> = new BehaviorSubject<FilterEnum>(FilterEnum.all);

  getTasks$(): Observable<TaskInterface[]> {
    return this.tasks$.asObservable();
  }

  getFilter$(): Observable<FilterEnum> {
    return this.filter$.asObservable();
  }

  addTask(text: string): void {
    const newTask: TaskInterface = {
      text,
      isCompleted: false,
      id: Math.random().toString(16),
    };

    const updatedTasks = [...this.tasks$.getValue(), newTask];
    this.tasks$.next(updatedTasks);
  }

  toggleAllTasks(isCompleted: boolean): void {
    const updatedTasks = this.tasks$.getValue().map((task) => {
      return { ...task, isCompleted };
    });

    this.tasks$.next(updatedTasks);
  }

  setFilter(filter: FilterEnum): void {
    this.filter$.next(filter);
  }
}
