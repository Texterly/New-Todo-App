import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoFormComponent } from './sub-pages/todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { UserTodosComponent } from './sub-pages/user-todos/user-todos.component';
import { BackButtonComponent } from '../../common/back-button/back-button.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'user/:userId', component: UserTodosComponent },
  { path: ':taskId', component: TodoFormComponent },
];

@NgModule({
  declarations: [TodoComponent, TodoFormComponent, UserTodosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    BackButtonComponent,
    DragDropModule,
  ],
})
export class TodoModule {}
