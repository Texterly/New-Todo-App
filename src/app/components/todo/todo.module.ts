import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from '../user/user.component';
import { EmailValidationComponent } from '../email-validation/email-validation.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TodoComponent },
  { path: 'task', component: TodoFormComponent },
  { path: 'email', component: EmailValidationComponent },
  { path: 'user/:userId', component: UserComponent },
];

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class TodoModule {}
