import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const content = [
      {
        contentTag: 'Projects',
        title: 'Quictionary',
        subtitle: 'Swift, Core Data',
        details: [
          'Quictionary is a powerful flashcard study tool and a multilingual dictionary combined into one application to allow for quick and easy studying. Quictionary uses a spaced repetition algorithm to assign users daily review sessions. The users can also create study lists to personalize their reviews. This application is meant to act as a companion app to allow language learners to engage with many types of content in their target language while pulling words and phrases to study in Quictionary. This application is being developed for iOS using SwiftUI and Core Data.',
        ],
        link: 'https://github.com/mvasquez1-ksu/quictionary',
        imagePath: 'assets/img/quictionary-cover-image.png',
      },
      {
        contentTag: 'Projects',
        title: 'Personal Website',
        subtitle: 'Angular, TypeScript',
        details: [
          'This is the website you are browsing right now! I built this using Angular. This website serves as the home to all of my projects, work experience, education info, and more.',
        ],
        link: 'https://github.com/mvasquez1-ksu/personal-website',
        imagePath: 'assets/img/quictionary-cover-image.png',
      },
      {
        contentTag: 'Experience',
        title: 'Developer Intern',
        subtitle: 'WellSky',
        date: 'Jun 2022 - Aug 2022',
        location: 'Overland Park, KS',
        details: [
          'Contributed to world-class blood transfusion application',
          '- Accomplished goals using Agile and Scrum frameworks',
          '- Created and expanded UI components using Angular Framework',
          '- Expanded and integrated APIs using .NET Core Framework',
          '- Deployed pipelines using Azure',
          '- Assisted in porting legacy version to modern frameworks',
          '- Applied multilingual skills to collaborate with South America-based colleagues',
        ],
        imagePath: 'assets/img/wellskylogo.png',
      },
      {
        contentTag: 'Education',
        title: 'Kansas State University',
        subtitle: 'B.S. Computer Science',
        date: 'Aug 2019 - May 2023',
        location: 'Manhattan, KS',
        details: [
          'Relevant Coursework',
          '- Data and Program Structures',
          '- Logical Foundations of Programming',
          '- Object-Oriented Design',
          '- Implementation and Testing',
          '- Ethics and Conduct for Computing Professionals',
          'Minor - Japanese',
        ],
        imagePath: 'assets/img/ksulogo.png',
      },
    ];
    const contactMethods = [
      {
        media: 'Email',
        username: 'mvasquez1@ksu.edu',
        link: 'mailto:mvasquez1@ksu.edu',
        image_path: 'assets/img/email-icon.png',
      },
      {
        media: 'LinkedIn',
        username: 'Marco Vasquez',
        link: 'https://www.linkedin.com/in/marco-vasquez-99673521b',
        image_path: 'assets/img/linkedin-icon.png',
      },
      {
        media: 'GitHub',
        username: 'mvasquez1-ksu',
        link: 'https://github.com/mvasquez1-ksu',
        image_path: 'assets/img/github-icon.png',
      },
    ];
    const navItems = ['Projects', 'Experience', 'Education', 'Contact'];
    return { content, contactMethods, navItems };
  }
}
