import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ModuleWithProviders } from '@angular/core';

import { TasksComponent } from './tasks.component';

const tasksRoutes: Routes = [

 { path: 'tasks', component: TasksComponent },
 // { path: 'tasks', component: TasksComponent,
 //     canActivate: [AuthGuard] 
 // }
];


@NgModule({
 imports: [
   RouterModule.forChild(tasksRoutes)
 ],
 exports: [
   RouterModule
 ]
})
export class TasksRoutingModule { }