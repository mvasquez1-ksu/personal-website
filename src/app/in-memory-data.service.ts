import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const projects = [
      {
        id: 1,
        name: 'Quictionary',
        summary: 'A powerful flashcard study application',
        techstack: 'Swift, Core Data'
      },
      {
        id:2,
        name: 'Project Name',
        summary: 'Project Summary',
        techstack: 'Project Tech Stack'
      }
  ];
  return {projects}
  }

  genId(projects: Project[]): number {
    return projects.length > 0 ? Math.max(...projects.map(project => project.id)) + 1 : 11;
  }
}
