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
  addPoetry(poetry:Poetry): Observable<Poetry> {
    // 1. send post request to node-poet server
    return this.http.post<Poetry>('http://localhost:7000/poetry', poetry)
      .pipe(
        catchError(this.handleError)
      )
  }

  // get all poetries
  getPoetries(): Observable<any> {
    return this.http.get<any>('http://localhost:7000/poetries')
      .pipe(
        catchError(this.handleError)
      )
  }

  deletePoetry(_id: string) {
    console.log('from ng deletePoetry')
    return this.http.delete<any>('http://localhost:7000/poetry/'+_id)
      .pipe(
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    console.log('errore!!!')
    console.log(error);
    return throwError(()=> new Error('error in post request.'))
  }
}
