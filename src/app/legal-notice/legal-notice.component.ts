import { Component, inject } from '@angular/core';
import { TextContentService } from '../shared/text-content/text-content.service';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../main-page/hero/header/header.component';
import { FooterComponent } from '../main-page/footer/footer.component';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.sass'
})
export class LegalNoticeComponent {
  text = inject(TextContentService)
}
