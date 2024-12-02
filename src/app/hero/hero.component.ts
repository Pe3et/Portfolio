import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TextContentService } from '../shared/text-content/text-content.service';

@Component({
  selector: 'app-hero',
  imports: [HeaderComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.sass'
})
export class HeroComponent {
  text = inject(TextContentService)
}
