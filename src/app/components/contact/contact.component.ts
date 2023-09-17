import { Component, Input } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @Input() header?: string;
  @Input() contactMethods?: Contact[];

  openLink(contact: Contact) {
    if (contact.link) {
      window.open(contact.link, '_blank');
    }
  }
}
