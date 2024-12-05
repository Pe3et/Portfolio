import { Component, inject } from '@angular/core';
import { TextContentService } from '../shared/text-content/text-content.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.sass'
})
export class SkillsComponent {
  text = inject(TextContentService)
}
