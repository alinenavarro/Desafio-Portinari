import { Injectable } from '@angular/core';
import { Task } from '../interfaces/Task';
//import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';

//const API_URL = environment.apiUrl;
const API_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskTitle: string = '';
  idForTask: number = 4; //retirar
  beforeEditCache: string = '';
  filter: string = 'all';
  anyRemainingModel: boolean = true;
  tasks: Task[] = [];

  constructor(private http: HttpClient) { 
    this.tasks = this.getTasks();

  }

  getTasks(): Task[] {
    this.http.get(API_URL + '/tasks')
    .pipe(catchError(this.errorHandler))
    .subscribe((response: any) => {
      this.tasks = response;
    })

    return this.tasks;

  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || "Algo deu errado!");
  }

  addTask(taskTitle: string): void {

    if (taskTitle.trim().length == 0) {
      return;
      }
  
    this.http.post(API_URL + '/tasks/', {
      title: taskTitle,
      completed: false
    })
    .subscribe((response: any) => {
      this.tasks.push({
        id: response.id,
        title: taskTitle,
        completed: false,
        editing: false
      });
    });

    this.idForTask++;
  }

  editTask(task: Task): void {
    this.beforeEditCache = task.title;   
    task.editing = true;
  }

  doneEdit(task: Task): void {
    if (task.title.trim().length == 0) { 
      task.title = this.beforeEditCache;
    }

    this.anyRemainingModel = this.anyRemaining();
    task.editing = false;

    this.http.patch(API_URL + '/tasks/' + task.id, {
      title: task.title,
      completed: task.completed
    })
    .subscribe((response: any) => {
      
    }) 
  }

  cancelEdit(task: Task): void {
    task.title = this.beforeEditCache;
    task.editing = false;
  }

  deleteTask(id: number): void {
    
    this.http.delete(API_URL + '/tasks/' + id)
    .subscribe((response: any) => {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }) 
  }

  remaining(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  atLeastOneCompleted(): boolean {
    return this.tasks.filter(task => task.completed).length > 0;
  }

  //clearCompleted(): void {
    // const completed = this.tasks
    // .filter(task => task.completed)
    // .map(task => task.id)

    // // this.http.request('delete',API_URL + '/tasksDeletedCompleted/',{
    //  this.http.request('delete',API_URL + '/tasks/',{  
    //  body: {
    //      tasks: completed
    //    }
    // })
    // .subscribe((response: any) => {
    //   this.tasks = this.tasks.filter(task => !task.completed);
    // }) 
   //}

  // checkAllTasks(): void {

  //   const checkedTask = (<HTMLInputElement>event.target).checked;

  //   // this.http.patch(API_URL + '/tasksCheckAll', {
  //     this.http.patch(API_URL + '/tasks', {
  //     completed: checkedTask
  //   })
  //     .subscribe((response: any) => {
  //       this.tasks.forEach(task => task.completed = checkedTask)
  //       this.anyRemainingModel = this.anyRemaining();
  //     }) 
  // }

  anyRemaining(): boolean {
    return this.remaining() !== 0;
  }

  tasksFiltered(): Task[] {
    if (this.filter == 'all') {
      return this.tasks
    } else if (this.filter == 'active') {
      return this.tasks.filter(task => !task.completed)
    } else if (this.filter == 'completed') {
      return this.tasks.filter(task => task.completed)
    }

    return this.tasks;
  }
}
