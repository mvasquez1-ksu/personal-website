import { Component, OnInit } from "@angular/core";
import { ProjectService } from "../project.service";
import { Project } from "../project";

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
    projects: Project[] = [];

    constructor(private projectService: ProjectService) { }

    ngOnInit(): void {
      this.getProjects();
    }

    getProjects(): void {
      this.projectService.getProjects().subscribe(projects => this.projects = projects);
    }


}