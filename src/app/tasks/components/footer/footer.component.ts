import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';

import { TasksFacade } from 'src/app/tasks/tasks.facade';
import { FilterEnum } from 'src/app/tasks/types/filter.enum';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  isTaskListEmpty$: Observable<boolean>;
  activeTasksLength$: Observable<number>;
  itemsLeftText$: Observable<string>;
  filter$: Observable<FilterEnum>;

  filterEnum = FilterEnum;

  constructor(private tasksFacade: TasksFacade) {
    this.activeTasksLength$ = this.tasksFacade.getTasks().pipe(
      map((tasks) => {
        return tasks.filter((task) => !task.isCompleted).length;
      }),
    );

    this.itemsLeftText$ = this.activeTasksLength$.pipe(
      map((activeCount: number) => {
        return `item${activeCount === 1 ? '' : 's'}`;
      }),
    );

    this.isTaskListEmpty$ = this.tasksFacade.getTasks().pipe(
      map((tasks) => {
        return tasks.length === 0;
      }),
    );

    this.filter$ = this.tasksFacade.getFilter();
  }

  changeFilter(filter: FilterEnum): void {
    this.tasksFacade.setFilter(filter);
  }
}
