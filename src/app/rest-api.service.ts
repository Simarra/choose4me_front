import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { Proposition } from './propositions';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods' : 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'})
};
const apiUrl = "http://localhost:8000/";


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  private generalhandleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getPropositions(): Observable<any> {
    return this.http.get(apiUrl + 'propositions', httpOptions).pipe(
    map(this.extractData),
      catchError(this.generalhandleError));
      }
      
  addProposition (Proposition): Observable<Proposition> {
    return this.http.post<Proposition>(apiUrl, Proposition, httpOptions).pipe(
      tap((Proposition: Proposition) => console.log(`added Proposition w/ id=${Proposition.id}`)),
      catchError(this.handleError<Proposition>('addProposition'))
    );
  }
      
  updateProposition (id, Proposition): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, Proposition, httpOptions).pipe(
      tap(_ => console.log(`updated Proposition id=${id}`)),
      catchError(this.handleError<any>('updateProposition'))
    );
  }
    
  deleteProposition (id): Observable<Proposition> {
    const url = `${apiUrl}/${id}`;
  
    return this.http.delete<Proposition>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Proposition id=${id}`)),
      catchError(this.handleError<Proposition>('deleteProposition'))
    );
  }

  getPropositionsById(id: string): Observable<Proposition> {
    const url = `${apiUrl}/propositions/${id}`;
    return this.http.get<Proposition>(url, httpOptions).pipe(
      tap(_ => console.log(`fetched Proposition id=${id}`)),
      catchError(this.handleError<Proposition>(`getProposition id=${id}`)))
      ;
    }
  
  }
  
  

