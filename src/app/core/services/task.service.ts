import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [
    { id: 1, title: 'Préparer un cours Angular' },
    { id: 2, title: 'Relire le module RxJS' },
    { id: 3, title: 'Corriger les TPs' },
  ];

  private lastId = 3;
  private taskSubject = new BehaviorSubject(this.tasks);
  tasks$ = this.taskSubject.asObservable();

  addTask(title: string) {
    if(!title) return ;
    const newTask = { id: ++this.lastId, title: title };
    this.tasks = [...this.tasks, newTask];
    this.taskSubject.next(this.tasks);
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.taskSubject.next(this.tasks);
  }

}
