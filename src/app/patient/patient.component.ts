import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  patient: any = {
    firstName: '',
    middleName: '',
    lastName: '',
    identificationType: 'NATIONAL_ID',
    identificationNumber: '',
  }
  

  constructor(private patientService: PatientService) {}


  onSave() {
    this.patientService.savePatient(this.patient).subscribe(
      (response) => {
        console.log('Patient saved successfully', response);
        // Clear the form or perform any other actions you need
      },
      (error) => {
        console.error('Error saving patient', error);
      }
    );
  }
  clearForm() {
    this.patient = {
      firstName: '',
      middleName: '',
      lastName: '',
      identificationType: '',
      identificationNumber: '',
    };
  }
}