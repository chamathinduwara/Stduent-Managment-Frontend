import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit{
  registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    mobile: ['',Validators.required],
    email: ['', [Validators.required, Validators.email]],
    nic: ['', Validators.required],
    dateOfBirth: ['',Validators.required],
    address: ['', Validators.required]
  });
  isSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(
      'submitted form',
      this.registerForm.value,
      this.registerForm.invalid
    );
    this.isSubmitted = true;
  }
}
