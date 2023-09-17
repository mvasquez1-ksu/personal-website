import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contactMethodsUrl = 'api/contactMethods';

  constructor(private http: HttpClient) {}

  getContactMethods(): Observable<Contact[]> {
    return this.http
      .get<Contact[]>(this.contactMethodsUrl)
      .pipe(
        tap(),
        catchError(this.handleError<Contact[]>('getContactMethods', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
