import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksState } from './state/tasks.state';
import { FilterEnum } from './types/filter.enum';
import { TaskInterface } from './types/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksFacade {
  constructor(private tasksState: TasksState) {}

  getTasks(): Observable<TaskInterface[]> {
    return this.tasksState.getTasks$();
  }

  getFilter(): Observable<FilterEnum> {
    return this.tasksState.getFilter$();
  }

  addTask(task: string): void {
    this.tasksState.addTask(task);
  }

  toggleAllTasks(isCompleted: boolean) {
    this.tasksState.toggleAllTasks(isCompleted);
  }

  setFilter(filter: FilterEnum): void {
    this.tasksState.setFilter(filter);
  }
}
