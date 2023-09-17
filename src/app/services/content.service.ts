import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private contentUrl = 'api/content';

  constructor(private http: HttpClient) {}

  getContent(): Observable<Content[]> {
    return this.http
      .get<Content[]>(this.contentUrl)
      .pipe(tap(), catchError(this.handleError<Content[]>('getContent', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
