import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: TaskItem[] = [];

  private lastId = 3;
  private taskSubject = new BehaviorSubject(this.tasks);
  tasks$ = this.taskSubject.asObservable();

  addTask(title: string) {
    if(!title) return ;
    const newTask: TaskItem = {
      id: this.lastId++,
      title,
      completed: false
    };
    this.tasks = [...this.tasks, newTask];
    this.taskSubject.next(this.tasks);
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.taskSubject.next(this.tasks);
  }

  taskCompleted(id: number) {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.taskSubject.next(this.tasks);
  }

  getTasks(): TaskItem[] {
    return this.taskSubject.value;
    }
    
  clearTasks(): void {
    this.taskSubject.next([]);
    this.lastId = 1;
  }
}

export interface TaskItem {
  id: number;
  title: string;
  completed: boolean;
}