import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Poetry } from '../interfaces/poetry';

@Injectable({
  providedIn: 'root'
})
export class PoetryService {

  constructor(private http: HttpClient) { }

  // save new poetry to the database
  addPoetries(poetry:Poetry): Observable<Poetry> {
    // 1. send post request to node-poet server
    return this.http.post<Poetry>('http://localhost:7000/poetries', poetry)
      .pipe(
        catchError(this.handleError)
      )
  }

  // get single poetries by _id or all poetries
  getPoetries(_id?:string): Observable<Poetry[]> {
    if(_id) {
      // get single poetries
        return this.http.get<any>(`http://localhost:7000/poetries/${_id}`)
        .pipe(
          catchError(this.handleError)
        )
    } else {
      // get all poetries
        return this.http.get<any>('http://localhost:7000/poetries')
        .pipe(
          catchError(this.handleError)
        )
    }
  }

  // edit single poetry by _id
  editPoetries(_id:string|undefined, body:Poetry): Observable<string> {
    return this.http.put<any>(`http://localhost:7000/poetries/${_id}`, body)
    .pipe(
      catchError(this.handleError)
    )
  }

  deletePoetries(_id: string) {
    return this.http.delete<any>('http://localhost:7000/poetries/'+_id)
      .pipe(
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(()=> new Error('error in post request'))
    // todo: display an error with toast! (http interceptor?)
  }
}
