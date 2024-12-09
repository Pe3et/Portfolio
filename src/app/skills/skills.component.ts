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
  skills: {name: string, src: string}[] = [
    { name: 'HTML', src: "./assets/img/frontend_icons/html.svg" },
    { name: 'CSS', src: "./assets/img/frontend_icons/css.svg" },
    { name: 'JavaScript', src: "./assets/img/frontend_icons/javascript.svg" },
    { name: 'TypeScript', src: "./assets/img/frontend_icons/typescript.svg" },
    { name: 'Angular', src: "./assets/img/frontend_icons/angular.svg" },
    { name: 'Firebase', src: "./assets/img/frontend_icons/firebase.svg" },
    { name: 'Git', src: "./assets/img/frontend_icons/git.svg" },
    { name: 'REST-API', src: "./assets/img/frontend_icons/rest_api.svg" },
    { name: 'Scrum', src: "./assets/img/frontend_icons/scrum.svg" },
    { name: 'Growth Mindset', src: "./assets/img/frontend_icons/growth.svg" }
  ]
}
