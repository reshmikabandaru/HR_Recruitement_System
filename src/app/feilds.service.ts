import { Injectable } from '@angular/core';
import { Fields } from './feilds';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FeildsService{
  private apiUrl = ' '; // 

  constructor(private http: HttpClient) { }


  getFeilds(): Observable<Fields[]> {
    return this.http.get<Fields[]>(this.apiUrl);
  }
}
