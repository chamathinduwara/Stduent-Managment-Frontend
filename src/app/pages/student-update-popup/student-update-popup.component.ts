import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentDeleteService } from 'src/app/services/deleteServices/student-delete.service';
import { StudentServiceService } from 'src/app/services/student-service.service';
import { StudentUpdateService } from 'src/app/services/updateServices/student-update.service';

@Component({
  selector: 'app-student-update-popup',
  templateUrl: './student-update-popup.component.html',
  styleUrls: ['./student-update-popup.component.css']
})
export class StudentUpdatePopupComponent implements OnInit{
  constructor() {};

  ngOnInit(): void {
    
  }
}
