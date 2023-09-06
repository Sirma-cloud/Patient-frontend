import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  savePatient(patientData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create/patient`, patientData);
  }
}
