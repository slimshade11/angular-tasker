import { Injectable } from '@angular/core';
import { TasksState } from './state/tasks.state';

@Injectable({
  providedIn: 'root',
})
export class TasksFacade {
  constructor(private tasksState: TasksState) {}

  getTasks(): void {
    this.tasksState.getTasks$();
  }

  setTasks(task: string): void {
    this.tasksState.setTasks(task);
  }
}
