import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from 'src/app/tasks/components/tasks/tasks.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TasksService } from './services/tasks.service';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
  },
];

@NgModule({
  declarations: [TasksComponent, HeaderComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [TasksService],
})
export class TasksModule {}
