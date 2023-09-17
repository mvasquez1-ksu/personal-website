import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { Content } from '../../models/content';
import { ContactService } from '../../services/contact.service';
import { ContentService } from '../../services/content.service';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate(
          '300ms ease-in-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '150ms ease-in-out',
          style({ opacity: 0, transform: 'translateX(-100px)' })
        ),
      ]),
    ]),
  ],
})
export class ContainerComponent implements OnInit {
  content: Content[] = [];
  contactMethods: Contact[] = [];
  navItems: string[] = [];

  constructor(
    private navService: NavService,
    private contentService: ContentService,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.getContent();
    this.getContactMethods();
    this.getNavItems();
  }

  getContactMethods(): void {
    this.contactService
      .getContactMethods()
      .subscribe((contactMethods) => (this.contactMethods = contactMethods));
  }

  getContent(): void {
    this.contentService
      .getContent()
      .subscribe((content) => (this.content = content));
  }

  getNavItems(): void {
    this.navService
      .getNavItems()
      .subscribe((navItems) => (this.navItems = navItems));
  }

  getSectionContent(): Content[] {
    console.log(
      this.content.filter(
        (content) => content.contentTag === this.activeNavItem
      )
    );
    return this.content.filter(
      (content) => content.contentTag === this.activeNavItem
    );
  }

  get activeNavItem() {
    return this.navService.activeNavItem;
  }
}
