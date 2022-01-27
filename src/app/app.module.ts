import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { TasksModule } from 'src/app/tasks/tasks.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TasksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
