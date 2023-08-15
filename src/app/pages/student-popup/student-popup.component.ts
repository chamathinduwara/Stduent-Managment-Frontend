import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-student-popup',
  templateUrl: './student-popup.component.html',
  styleUrls: ['./student-popup.component.css']
})
export class StudentPopupComponent implements OnInit {
  user;
  constructor(@Inject(MAT_DIALOG_DATA) public data:object) {
    this.user = data;
    console.log(data)
  }

  ngOnInit(): void {}


}
