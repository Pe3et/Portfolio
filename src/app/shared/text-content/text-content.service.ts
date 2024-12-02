import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextContentService {
  language: "DE" | "EN" = "EN"
  text: { [key: string]: { EN: string, DE: string } } =
    {
      nav1: {
        EN: "About me",
        DE: "Über mich"
      },
      nav2: {
        EN: "Skills",
        DE: "Fähigkeiten"
      },
      nav3: {
        EN: "Projects",
        DE: "Projekte"
      }
    }

  constructor() { }
}
