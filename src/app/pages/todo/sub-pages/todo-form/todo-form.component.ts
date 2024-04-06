import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFormComponent implements OnInit {
  title: string;
  userId: number;

  constructor(private todoService: TodoService, public route: ActivatedRoute, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    const taskId: string = this.route.snapshot.params['taskId'];

    this.todoService.getTodoById(taskId).pipe(
      take(1),
    ).subscribe((todo: Todo) => {
      this.userId = todo.userId;
      this.title = todo.title;
      this.cd.markForCheck();
    })

    // TODO old implementation to delete
    // this.route.params.pipe(take(1)).subscribe((params) => {
    //   console.log(params);
    //   this.title = params['title'];
    //   this.userId = params['userId'];
    // });
  }
}
