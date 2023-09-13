import { Component } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactMethods: Contact [] = [
    {
      media: 'Email',
      username: 'mvasquez1@ksu.edu',
      link: 'mailto:mvasquez1@ksu.edu',
      image_path: '/assets/img/email-icon.png'
    },
    {
      media: 'LinkedIn',
      username: 'Marco Vasquez',
      link: 'https://www.linkedin.com/in/marco-vasquez-99673521b',
      image_path: '/assets/img/linkedin-icon.png'
    },
    {
      media: 'GitHub',
      username: 'mvasquez1-ksu',
      link: 'https://github.com/mvasquez1-ksu',
      image_path: '/assets/img/github-icon.png'
    }
  ];

  openLink(contact: Contact) {
    if (contact.link) {
      window.open(contact.link, "_blank");
    }
  }

}
