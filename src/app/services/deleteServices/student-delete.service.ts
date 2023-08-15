import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDeleteService {

  private baseURL = 'https://localhost:7030/api/Student'
  constructor(private httpClient : HttpClient) {}

  deleteStudent(id : number) {
    return this.httpClient.delete<number>(this.baseURL+"/"+id);
  }
}
