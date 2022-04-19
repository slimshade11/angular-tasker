import { Component } from '@angular/core';

import { TasksFacade } from 'src/app/tasks/tasks.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  text = '';

  constructor(private tasksFacade: TasksFacade) {}

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addTodo(): void {
    this.tasksFacade.addTask(this.text);
    this.text = '';
  }
}
