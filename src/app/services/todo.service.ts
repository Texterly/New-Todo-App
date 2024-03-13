import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todos: Todo[];

  private apiURL = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) {}
  getTodos(): Observable<Todo[]> {
    return this.http.get<any>(this.apiURL);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiURL, todo);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(this.apiURL + '/' + todo.id);
  }

  // editTodo(todo: Todo): Observable<Todo> {
  //   return this.http.put<Todo>(this.apiURL + '/' + todo.id, todo);
  // }
}
