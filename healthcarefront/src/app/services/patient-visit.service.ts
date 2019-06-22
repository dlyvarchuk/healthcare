import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PatientVisit} from '../models/PatientVisit';

@Injectable({
  providedIn: 'root'
})
export class PatientVisitService {
  private host = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getById(id: string): Observable<PatientVisit> {
    return this.http.get<PatientVisit>(`${this.host}/api/patient-visit/${id}`);
  }
  getAll(): Observable<PatientVisit[]> {
    return this.http.get<PatientVisit[]>(`${this.host}/api/patient-visit`);
  }
  create(patientVisit: PatientVisit): Observable<PatientVisit> {
    return this.http.post<PatientVisit>(`${this.host}/api/patient-visit`, patientVisit);
  }
  update(id: string, patientVisit: PatientVisit): Observable<PatientVisit> {
    return this.http.put<PatientVisit>(`${this.host}/api/patient-visit/${id}`, patientVisit);
  }
  delete(id: string): Observable<PatientVisit> {
    return this.http.delete<PatientVisit>(`${this.host}/api/patient-visit/${id}`);
  }
}
