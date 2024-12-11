import { Component, inject } from '@angular/core';
import { TextContentService } from '../shared/text-content/text-content.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.sass'
})
export class PrivacyPolicyComponent {
  text = inject(TextContentService)
}
