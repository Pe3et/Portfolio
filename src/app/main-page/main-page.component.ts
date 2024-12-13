import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { ReferencesComponent } from "./references/references.component";

@Component({
  selector: 'app-main-page',
  imports: [HeroComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ContactMeComponent, FooterComponent, ReferencesComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.sass'
})
export class MainPageComponent {

}
