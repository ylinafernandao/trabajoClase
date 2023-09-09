import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { StudentResponse } from '../models/student-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  all(): Observable<any> {
    return this.http.get<StudentResponse>(environment.studentEndPoint);
  }
}
