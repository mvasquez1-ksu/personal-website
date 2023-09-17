import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { Content } from '../content';
import { NavService } from '../nav.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ContentService } from '../content.service';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

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
  projects: Project[] = [];
  content: Content[] = [];
  contactMethods: Contact[] = [];
  navItems: string[] = [];

  constructor(
    private projectService: ProjectService,
    private navService: NavService,
    private contentService: ContentService,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.getProjects();
    this.getContent();
    this.getContactMethods();
    this.getNavItems();
  }

  getProjects(): void {
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
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
