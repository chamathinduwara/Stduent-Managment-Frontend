import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentRegistrationService } from 'src/app/services/registrationServices/student-registration.service';
import { StudentInterface } from 'src/app/interfaces/student-interface';
import { StudentRegistrationInterface } from 'src/app/interfaces/student-registration-interface';
@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent {
  registerForm : FormGroup;
  isSubmitted = false;

  student! : StudentRegistrationInterface ;
  constructor(private fb:FormBuilder, private studentRegistrationService :StudentRegistrationService){ 
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nic: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required]
    });
   }


  onSubmit(): void {
    this.student = {...this.registerForm.value};
    this.studentRegistrationService.addStudent(this.student).subscribe((respone: any) => console.log(respone));
    this.isSubmitted = true;
  }
}
