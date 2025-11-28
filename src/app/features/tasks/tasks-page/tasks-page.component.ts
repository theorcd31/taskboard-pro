import { Component, inject } from '@angular/core';
import { TaskService } from '../../../core/services/task.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-tasks-page',
  imports: [AsyncPipe],
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.css'
})
export class TasksPageComponent {
  count = 0;
  intervalId: any;

  taskService = inject(TaskService);
  tasks$ = this.taskService.tasks$;
  addTask(title: string) {
    this.taskService.addTask(title);
  }
}
