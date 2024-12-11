import { Component, inject } from '@angular/core';
import { TextContentService } from '../shared/text-content/text-content.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.sass'
})
export class LegalNoticeComponent {
  text = inject(TextContentService)
}
