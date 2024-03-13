import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos = this.todoService.todos;
  addTaskValue: string = '';
  // editTaskValue: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // this.editTaskValue = '';
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

  // editTodo() {
  //   const todo = {
  //     userId: 1,
  //     id: this.todos.length + 1,
  //     title: this.editTaskValue,
  //     completed: false,
  //   };
  //   this.todoService.editTodo(todo).subscribe((res) => {
  //     this.ngOnInit;
  //   });
  // }

  // call(todo: any) {
  //   this.todos = todo;
  //   this.editTaskValue = todo.title;
  // }
}
