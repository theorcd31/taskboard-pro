import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TaskService } from '../core/services/task.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
