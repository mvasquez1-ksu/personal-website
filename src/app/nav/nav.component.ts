import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  navItems: string[] = [
    "Projects",
    "Experience",
    "Education",
    "Contact"
  ];

  activeNav?: string;

  constructor(private navService: NavService) {}

  toggle(navItem: string) {
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
