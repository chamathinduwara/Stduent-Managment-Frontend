import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentInterface } from '../interfaces/student-interface';
import { Sort } from '@angular/material/sort';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private baseURL = 'https://localhost:7030/api/Student'
  constructor(private http: HttpClient){}

  fetchStudents(): Observable<StudentInterface[]> {
    return this.http.get<StudentInterface[]>(this.baseURL);
  }

}
