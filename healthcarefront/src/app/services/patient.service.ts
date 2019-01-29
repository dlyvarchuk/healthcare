import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Patient} from '../models/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private host = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getById(id: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.host}/api/patient/${id}`);
  }
  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.host}/api/patient`);
  }
  create(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.host}/api/patient`, patient);
  }
  update(id: string, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.host}/api/patient/${id}`, patient);
  }
  delete(id: string): Observable<Patient> {
    return this.http.delete<Patient>(`${this.host}/api/patient/${id}`);
  }
}
