import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation, Inject, ElementRef, AfterViewChecked, AfterContentInit, OnChanges, DoCheck } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from "@angular/common/http";
import { WebComponentsServiceService } from './web-components-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  title = 'bachelor-angular-WC';
  // Platzhalter Array erschaffen für leichtere Datenbindung
  inputs: any = [];


  constructor(
    private httpClient: HttpClient,
    @Inject(DOCUMENT) doc: Document
  ) { }

  // Funktion löst beim Ersten Initialisieren der Anwendung aus
  ngOnInit() {
    // HTTP Anfrage um Daten aus einer JSON Datei zu erhalten
    this.httpClient.get("assets/data.json").subscribe(data => {
      
      // umlagern in Array um leichter an Eigenschaften zu kommen
      this.inputs = data;

      // Zuweisen JSON Wert zu Input Wert Text
      const text = (<HTMLInputElement>document.getElementById("text"));
      text.value = this.inputs.text;

      // Zuweisen JSON Wert zu Input Wert Nummer
      const number = (<HTMLInputElement>document.getElementById("number"));
      number.value = this.inputs.number;

      // Zuweisen JSON Wert zu Input Wert Datum
      const date = (<HTMLInputElement>document.getElementById("date"));
      date.value = this.inputs.date;
    })
  }

  // Funktion löst aus, wenn der "Absenden" Button des React Formulars betätigt wird
  onSubmit() {
    // Aufruf des Services und der Funktion "getInputValues" 
    // mit Übergabeparameter des Namen des Frameworks
    let framework = "react";
    WebComponentsServiceService.getInputValues(framework);
  }
}
