import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { StudentInterface } from 'src/app/interfaces/student-interface';
import { StudentRegistrationInterface } from 'src/app/interfaces/student-registration-interface';

@Injectable({
  providedIn: 'root'
})
export class StudentRegistrationService {

  private baseURL = 'https://localhost:7030/api/Student'
  constructor(private httpClient : HttpClient) {}

  addStudent(student: StudentRegistrationInterface): Observable<any> {
    const headers = {'content-type':'application/json'}
    const body = JSON.stringify(student);
    return this.httpClient.post<StudentRegistrationInterface>(this.baseURL, body,{'headers':headers});
  }
}
