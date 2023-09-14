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
        summary: 'Quictionary is a powerful flashcard study tool and a multilingual dictionary combined into one application to allow for quick and easy studying. Quictionary uses a spaced repetition algorithm to assign users daily review sessions. The users can also create study lists to personalize their reviews. This application is meant to act as a companion app to allow language learners to engage with many types of content in their target language while pulling words and phrases to study in Quictionary. This application is being developed for iOS using SwiftUI and Core Data.',
        techstack: 'Swift, Core Data',
        link: 'https://github.com/mvasquez1-ksu/quictionary',
        cover_image_path: 'assets/img/quictionary-cover-image.png'
      },
      {
        id:2,
        name: 'Personal Website',
        summary: 'This is the website you are browsing right now! I built this using Angular. This website serves as the home to all of my projects, work experience, education info, and more.',
        techstack: 'Angular, TypeScript',
        link: 'https://github.com/mvasquez1-ksu/personal-website',
        cover_image_path: 'assets/img/quictionary-cover-image.png'
      }
  ];
  return {projects}
  }

  genId(projects: Project[]): number {
    return projects.length > 0 ? Math.max(...projects.map(project => project.id)) + 1 : 11;
  }
}
