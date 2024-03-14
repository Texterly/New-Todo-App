import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  title: string;
  userId: number;
  todos: Todo[];

  constructor(public route: ActivatedRoute, private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });

    this.route.params.subscribe((params) => {
      console.log(params);
      // this.todos = params['todos'];
      this.title = params['title'];
      this.userId = params['userId'];
      console.log(this.todos);
    });
  }
}
