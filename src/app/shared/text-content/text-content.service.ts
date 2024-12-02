import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextContentService {
  language: "DE" | "EN";
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
      },
      heroButton1: {
        EN: "Check my work",
        DE: "Arbeit ansehen"
      },
      heroButton2: {
        EN: "Contact me",
        DE: "Schreib mir"
      }
    }

  constructor() {
    this.language = this.getLanguageFromLocalStorage()
  }

  getText(key: string) {
    return this.text[key][this.language]
  }

  switchLanguage() {
    this.language = this.language === "EN" ? "DE" : "EN";
    localStorage.setItem("language", this.language)
  }

  getLanguageFromLocalStorage() {
    let storageLang = localStorage.getItem("language");
    if (storageLang === "DE") {
      return "DE"
    } else {
      return "EN"
    }
  }
}
