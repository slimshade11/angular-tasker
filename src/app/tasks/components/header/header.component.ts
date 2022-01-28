import { Component, OnInit } from '@angular/core';
import { TasksFacade } from '../../tasks.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  text = '';

  constructor(private tasksFacade: TasksFacade) {}

  ngOnInit(): void {}

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addTodo(): void {
    this.tasksFacade.setTasks(this.text);
    this.text = '';
  }
}
