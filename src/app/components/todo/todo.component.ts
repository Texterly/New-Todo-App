import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { mergeMap, pipe } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  addTaskValue: string = '';
  userId: number;
  userIdFilter: string;
  editTitle: string;
  products: any;
  id: number;
  completed: boolean;

  constructor(private todoService: TodoService, private location: Location) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
      console.log(this.todos);
    });
  }

  addTodo() {
    const todo = {
      userId: 1,
      id: this.todos.length + 1,
      title: this.addTaskValue,
      completed: false,
    };
    this.todoService.addTodo(todo).subscribe(() => {
      this.todos.push(todo);
      console.log(todo);

      this.addTaskValue = '';
    });
  }

  deleteTodo(todoOnDelete: Todo) {
    this.todoService.deleteTodo(todoOnDelete).subscribe(() => {
      this.todos = this.todos.filter((todo) => todo.id !== todoOnDelete.id);
    });
  }

  back(): void {
    this.location.back();
  }

  filterDone(filter: any) {
    this.todos = this.todos.filter((todo) => todo.userId === filter.userId);
    console.log(this.todos);
  }

  updateData() {
    this.todoService.getTodos(this.userIdFilter).subscribe((data) => {
      this.todos = data;
    });
  }

  editTodo(id: number, editTitle: string): void {
    this.todoService.editTodo(id, editTitle);
  }

  // editTodo(value: Todo): void {
  //   this.todoService
  //     .editTodo({ title: this.editTitle }, value.id)
  //     .pipe(mergeMap(() => this.todoService.getTodos()))
  //     .subscribe((data) => {
  //       this.todos = data;
  //     });
  //   console.log(this.editTitle);
  //   console.log(value.id);
  //   console.log(this.todos);
  //   this.editTitle = '';
  // }
}
