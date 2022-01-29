import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TasksFacade } from '../../tasks.facade';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  isTaskListEmpty$: Observable<boolean>;

  constructor(private tasksFacade: TasksFacade) {
    this.isTaskListEmpty$ = this.tasksFacade.getTasks().pipe(
      map((tasks) => {
        return tasks.length === 0;
      }),
    );
  }
}
