import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/Task';
import { trigger, transition, style, animate } from '@angular/animations';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TaskService],
  animations: [
    trigger('fade', [

      transition(':enter',[
        style( {opacity: 0, transform: 'translateY(30px)'}),
        animate(200, style({opacity: 1, transform: 'translateY(0px)'}))
      ]),

      transition(':leave', [
        animate(200, style({ opacity: 0, transform: 'translateY(30px)'}))
      ]),
    ])
  ]
})
export class TasksComponent implements OnInit {
  // tasks: Task[];
  taskTitle: string;
  // idForTask: number; //retirar
  // beforeEditCache: string;
  // filter: string;
  // anyRemainingModel: boolean;

  //pesquisar uso de injectable aqui!!!!!!!
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    // this.filter = 'all';
    // this.anyRemainingModel = true;
    // this.beforeEditCache = '';
    this.taskTitle = '';
    // this.idForTask = 4; //retirar
    // this.tasks = [
    //   {
    //     'id': 1,
    //     'title': 'Finalizar curso de angular',
    //     'completed': false,
    //     'editing': false,
    //   },
    //   {
    //     'id': 2,
    //     'title': 'Subir projeto',
    //     'completed': false,
    //     'editing': false,
    //   },
    //   {
    //     'id': 3,
    //     'title': 'Subir certificados',
    //     'completed': false,
    //     'editing': false,
    //   },
    // ];
  }

  addTask(): void {

    if (this.taskTitle.trim().length == 0) {
      return;
      }
  
      this.taskService.addTask(this.taskTitle);
    // this.tasks.push({
    //   id: this.idForTask, // substituir pelo id do backend
    //   title: this.taskTitle,
    //   completed: false,
    //   editing: false
    
    // })

    this.taskTitle = '';
    // this.idForTask++;
  }

  // editTask(task: Task): void {
  //   this.beforeEditCache = task.title;   
  //   task.editing = true;
  // }

  // doneEdit(task: Task): void {
  //   if (task.title.trim().length == 0) { //alterei
  //     task.title = this.beforeEditCache;
  //   }

  //   task.editing = false;
  // }

  // cancelEdit(task: Task): void {
  //   task.title = this.beforeEditCache;
  //   task.editing = false;
  // }

  // deleteTask(id: number): void {
  //   this.tasks = this.tasks.filter(task => task.id !== id);
  // }

  // remaining(): number {
  //   return this.tasks.filter(task => !task.completed).length;
  // }

  // atLeastOneCompleted(): boolean {
  //   return this.tasks.filter(task => task.completed).length > 0;
  // }

  // clearCompleted(): void {
  //   this.tasks = this.tasks.filter(task => !task.completed);
  // }

  // checkAllTasks(): void {
  //   this.tasks.forEach(task => task.completed = 
  //     (<HTMLInputElement>event.target).checked)
  //     this.anyRemainingModel = this.anyRemaining();
  // }

  // anyRemaining(): boolean {
  //   return this.remaining() !== 0;
  // }

  // tasksFiltered(): Task[] {
  //   if (this.filter == 'all') {
  //     return this.tasks
  //   } else if (this.filter == 'active') {
  //     return this.tasks.filter(task => !task.completed)
  //   } else if (this.filter == 'completed') {
  //     return this.tasks.filter(task => task.completed)
  //   }

  //   return this.tasks;
  // }

}
 

  
  


