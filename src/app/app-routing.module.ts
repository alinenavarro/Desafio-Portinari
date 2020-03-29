// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from  '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutofocusModule } from 'angular-autofocus-fix';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksComponent } from './tasks/tasks.component';
import { PoModule } from '@portinari/portinari-ui';
import { LoginComponent } from './login/login.component';

//tirar imports do app.module!!!!!!!!!!!!!!!!!!!!!!!!!!!
const routes: Routes = [
//const appRoutes: Routes = [

  // { path: 'tasks', 
  //     loadChildren: 'app/components/tasks.module#TasksModule',
  //     canActivate: [AuthGuard],
  //     canActivateChild: [CursosGuard],
  //     canLoad: [AuthGuard]
  // },
  //{ path: 'tasks', component: TasksComponent },
  //{ path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: TasksComponent } //alterar para login, apagar import de tasks e retirar de tasksrotutingmodule
 
  // { path: 'tasks', component: TasksComponent,
  //     canActivate: [AuthGuard] 
  // }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }