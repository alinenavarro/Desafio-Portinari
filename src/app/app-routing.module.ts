 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';

//import { FormsModule } from  '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
//import { AutofocusModule } from 'angular-autofocus-fix';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './login/login.component';
//import { PoModule } from '@portinari/portinari-ui';

const routes: Routes = [

  // { path: 'tasks', 
      // loadChildren: './tasks/tasks.module#TasksModule'},//       loadChildren: () => import('./tasks/tasks.module').then(mod => mod.TasksModule),  },
  //     ,canActivate: [AuthGuard],
  //     canActivateChild: [CursosGuard],
  //     canLoad: [AuthGuard]
  // },
 // { path: 'tasks', component: TasksComponent },
  //{ path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent } //alterar para login, apagar import de tasks 
 
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