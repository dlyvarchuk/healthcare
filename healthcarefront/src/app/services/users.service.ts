import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from '../models/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private host = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getById(id: string): Observable<Users> {
    return this.http.get<Users>(`${this.host}/api/users/${id}`);
  }
  getByLoginName(login_name: string): Observable<Users> {
    return this.http.get<Users>(`${this.host}/api/users/${login_name}`);
  }
  getAll(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.host}/api/users`);
  }
  create(user: Users): Observable<Users> {
    return this.http.post<Users>(`${this.host}/api/users`, user);
  }
  update(id: string, user: Users): Observable<Users> {
    return this.http.put<Users>(`${this.host}/api/users/${id}`, user);
  }
  delete(id: string): Observable<Users> {
    return this.http.delete<Users>(`${this.host}/api/users/${id}`);
  }

}
