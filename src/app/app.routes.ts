import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path : '', component : HomeComponent },
    { path : 'about', loadChildren: () => import('./about/routes').then(m => m.ABOUT_ROUTES) },
    { path: 'tasks', loadChildren: () => import('./features/tasks/tasks-page/routes').then(m => m.TASKS_ROUTES) }
];
