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
  projects: {title: string, skills: string[], previewSrc: string , description: {EN: string, DE: string}} [] = [
    {
      title: 'Join',
      skills: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      previewSrc: './assets/img/join_preview.png',
      description: {
        EN: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        DE: 'Aufgabenverwaltungssystem inspiriert vom Kanban-Prinzip. Ermöglicht das Erstellen und Organisieren von Aufgaben mittels Drag-and-Drop-Funktionalität sowie die Zuweisung von Benutzern und Kategorien.'
      }
    },
    {
      title: 'Demon Assault',
      skills: ['JavaScript', 'HTML', 'CSS'],
      previewSrc: './assets/img/demon_assault_preview.png',
      description: {
        EN: `Challenging Jump 'n' Run game based on object-oriented programming. Collect droppables and shoot lightnings.`,
        DE: `Anspruchsvolles Jump 'n' Run-Spiel basierend auf objektorientierter Programmierung. Sammle fallengelassene Items und schieße Blitze.`
      }
    }
  ]
  overlayVisibility: boolean = false
  overlayProjectIndex: number = 0

  openProjectCard(index: number) {
    if(!this.overlayVisibility) this.toggleOverlay()
    this.overlayProjectIndex = index
  }

  toggleOverlay() {
    this.overlayVisibility = !this.overlayVisibility
  }

  propagationStop(event: Event) {
    event.stopPropagation()
  }
}
