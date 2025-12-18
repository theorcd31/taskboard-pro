import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { TaskService } from '../../../core/services/task.service';
import { AsyncPipe } from '@angular/common';
import { TaskHighlight } from '../task-highlight/task-highlight.component';
import { Task } from '../../../core/models/task.model';

@Component({
  selector: 'app-tasks-page',
  imports: [AsyncPipe, TaskHighlight],
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.css'
})
export class TasksPageComponent {
  count = 0;
  intervalId: any;

  taskService = inject(TaskService);
  tasks$ = this.taskService.tasks$;
  addTask(input: HTMLInputElement) {
    this.taskService.addTask(input.value);
    input.value = '';
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  taskCompleted(task: Task) {
    this.taskService.taskCompleted(task.id,);
  }
  

  @ViewChild('highlightContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

  highlight(task: Task) {
    // Efface le contenu précédent
    this.container.clear();
    
    // Crée le composant TaskHighlight
    const ref = this.container.createComponent(TaskHighlight);
    
    // Passe les données au composant
    ref.instance.title = task.title;
  }
}
