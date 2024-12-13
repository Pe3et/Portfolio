import { Component, inject } from '@angular/core';
import { TextContentService } from '../shared/text-content/text-content.service';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../main-page/hero/header/header.component';
import { FooterComponent } from '../main-page/footer/footer.component';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.sass'
})
export class PrivacyPolicyComponent {
  text = inject(TextContentService)

  constructor() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }
}
