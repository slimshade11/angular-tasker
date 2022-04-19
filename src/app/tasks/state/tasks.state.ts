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
    if (text) {
      const newTask: TaskInterface = {
        text,
        isCompleted: false,
        id: Math.random().toString(16),
      };

      const updatedTasks = [...this.tasks$.getValue(), newTask];
      this.tasks$.next(updatedTasks);
      this.saveTasksToLocalStorage();
    } else {
      alert('Enter text');
    }
  }

  toggleAllTasks(isCompleted: boolean): void {
    const updatedTasks = this.tasks$.getValue().map((task) => {
      return { ...task, isCompleted };
    });

    this.tasks$.next(updatedTasks);
    this.saveTasksToLocalStorage();
  }

  toggleSingleTask(id: string): void {
    const updatedTasks = this.tasks$.getValue().map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    this.tasks$.next(updatedTasks);
    this.saveTasksToLocalStorage();
  }

  setFilter(filter: FilterEnum): void {
    this.filter$.next(filter);
  }

  changeTask(id: string, text: string): void {
    const updatedTasks = this.tasks$.getValue().map((task) => {
      if (task.id === id) {
        return {
          ...task,
          text,
        };
      }
      return task;
    });

    this.tasks$.next(updatedTasks);
    this.saveTasksToLocalStorage();
  }

  removeTask(id: string): void {
    const updatedTasks = this.tasks$.getValue().filter((task) => task.id !== id);

    this.tasks$.next(updatedTasks);
  }

  saveTasksToLocalStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks$.getValue()));
  }

  loadTasksFromLocalStorage(): void {
    const tasks: TaskInterface[] = JSON.parse(localStorage.getItem('tasks'));
    this.tasks$.next(tasks);
  }
}
