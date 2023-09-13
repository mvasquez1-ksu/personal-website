import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }

  activeNavItem?: string | null = null;

  setActiveNavItem(navItem?: string) {
    if (navItem) {
      this.activeNavItem = navItem;
    }
    else {
      this.activeNavItem = void 0;
    }
  }
}
