import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nat-form-lien',
  templateUrl: './form-lien.component.html',
  styleUrls: ['./form-lien.component.css']
})
export class FormLienComponent implements OnInit {

  @Output() ajouteLien = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  soumetLien(valeur) {
    this.ajouteLien.emit(valeur);
  }

}
