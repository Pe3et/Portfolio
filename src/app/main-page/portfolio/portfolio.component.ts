import { Component, inject } from '@angular/core';
import { TextContentService } from './../../shared/text-content/text-content.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.sass'
})
export class PortfolioComponent {
  text = inject(TextContentService)
  projects: {title: string, skills: string[], previewSrc: string , description: string} [] = [
    {
      title: 'Join',
      skills: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      previewSrc: '',
      description: 'todo'
    },
    {
      title: 'Demon Assault',
      skills: ['JavaScript', 'HTML', 'CSS'],
      previewSrc: './assets/img/demon_assault_preview.png',
      description: 'todo'
    }
  ]
}
