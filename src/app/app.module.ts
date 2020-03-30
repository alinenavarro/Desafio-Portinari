import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { FormsModule } from  '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { AutofocusModule } from 'angular-autofocus-fix';
//import { TasksComponent } from './tasks/tasks.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TaskComponent } from './tasks/task/task.component';
// import { PoModule } from '@portinari/portinari-ui';
//import { LoginComponent } from './login/login.component';

import { TasksModule } from './tasks/tasks.module';
import { AuthService } from './login/auth.service';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    // TasksComponent,
    // TaskComponent,
    //LoginComponent,
  ],
  imports: [
    BrowserModule,
    TasksModule,
    LoginModule,
    AppRoutingModule
    // FormsModule,
    // HttpClientModule,
    // AutofocusModule,
    // BrowserAnimationsModule,
    // PoModule
    
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
