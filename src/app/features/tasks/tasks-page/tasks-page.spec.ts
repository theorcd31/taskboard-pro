import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksPageComponent } from './tasks-page.component';
import { TaskService, TaskItem } from '../../../core/services/task.service';
import { BehaviorSubject } from 'rxjs';

// 🎭 1️⃣ CRÉER LE MOCK (fausse version du service)
class MockTaskService {
  private tasksSubject = new BehaviorSubject<TaskItem[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  addTask(title: string): void {
    const newTask = { id: 1, title, completed: false };
    const tasks = this.tasksSubject.value;
    this.tasksSubject.next([...tasks, newTask]);
  }

  deleteTask(id: number): void {
    // Simulation simple, pas de vraie logique
  }
}

describe('TasksPageComponent avec Mock', () => {
  let component: TasksPageComponent;
  let fixture: ComponentFixture<TasksPageComponent>;
  let mockService: MockTaskService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksPageComponent],
      providers: [
        // 🎭 2️⃣ UTILISER LE MOCK au lieu du vrai service
        { provide: TaskService, useClass: MockTaskService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TasksPageComponent);
    component = fixture.componentInstance;
    mockService = TestBed.inject(TaskService) as any;
    fixture.detectChanges();
  });

  it('devrait utiliser le mock pour ajouter une tâche', () => {
    // ACT : On appelle la méthode du composant
    component.addTask('Tâche mockée');

    // ASSERT : Le mock a bien simulé l'ajout
    mockService.tasks$.subscribe(tasks => {
      expect(tasks.length).toBe(1);
      expect(tasks[0].title).toBe('Tâche mockée');
    });
  });
});