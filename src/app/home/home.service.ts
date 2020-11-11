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
        const url = 'link aqui';
        return this.http.post<any>(url, data)
        .pipe(
            catchError(err => {
              console.error(err);
               return throwError(err.error.message);
            }));
      }
  }