import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { TasksComponent } from 'src/app/tasks/components/tasks/tasks.component';
import { HeaderComponent } from 'src/app/tasks/components/header/header.component';
import { MainComponent } from 'src/app/tasks/components/main/main.component';
import { TaskComponent } from 'src/app/tasks/components/task/task.component';
import { TasksState } from 'src/app/tasks/state/tasks.state';
import { FooterComponent } from 'src/app/tasks/components/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
  },
];

@NgModule({
  declarations: [
    TasksComponent,
    HeaderComponent,
    MainComponent,
    TaskComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), InputTextModule, ButtonModule],
  providers: [TasksState],
})
export class TasksModule {}
