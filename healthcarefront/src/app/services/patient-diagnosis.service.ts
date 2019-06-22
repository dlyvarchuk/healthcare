import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PatientDiagnosis} from '../models/PatientDiagnosis';

@Injectable({
  providedIn: 'root'
})
export class PatientDiagnosisService {
  private host = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getById(id: string): Observable<PatientDiagnosis> {
    return this.http.get<PatientDiagnosis>(`${this.host}/api/patient-diagnosis/${id}`);
  }
  getAll(): Observable<PatientDiagnosis[]> {
    return this.http.get<PatientDiagnosis[]>(`${this.host}/api/patient-diagnosis`);
  }
  create(patientDiagnosis: PatientDiagnosis): Observable<PatientDiagnosis> {
    return this.http.post<PatientDiagnosis>(`${this.host}/api/patient-diagnosis`, patientDiagnosis);
  }
  update(id: string, patientDiagnosis: PatientDiagnosis): Observable<PatientDiagnosis> {
    return this.http.put<PatientDiagnosis>(`${this.host}/api/patient-diagnosis/${id}`, patientDiagnosis);
  }
  delete(id: string): Observable<PatientDiagnosis> {
    return this.http.delete<PatientDiagnosis>(`${this.host}/api/patient-diagnosis/${id}`);
  }
}
