import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { trigger, transition, style, animate } from '@angular/animations';
import { TaskService } from 'src/app/tasks/task.service';
import { PoMenuItem } from '@portinari/portinari-ui';
import { Router } from '@angular/router';


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

  readonly menus: Array<PoMenuItem> = [
    { label: 'Logout' , action: this.onClick.bind(this), icon: 'po-icon-home', shortLabel: 'Início' },
  ];

  taskTitle: string;

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.taskTitle = '';
  }

  addTask(): void {

    if (this.taskTitle.trim().length == 0) {
      return;
      }
  
      this.taskService.addTask(this.taskTitle);
      this.taskTitle = '';
    // this.idForTask++;
  }

  private onClick() {
    this.router.navigate(['/login']);
  }

}
 

  
  


