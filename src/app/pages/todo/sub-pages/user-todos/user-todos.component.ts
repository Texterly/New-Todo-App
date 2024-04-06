import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Todo } from '../../../../interfaces/todo';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../../../services/todo.service';
import { delay } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-todos',
  templateUrl: './user-todos.component.html',
  styleUrls: ['./user-todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTodosComponent implements OnInit {
  userId!: number;
  loading: boolean = false;
  todos: Todo[] = [];

  constructor(public route: ActivatedRoute, private todoService: TodoService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    // this.todoService.getTodos().subscribe((todos) => {
    //   this.todos = todos;
    // });

    const userId: string = this.route.snapshot.params['userId'];

    console.log(userId);

    if (!userId) {
      return;
    }

    this.userId = +userId;

    this.loading = true;
    this.todoService.getUserTodos(userId).pipe(
      delay(3000),
    ).subscribe({
      next: (todos: Todo[]) => {
        this.todos = [...todos];
        this.cd.markForCheck();
      },
      error: (error: HttpErrorResponse) => {

      },
      complete: () => {
        this.loading = false;
      }
    });

    // this.todoService.getTodoById(userId).pipe(
    //   take(1),
    // ).subscribe((todo: Todo) => {
    //   console.log(todo);
    //
    //   // this.userId = todo.userId;
    //   // this.title = todo.title;
    // })

    // this.route.params.subscribe((params) => {
    //   console.log(params);
    //   // this.todos = params['todos'];
    //   this.title = params['title'];
    //   this.userId = params['userId'];
    //   console.log(this.todos);
    // });
  }}
