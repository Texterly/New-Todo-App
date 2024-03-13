import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  title: string;
  public todos = this.todoService.todos;
  id: number;

  constructor(private todoService: TodoService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
      console.log(this.todos);
    });
    console.log(this.todos);

    // this.route.params.subscribe((params) => {
    //   console.log(params);
    //   this.todos.id = params;
    //   console.log(this.todos.id);

    //   // this.id = params.["id"];
    // });
    // this.route.paramMap.subscribe((params) => {
    //   this.todos.forEach((p: Todo) => {
    //     if (p.id == this.todos.id) {
    //       this.todos = p;
    //     }
    //   });
    // });
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

  // taskId = this.route.snapshot.paramMap.get('id');
}
