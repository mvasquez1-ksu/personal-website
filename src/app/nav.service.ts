import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  private navItemsUrl = 'api/navItems';

  constructor(private http: HttpClient) {}

  getNavItems(): Observable<string[]> {
    return this.http
      .get<string[]>(this.navItemsUrl)
      .pipe(tap(), catchError(this.handleError<string[]>('getNavItems', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  activeNavItem?: string | null = null;

  setActiveNavItem(navItem?: string) {
    if (navItem) {
      this.activeNavItem = navItem;
    } else {
      this.activeNavItem = void 0;
    }
  }
}
