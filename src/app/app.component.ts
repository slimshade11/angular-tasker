import { Component, OnInit } from '@angular/core';

import { TasksFacade } from 'src/app/tasks/tasks.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'tasker';

  constructor(private tasksFacade: TasksFacade) {}

  ngOnInit(): void {
    this.tasksFacade.loadTasksFromLocalStorage();
  }
}
