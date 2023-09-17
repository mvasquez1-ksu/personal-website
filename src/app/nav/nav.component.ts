import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  @Input() navItems?: string[];

  activeNav?: string;

  constructor(private navService: NavService) {}

  toggle(navItem: string) {
    if (this.isActive(navItem)) {
      var active = document.getElementById(navItem.toLowerCase());
      active!.classList.remove('active');
      this.navService.setActiveNavItem();
      this.activeNav = void 0;
      return;
    }
    var element = document.getElementById(navItem.toLowerCase())!;
    //this.activeNav = this.activeNav === navItem ? void 0 : navItem;
    if (this.activeNav) {
      var active = document.getElementById(this.activeNav.toLowerCase());
      active!.classList.remove('active');
    }
    this.activeNav = navItem;
    this.navService.setActiveNavItem(navItem);
    element.classList.add('active');
  }

  isActive(navItem: string): boolean {
    return this.activeNav === navItem;
  }
}
