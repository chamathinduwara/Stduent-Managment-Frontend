import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private baseURL = 'https://localhost:7030/api/Student'

  constructor(private http: HttpClient) {}
  
  getDate () {
    return this.http.get(this.baseURL);
    
  }
}
