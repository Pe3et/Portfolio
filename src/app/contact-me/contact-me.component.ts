import { Component, inject } from '@angular/core';
import { TextContentService } from '../shared/text-content/text-content.service';

@Component({
  selector: 'app-contact-me',
  imports: [],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.sass'
})
export class ContactMeComponent {
  text = inject(TextContentService)
}
