import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todos: Todo[];

  private apiURL = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) {}

  getTodos(userId?: string): Observable<Todo[]> {
    console.log(userId);

    if (userId) {
      return this.http.get<any>(this.apiURL, {
        params: new HttpParams().set('userId', userId).set('_limit', '10'),
      });
    } else return this.http.get<any>(this.apiURL);
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

  // editTodo(todo: Todo): Observable<Todo> {
  //   return this.http.put<Todo>(this.apiURL + '/' + todo.id, todo);
  // }
}
