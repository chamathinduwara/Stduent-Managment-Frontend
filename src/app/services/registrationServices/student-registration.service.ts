import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentRegistrationService {

  private baseURL = 'https://localhost:7030/api/Student'
  constructor(private httpClient : HttpClient) {}

}
