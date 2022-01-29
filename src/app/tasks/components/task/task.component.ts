import { Component, Input } from '@angular/core';
import { TaskInterface } from 'src/app/tasks/types/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: TaskInterface;
}
