import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TaskInterface } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksState {
  tasks$: BehaviorSubject<TaskInterface[]> = new BehaviorSubject<TaskInterface[]>([]);

  getTasks$(): Observable<TaskInterface[]> {
    return this.tasks$.asObservable();
  }

  setTasks(text: string): void {
    const newTask: TaskInterface = {
      text,
      isCompleted: false,
      id: Math.random().toString(16),
    };

    const updatedTasks = [...this.tasks$.getValue(), newTask];
    this.tasks$.next(updatedTasks);
  }
}
