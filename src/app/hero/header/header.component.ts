import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  logoFull = new Image()
  logoHover = new Image()
  currentLogo: HTMLImageElement

  constructor() {
    this.logoFull.src = 'assets/img/logo.png'
    this.logoHover.src = 'assets/img/logo_hover.png'
    this.currentLogo = this.logoFull
  }

  logoHoverChange() {
    this.currentLogo = this.logoHover
  }

  logoFullChange() {
    this.currentLogo = this.logoFull
  }
}
