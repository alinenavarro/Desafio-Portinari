import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutofocusModule } from 'angular-autofocus-fix';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoModule } from '@portinari/portinari-ui';
import { TasksRoutingModule } from './tasks.routing.module';

@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent

  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    HttpClientModule,
    AutofocusModule,
    BrowserAnimationsModule,
    PoModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
