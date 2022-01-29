import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from 'src/app/tasks/components/tasks/tasks.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TasksService } from './services/tasks.service';
import { MainComponent } from './components/main/main.component';

import { InputTextModule } from 'primeng/inputtext';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
  },
];

@NgModule({
  declarations: [TasksComponent, HeaderComponent, MainComponent],
  imports: [CommonModule, RouterModule.forChild(routes), InputTextModule],
  providers: [TasksService],
})
export class TasksModule {}
