import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http: HttpClient = inject(HttpClient);

  private apiURL = 'https://jsonplaceholder.typicode.com/user';

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.apiURL);
  }
}
