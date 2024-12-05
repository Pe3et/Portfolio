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
      },
      marquee1: {
        EN: "Frontend Developer",
        DE: "Frontend Developer"
      },
      marquee2: {
        EN: "Open to work",
        DE: "Offen für Arbeit"
      },
      marquee3: {
        EN: "Remote",
        DE: "Remote"
      },
      who: {
        EN: "Who I Am",
        DE: "Wer ich bin"
      },
      aboutmeHeading: {
        EN: "About me",
        DE: "Über mich"
      },
      aboutme: {
        EN: "Hello, I am a developer with an analytical mindset and a solution-oriented approach. I am currently continuously advancing my programming skills and am always striving to acquire new knowledge and expand my competencies.",
        DE: "Hallo, ich bin ein Entwickler mit analytischem Denken und Lösungsorientierung. Aktuell entwickle ich meine Programmierfähigkeiten kontinuierlich weiter und bin stets bestrebt, neues Wissen zu erwerben und meine Kompetenzen auszubauen."
      },
      aboutmeLocation: {
        EN: "I've been working remotely in recent years and really enjoy having the flexibility to create my ideal workspace and the possibility to control sensory inputs.",
        DE: "In den letzten Jahren habe ich remote gearbeitet und schätze die Flexibilität, meinen idealen Arbeitsplatz zu gestalten und die Möglichkeit, sensorische Reize steuern zu können."
      },
      aboutmeMind: {
        EN: "I am an open-minded person and can identify myself with the personality type 'INTP'.",
        DE: "Ich bin eine aufgeschlossene Person und kann mich mit dem Persönlichkeitstyp 'INTP' identifizieren."
      },
      aboutmeProfession: {
        EN: `Coding is more than just solving computer problems; it's a universal language of logic. I see code as a lens through which we can understand complex systems.
          I'm passionate about using coding as a problem-solving tool. Got a challenge for me?`,
        DE: `Programmieren ist mehr als nur das Lösen von Computerproblemen; es ist eine universelle Sprache der Logik.
          Ich sehe Code als eine Linse, durch die wir komplexe Systeme verstehen können
          und bin leidenschaftlich daran interessiert, Programmieren als Werkzeug zur Problemlösung einzusetzen. Haben Sie eine Herausforderung für mich?`
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
