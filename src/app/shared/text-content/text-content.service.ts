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
        EN: "Hello, I'm a solution-oriented developer who approaches problems with a combination of analytical and intuitive thinking. I am currently continuously advancing my programming skills and am always striving to acquire new knowledge and expand my competencies.",
        DE: "Hallo, ich bin ein lösungsorientierter Entwickler, der Probleme mit einer Kombination aus analytischem und intuitivem Denken angeht. Aktuell entwickle ich meine Programmierfähigkeiten kontinuierlich weiter und bin stets bestrebt, neues Wissen zu erwerben und meine Kompetenzen auszubauen."
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
      },
      technologies: {
        EN: "Technologies",
        DE: "Technologieen"
      },
      skillsetHeading: {
        EN: "Skill Set",
        DE: "Skill Set"
      },
      skillset1: {
        EN: "Recently, I have focused on various projects in frontend development and currently plan to further educate myself in the backend area.",
        DE: "Ich habe mich in jüngster Zeit mit diversen Projekten auf die Frontend Entwicklung fokussiert und habe aktuell vor, mich im Backend Bereich weiterzubilden."
      },
      skillset2a: {
        EN: "You need",
        DE: "Sie brauchen"
      },
      skillset2b: {
        EN: "more skills?",
        DE: "mehr Skills?"
      },
      skillset3: {
        EN: "Feel free to contact me. I'm looking to expand my skills.",
        DE: "Kontaktieren Sie mich gern. Ich möchte meine Fähigkeiten erweitern."
      },
      letsTalkButton: {
        EN: "Let's Talk",
        DE: "Lassen Sie uns reden"
      },
      hoverBubble: {
        EN: "I am interested in these frameworks, for example:",
        DE: "Ich habe zum Beispiel Interesse an diesen Frameworks:"
      },
      featuredProjectsHeading: {
        EN: "Featured Projects",
        DE: "Projekt-Auswahl"
      },
      featuredProjectsText: {
        EN: "Practical examples of my work - Interactive insights into my projects.",
        DE: "Praxisbeispiele meiner Arbeit - Interaktive Einblicke in meine Projekte."
      },
      legalNotice: {
        EN: "Legal Notice",
        DE: "Impressum"
      },
      privacyPolicy: {
        EN: "Privacy Policy",
        DE: "Datenschutz"
      },
      greifswald: {
        EN: "Greifswald Germany",
        DE: "Greifswald"
      },
      contact: {
        EN: "Contact",
        DE: "Kontakt"
      },
      phone: {
        EN: "Phone",
        DE: "Telefon"
      },
      whatIsThisProjectAbout: {
        EN: "What is this project about?",
        DE: "Worum geht es bei diesem Projekt?"
      },
      nextProject: {
        EN: "Next Project",
        DE: "Nächstes Projekt"
      },
      whatMyColleaguesSay: {
        EN: "What my colleagues say about me",
        DE: "Was meine Kollegen über mich sagen"
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
