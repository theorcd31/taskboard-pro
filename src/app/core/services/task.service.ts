import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [
    { id: 1, title: "Prépaprer un cours Angular"},
    { id: 2, title: "Relire le module RxJS"},
    { id: 3, title: "Corriger les TPs"},
  ];

  getTasks() {
    return of(this.tasks).pipe(delay(1000));
  }

}
