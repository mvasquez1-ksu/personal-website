import { Component, OnInit } from "@angular/core";
import { ProjectService } from "../project.service";
import { Project } from "../project";
import { NavService } from "../nav.service";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
    animations: [
      trigger('fadeInOut', [
        state('in', style({ opacity: 1, transform: 'translateX(0)' })),
        transition(':enter', [
          style({ opacity: 0, transform: 'translateX(-100px)' }),
          animate('300ms ease-in-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ]),
        transition(':leave', [animate('150ms ease-in-out', style({ opacity: 0, transform: 'translateX(-100px)' }))]),
      ]),
    ]
})
export class ContainerComponent implements OnInit {
    projects: Project[] = [];

    constructor(private projectService: ProjectService, private navService: NavService) { }

    ngOnInit(): void {
      this.getProjects();
    }

    getProjects(): void {
      this.projectService.getProjects().subscribe(projects => this.projects = projects);
    }

    get activeNavItem() {
      return this.navService.activeNavItem;
    }


}