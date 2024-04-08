import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todos: Todo[];

  private apiURL = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) {}

  getTodos(userId?: string): Observable<Todo[]> {
    if (userId) {
      return this.http.get<any>(this.apiURL, {
        params: new HttpParams().set('userId', userId).set('_limit', '10'),
      });
    } else
      return this.http.get<any>(this.apiURL, {
        params: new HttpParams().set('_limit', '10'),
      });
  }

  getUserTodos(userId: string | number): Observable<Todo[]> {
    if (typeof userId === 'string') {
      userId = +userId;
    }

    return this.http
      .get<Todo[]>(this.apiURL)
      .pipe(
        map((allTodos: Todo[]) =>
          allTodos.filter((todo: Todo) => todo.userId === userId)
        )
      );
  }

  getTodoById(id: string): Observable<Todo> {
    return this.http
      .get<Todo[]>(`${this.apiURL}?id=${id}`)
      .pipe(map((todos: Todo[]) => todos[0]));
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiURL, todo);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(this.apiURL + '/' + todo.id);
  }

  filterDone(filter: any) {
    this.todos = this.todos.filter((todo) => todo.userId === filter.userId);
    console.log(this.todos);
  }

  editTodo(id: number, newTitle: string): void {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      this.todos[todoIndex].title = newTitle;
    }
  }

  //   editTodo(todo: any, id: number): Observable<Todo> {
  //     console.log(id);
  //     return this.http.put<Todo>(`${this.apiURL}/${id}`, todo);
  //   }
}
