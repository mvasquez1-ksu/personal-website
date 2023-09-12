import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }

  activeNavItem: string | null = null;

  setActiveNavItem(navItem: string) {
    this.activeNavItem = navItem;
  }
}
