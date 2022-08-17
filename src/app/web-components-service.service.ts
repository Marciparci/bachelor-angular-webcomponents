import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebComponentsServiceService {

  constructor() { }

  // Test Funktion des Service
  consoleTest() {
    console.log("React Service in Arbeit");
  }

  // Funktion zum Befüllen der Formularfelder mit den Werten des jeweils anderen
  static getInputValues(framework: string) {
    console.log("SERVICE TRIGGERED!");

    // Unterscheidung welches Formular die Funktion ausgelöst hat
    if (framework === "angular") {

      // Zuweisen der Werte in die Felder von Angular Formular nach React Formular
      let angularText = (<HTMLInputElement>document.getElementById("Atext")).value;
      (<HTMLInputElement>document.getElementById("text")).value = angularText;

      let angularNumber = (<HTMLInputElement>document.getElementById("Anumber")).value;
      (<HTMLInputElement>document.getElementById("number")).value = angularNumber;

      let angularDate = (<HTMLInputElement>document.getElementById("Adate")).value;
      (<HTMLInputElement>document.getElementById("date")).value = angularDate;

    } else {
      
      // Zuweisen der Werte in die Felder von React Formular nach Angular Formular
      let reactText = (document.getElementById("text") as HTMLInputElement).value;
      (document.getElementById("Atext") as HTMLInputElement).value = reactText;

      let reactNumber = (document.getElementById("number") as HTMLInputElement).value;
      (document.getElementById("Anumber") as HTMLInputElement).value = reactNumber;

      let reactDate = (document.getElementById("date") as HTMLInputElement).value;
      (document.getElementById("Adate") as HTMLInputElement).value = reactDate;
    }

  }
}