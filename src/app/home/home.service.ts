import { catchError, map, switchMap } from "rxjs/operators";
import { Observable, of, throwError } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  constructor(
    private http: HttpClient,
    private router: Router
    ){}

    uploadImg(data: any): Observable<any> {
        const url = 'https://aj6ii4bock.execute-api.us-east-2.amazonaws.com/test/transform';
        return this.http.post<any>(url, data)
        .pipe(
            catchError(err => {
              console.error(err);
              if(err.status == 500) {
                return of(err.status);
              }
               return throwError(err.error.message);
            }));
      }
  }