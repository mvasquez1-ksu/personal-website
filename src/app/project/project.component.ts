import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  @Input() proj!: Project

  openLink(project: Project) {
    if (project.link) {
      window.open(project.link, "_blank");
    }
  }

}
