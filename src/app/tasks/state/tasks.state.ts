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

  setTasks(task: TaskInterface): void {
    // this.tasks$.next(task);
  }
}
