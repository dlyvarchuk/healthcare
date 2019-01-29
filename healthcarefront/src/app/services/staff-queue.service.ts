import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StaffQueue} from '../models/StaffQueue';

@Injectable({
  providedIn: 'root'
})
export class StaffQueueService {

  private host = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getById(id: string): Observable<StaffQueue> {
    return this.http.get<StaffQueue>(`${this.host}/api/staff_queue/${id}`);
  }
  getAll(): Observable<StaffQueue[]> {
    return this.http.get<StaffQueue[]>(`${this.host}/api/staff_queue`);
  }
  create(staffQueue: StaffQueue): Observable<StaffQueue> {
    return this.http.post<StaffQueue>(`${this.host}/api/staff_queue`, staffQueue);
  }
  update(id: string, staffQueue: StaffQueue): Observable<StaffQueue> {
    return this.http.put<StaffQueue>(`${this.host}/api/staff_queue/${id}`, staffQueue);
  }
  delete(id: string): Observable<StaffQueue> {
    return this.http.delete<StaffQueue>(`${this.host}/api/staff_queue/${id}`);
  }
}
