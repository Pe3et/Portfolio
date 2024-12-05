import { Component, inject } from '@angular/core';
import { TextContentService } from '../shared/text-content/text-content.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {
  text = inject(TextContentService)
}
