import { Component, inject } from '@angular/core';
import { TextContentService } from '../shared/text-content/text-content.service';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.sass'
})
export class AboutMeComponent {
  text = inject(TextContentService)

}
