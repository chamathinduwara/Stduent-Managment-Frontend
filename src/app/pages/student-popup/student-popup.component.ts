import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StudentInterface } from 'src/app/interfaces/student-interface';
import { StudentDeleteService } from 'src/app/services/deleteServices/student-delete.service';
import { StudentServiceService } from 'src/app/services/student-service.service';
import { StudentUpdateService } from 'src/app/services/updateServices/student-update.service';

@Component({
  selector: 'app-student-popup',
  templateUrl: './student-popup.component.html',
  styleUrls: ['./student-popup.component.css']
})
export class StudentPopupComponent implements OnInit {

  studentUpdateValue!: StudentInterface;
  updateForm: FormGroup;
  studentvalue:any;
  constructor(private service : StudentServiceService,
    private studentUpdateService: StudentUpdateService,
    private dialogRef: MatDialogRef<StudentPopupComponent>, private studentDeleteService : StudentDeleteService,
    private formBilder : FormBuilder) {
      this.updateForm = this.formBilder.group({
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

  ngOnInit(): void {
    this.studentvalue = this.service.form.value;
  }

  onClose() {
    this.service.form.reset();
    this.dialogRef.close()
  }
  onUpdate() {
    this.updateForm.value.id = this.studentvalue.id;
    this.studentUpdateValue = {...this.updateForm.value}
    this.studentUpdateService.updateStudent(this.studentUpdateValue).subscribe((respone:any) => console.log(respone));
    this.service.form.reset();
    this.dialogRef.close()

  }
  onDelete() {
    const id = this.studentvalue.id;
    console.log(this.studentvalue.id);
    this.studentDeleteService.deleteStudent(id).subscribe((respone: any) => console.log(respone));
    this.service.form.reset();
    this.dialogRef.close()
  }
}
