import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TasksState } from 'src/app/tasks/state/tasks.state';
import { FilterEnum } from 'src/app/tasks/types/filter.enum';
import { TaskInterface } from 'src/app/tasks/types/task.interface';

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

  toggleSingleTask(id: string): void {
    this.tasksState.toggleSingleTask(id);
  }

  setFilter(filter: FilterEnum): void {
    this.tasksState.setFilter(filter);
  }

  changeTask(id: string, text: string): void {
    this.tasksState.changeTask(id, text);
  }

  removeTask(id: string): void {
    this.tasksState.removeTask(id);
  }

  loadTasksFromLocalStorage(): void {
    this.tasksState.loadTasksFromLocalStorage();
  }
}
