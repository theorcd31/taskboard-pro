import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TaskService } from '../core/services/task.service';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks$: ReturnType<TaskService['getTasks']>;

  constructor(private task: TaskService) {
    this.tasks$ = this.task.getTasks();
  }
  count = 0;
  intervalId: any;
  ngOnInit(){
    setInterval(() => {
      this.count++;
      console.log(this.count);
    }, 500)
  }
  ngOnDestroy(){
    console.log('Home détruit, interval arrêté')
    clearInterval(this.intervalId);
  }
}
