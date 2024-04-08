import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo';
import { AuthGoogleService } from 'src/app/services/google-api.service';
import { TodoService } from 'src/app/services/todo.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
  todos$: Observable<Todo[]> = this.todoService.getTodos();
  todos: Todo[];
  addTaskValue: string = '';
  userId: number;
  userIdFilter: string;
  editTitle: string;
  products: any;
  id: number;
  completed: boolean;
  profile: any;
  done: Todo[] = [];

  constructor(
    private todoService: TodoService,
    private cd: ChangeDetectorRef,
    private authService: AuthGoogleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.todoService.getCompletedTodos().subscribe((todos) => {
      this.done = todos;
      this.cd.markForCheck();
      console.log(this.todos);
    });
    this.todoService.getUncompletedTodos().subscribe((todos) => {
      this.todos = todos;
      this.cd.markForCheck();
      console.log(this.todos);
    });
    this.showData();
  }

  drop(event: CdkDragDrop<Todo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  showData() {
    this.profile = this.authService.getProfile();
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
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
      this.cd.markForCheck();
      this.addTaskValue = '';
    });
  }

  deleteTodo(todoOnDelete: Todo) {
    this.todoService.deleteTodo(todoOnDelete).subscribe(() => {
      this.todos = this.todos.filter((todo) => todo.id !== todoOnDelete.id);
      this.done = this.done.filter((todo) => todo.id !== todoOnDelete.id);
      this.cd.markForCheck();
    });
  }

  updateData() {
    this.todoService.getTodos(this.userIdFilter).subscribe((data) => {
      this.todos = data;
      this.done = data;
      this.cd.markForCheck();
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
