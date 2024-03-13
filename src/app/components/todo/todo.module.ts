import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TodoComponent },
  { path: 'task/:id', component: TodoFormComponent },

  // { path: '', component: TodoComponent },
  // { path: 'add', component: TodoFormComponent },
];

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class TodoModule {}
