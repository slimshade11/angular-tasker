import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { TaskInterface } from 'src/app/tasks/types/task.interface';
import { TasksFacade } from 'src/app/tasks/tasks.facade';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit, OnChanges {
  @Input() task: TaskInterface;
  @Input() isEditing: boolean;
  @Output() setEditingIdEvent: EventEmitter<string | null> = new EventEmitter();
  @ViewChild('textInput', { static: true }) textInput: ElementRef;

  editingText: string = '';

  constructor(private taskFacade: TasksFacade) {}

  ngOnInit(): void {
    this.editingText = this.task.text;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['isEditing'].currentValue) {
    //   setTimeout(() => {
    //     this.textInput.nativeElement.focus();
    //   }, 300);
    // }
  }

  setTaskInEditMode(): void {
    this.setEditingIdEvent.emit(this.task.id);
  }

  removeTask(id: string): void {
    this.taskFacade.removeTask(id);
  }

  toggleSingleTask(id: string): void {
    this.taskFacade.toggleSingleTask(id);
  }

  changeText(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
  }

  changeTask(): void {
    this.setEditingIdEvent.emit(null);
    this.taskFacade.changeTask(this.task.id, this.editingText);
  }
}
