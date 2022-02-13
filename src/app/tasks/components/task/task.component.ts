import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskInterface } from 'src/app/tasks/types/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: TaskInterface;
  @Input() isEditing: boolean;
  @Output() setEditingIdEvent: EventEmitter<string | null> = new EventEmitter();

  editingText: any;

  setTaskInEditMode(): void {
    this.setEditingIdEvent.emit(this.task.id);
  }

  removeTask(): void {
    console.log('remove');
  }

  toggleTask(): void {
    console.log('toggle');
  }

  changeText(event: Event): void {}

  changeTask(): void {}
}
