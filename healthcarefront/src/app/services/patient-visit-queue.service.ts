import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PatientVisitQueue} from '../models/PatientVisitQueue';

@Injectable({
  providedIn: 'root'
})
export class PatientVisitQueueService {

  private host = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getById(id: string): Observable<PatientVisitQueue> {
    return this.http.get<PatientVisitQueue>(`${this.host}/api/patient_visit_queue/${id}`);
  }
  getAll(): Observable<PatientVisitQueue[]> {
    return this.http.get<PatientVisitQueue[]>(`${this.host}/api/patient_visit_queue`);
  }
  create(patientVisitQueue: PatientVisitQueue): Observable<PatientVisitQueue> {
    return this.http.post<PatientVisitQueue>(`${this.host}/api/patient_visit_queue`, patientVisitQueue);
  }
  update(id: string, patientVisitQueue: PatientVisitQueue): Observable<PatientVisitQueue> {
    return this.http.put<PatientVisitQueue>(`${this.host}/api/patient_visit_queue/${id}`, patientVisitQueue);
  }
  delete(id: string): Observable<PatientVisitQueue> {
    return this.http.delete<PatientVisitQueue>(`${this.host}/api/patient_visit_queue/${id}`);
  }
}
