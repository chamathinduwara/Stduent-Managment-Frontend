import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentInterface } from 'src/app/interfaces/student-interface';
import { StudentUpdateService } from 'src/app/services/updateServices/student-update.service';
@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent {
  registerForm : FormGroup;
  isSubmitted = false;

  student! : StudentInterface ;
  constructor(private fb:FormBuilder, private studentUpdateService :StudentUpdateService){ 
    this.registerForm = this.fb.group({
      id: ['', Validators.required],
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
    this.studentUpdateService.updateStudent(this.student).subscribe((respone: any) => console.log(respone));
    this.isSubmitted = true;
  }
}
