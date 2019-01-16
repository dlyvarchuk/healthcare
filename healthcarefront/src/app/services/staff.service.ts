import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Staff} from '../models/Staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private host = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getById(id: string): Observable<Staff> {
    return this.http.get<Staff>(`${this.host}/api/staff/${id}`);
  }
  getAll(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${this.host}/api/staff`);
  }
  create(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>(`${this.host}/api/staff`, staff);
  }
  update(id: string, staff: Staff): Observable<Staff> {
    return this.http.put<Staff>(`${this.host}/api/staff/${id}`, staff);
  }
  delete(id: string): Observable<Staff> {
    return this.http.delete<Staff>(`${this.host}/api/staff/${id}`);
  }
}
