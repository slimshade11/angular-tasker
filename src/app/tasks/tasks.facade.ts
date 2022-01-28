import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
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

  setTasks(task: string): void {
    this.tasksState.setTasks(task);
  }
}
