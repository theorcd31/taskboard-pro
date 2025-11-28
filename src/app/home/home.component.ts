import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TaskService } from '../core/services/task.service';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  count = 0;
  intervalId: any;

  taskService = inject(TaskService);
  tasks$ = this.taskService.tasks$;
  addTask(title: string) {
    this.taskService.addTask(title);
  }
}
