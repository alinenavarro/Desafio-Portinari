import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  
}
