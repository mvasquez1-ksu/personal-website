import { Component, Input } from '@angular/core';
import { Content } from '../../models/content';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.css'],
})
export class ContentSectionComponent {
  @Input() header?: string;
  @Input() content?: Content[];

  openLink(content: Content) {
    if (content.link) {
      window.open(content.link, '_blank');
    }
  }
}
