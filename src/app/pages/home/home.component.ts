import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentInterface } from 'src/app/interfaces/student-interface';
import { StudentsDataSource } from 'src/app/services/students.dataSource';
import { StudentsService } from 'src/app/services/students.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { StudentPopupComponent } from '../student-popup/student-popup.component';
import { StudentServiceService } from 'src/app/services/student-service.service';
import { StudentUpdatePopupComponent } from '../student-update-popup/student-update-popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'mobile', 'email', 'nic'];
  dataSource!: MatTableDataSource<StudentInterface>;
  postData: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private studentsService: StudentsService, private studetService: StudentServiceService ,private dialogRef : MatDialog ) {
    this.studentsService.fetchStudents().subscribe((data) => {
      this.postData = data;
      this.dataSource = new MatTableDataSource(this.postData);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
  }
  onRowClick(row:any) {
    // console.log('Single click:', row);
    this.studetService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "100";
    this.dialogRef.open(StudentPopupComponent,dialogConfig);

  }

  onRowDoubleClick(row: any) {
    // console.log('Double click:', row);
    this.studetService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "1500";
    dialogConfig.height = "1500";
    this.dialogRef.open(StudentPopupComponent,dialogConfig);
  }

  // applyFilter(event : Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

}

