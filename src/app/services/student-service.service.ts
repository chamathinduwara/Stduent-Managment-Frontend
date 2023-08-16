import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private baseURL = 'https://localhost:7030/api/Student'
  constructor(private http:HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    nic: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  })

  getStudent(){
    return this.http.get(this.baseURL + '/' + this.form.value['id'])
  }

  populateForm(student:any) {
    this.form.setValue(student);
  }
}
