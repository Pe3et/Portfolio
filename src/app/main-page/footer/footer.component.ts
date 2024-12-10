import { Component, inject } from '@angular/core';
import { TextContentService } from './../../shared/text-content/text-content.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {
  text = inject(TextContentService)
  logoFull = new Image()
  logoHover = new Image()
  currentLogo: HTMLImageElement = this.logoFull

  constructor() {
    this.logoFull.src = 'assets/img/logo_full.png'
    this.logoHover.src = 'assets/img/logo_full_hover.png'
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  logoHoverChange() {
    this.currentLogo = this.logoHover
  }

  logoFullChange() {
    this.currentLogo = this.logoFull
  }
}
