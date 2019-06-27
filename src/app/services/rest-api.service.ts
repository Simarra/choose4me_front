import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Proposition } from './proposition';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  // Define API
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  /*========================================
  CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // HttpClient API get() method => Fetch Propositions list
  getPropositions(): Observable<Proposition> {
    return this.http.get<Proposition>(this.apiURL + '/Propositions')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API get() method => Fetch Proposition
  getProposition(id): Observable<Proposition> {
    return this.http.get<Proposition>(this.apiURL + '/Propositions/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API post() method => Create Proposition
  createProposition(Proposition): Observable<Proposition> {
    return this.http.post<Proposition>(this.apiURL + '/Propositions', JSON.stringify(Proposition), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API put() method => Update Proposition
  updateProposition(id, Proposition): Observable<Proposition> {
    return this.http.put<Proposition>(this.apiURL + '/Propositions/' + id, JSON.stringify(Proposition), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API delete() method => Delete Proposition
  deleteProposition(id) {
    return this.http.delete<Proposition>(this.apiURL + '/Propositions/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}