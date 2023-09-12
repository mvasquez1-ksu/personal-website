import { Component, OnInit } from "@angular/core";
import { ProjectService } from "../project.service";
import { Project } from "../project";
import { NavService } from "../nav.service";

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
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