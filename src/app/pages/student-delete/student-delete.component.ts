import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentDeleteService } from 'src/app/services/deleteServices/student-delete.service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent {
  registerForm : FormGroup;
  isSubmitted = false;

  constructor(private fb:FormBuilder, private studentDeleteService :StudentDeleteService){ 
    this.registerForm = this.fb.group({
      id: ['', Validators.required],
    });
   }


  onSubmit(): void {
    const id: number = this.registerForm.value.id;
    this.studentDeleteService.deleteStudent(id).subscribe((respone: any) => console.log(respone));
    this.isSubmitted = true;
  }
}
