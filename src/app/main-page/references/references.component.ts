import { Component, inject } from '@angular/core';
import { TextContentService } from '../../shared/text-content/text-content.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.sass'
})
export class ReferencesComponent {
  text = inject(TextContentService)
  references: { reference:{EN: string, DE: string}, name: string }[] = [
    {
      reference: {
        EN:`Through his extensive know-how, Peeet significantly contributed to the success of our
        group project, the web application "Join". Furthermore, he always took the time to present
        and explain his progress. Additionally, Peeet consistently offered his help, even outside
        of group projects.`,
        DE:`Peeet hat durch sein umfangreiches Know-how maßgeblich zum Erfolg unseres
        Gruppenprojektes, der Web-Applikation "Join" beigetragen. Des Weiteren hat er sich
        stets die Zeit genommen seine Fortschritte zu präsentieren und zu erklären. Zudem hat
        Peeet stets seine Hilfe angeboten, auch außerhalb der Gruppenprojekte.`
      },
      name: 'Sebastian B.'
    },
    {
      reference: {
        EN:`Through his structured way of thinking, his extensive knowledge, his teamwork,
        and his great dedication, the project became a very pleasant experience. I would gladly
        work with him on a joint project again at any time.`,
        DE:`Durch seine strukturierte Denkweise, sein umfangreiches Wissen, seine Teamarbeit
        und seine große Hingabe wurde das Projekt zu einer sehr schönen Erfahrung. Ich würde
        jederzeit wieder gerne mit ihm an einem gemeinsamen Projekt arbeiten.`
      },
      name: 'Can O.'
    },
    {
      reference: {
        EN:`Peeet was an anchor you could trust, not only during group work but also privately.
        Solutions to problems were found very quickly when working with Peeet and were also fun
        to tackle. He was very conscientious and efficient in carrying out his tasks.`,
        DE:`Peeet war nicht nur während der Gruppenarbeit, sondern auch privat, ein Anker dem man
        vertrauen konnte. Lösungen von Problemen wurden in der Zusammenarbeit mit Peeet sehr schnell
        gefunden und waren auch spaßig anzugehen. Er war sehr gewissenhaft und effizient in der
        Ausführung seiner Aufgaben.`
      },
      name: 'Ben D.'
    },
  ]
  activeReferenceIndex: number = 0
  leftReferenceIndex: number = this.references.length - 1
  rightReferenceIndex: number = this.activeReferenceIndex + 1
  moveCarouselLeft: boolean = false
  moveCarouselRight: boolean = false  
  isMoving: boolean = false
  animationDuration: number = 500

  previousReference() {
    this.isMoving = true
    if(this.activeReferenceIndex > 0) {
      this.activeReferenceIndex--
      this.leftReferenceIndex = this.activeReferenceIndex > 0 ? this.activeReferenceIndex - 1 : this.references.length - 1
      this.rightReferenceIndex = this.activeReferenceIndex + 1
    } else {
      this.activeReferenceIndex = this.references.length - 1
      this.leftReferenceIndex = this.activeReferenceIndex - 1
      this.rightReferenceIndex = 0
    }
    this.moveCarouselLeft = true
    this.moveCarouselRight = false
    setTimeout(() => this.isMoving = false, this.animationDuration);
  }

  nextReference() {
    this.isMoving = true
    if(this.activeReferenceIndex < this.references.length -1) {
      this.activeReferenceIndex++
      this.leftReferenceIndex = this.activeReferenceIndex - 1
      this.rightReferenceIndex = this.activeReferenceIndex < this.references.length - 1 ? this.activeReferenceIndex + 1 : 0
    } else {
      this.activeReferenceIndex = 0
      this.leftReferenceIndex = this.references.length - 1
      this.rightReferenceIndex = this.activeReferenceIndex + 1
    }
    this.moveCarouselLeft = false
    this.moveCarouselRight = true
    setTimeout(() => this.isMoving = false, this.animationDuration);
  }
}

