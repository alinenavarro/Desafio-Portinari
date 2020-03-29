import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from  '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutofocusModule } from 'angular-autofocus-fix';
import { TasksComponent } from './components/tasks/tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskComponent } from './components/task/task.component';
import { PoModule } from '@portinari/portinari-ui';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AutofocusModule,
    BrowserAnimationsModule,
    PoModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
