import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  respLogoFull = new Image()
  respLogoHover = new Image()
  logoFull = new Image()
  logoHover = new Image()
  currentRespLogo: HTMLImageElement = this.respLogoFull
  currentLogo: HTMLImageElement = this.logoFull


  constructor() {
    this.respLogoFull.src = 'assets/img/logo.png'
    this.respLogoHover.src = 'assets/img/logo_hover.png'
    this.logoFull.src = 'assets/img/logo_full.png'
    this.logoHover.src = 'assets/img/logo_full_hover.png'
  }

  logoHoverChange() {
    this.currentRespLogo = this.respLogoHover
    this.currentLogo = this.logoHover
  }

  logoFullChange() {
    this.currentRespLogo = this.respLogoFull
    this.currentLogo = this.logoFull
  }
}
