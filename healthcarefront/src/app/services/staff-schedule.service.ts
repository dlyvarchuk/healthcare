import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StaffSchedule} from '../models/StaffSchedule';

@Injectable({
  providedIn: 'root'
})
export class StaffScheduleService {

  private host = 'http://localhost:3000';

  constructor(
    private http: HttpClient

  ) { }

  getById(id: string): Observable<StaffSchedule> {
    return this.http.get<StaffSchedule>(`${this.host}/api/staff-schedule/${id}`);
  }
  getAll(): Observable<StaffSchedule[]> {
    return this.http.get<StaffSchedule[]>(`${this.host}/api/staff-schedule`);
  }
  create(staffSchedule: StaffSchedule): Observable<StaffSchedule> {
    return this.http.post<StaffSchedule>(`${this.host}/api/staff-schedule`, staffSchedule);
  }
  update(id: string, staffSchedule: StaffSchedule): Observable<StaffSchedule> {
    return this.http.put<StaffSchedule>(`${this.host}/api/staff-schedule/${id}`, staffSchedule);
  }
  delete(id: string): Observable<StaffSchedule> {
    return this.http.delete<StaffSchedule>(`${this.host}/api/staff-schedule/${id}`);
  }
}
