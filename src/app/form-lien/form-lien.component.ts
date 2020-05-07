import { Component, OnInit } from '@angular/core';
import { LiensService } from '../services/liens.service';
import { ObjetLien } from '../shared/structures';

@Component({
  selector: 'nat-form-lien',
  templateUrl: './form-lien.component.html',
  styleUrls: ['./form-lien.component.css']
})
export class FormLienComponent implements OnInit {

  constructor(private liensService: LiensService) { }

  ngOnInit(): void {
  }

  soumetLien(valeur) {
    let nouveauLien: ObjetLien = {
      url: valeur.adresse,
      intitule: valeur.titre
    }
    this.liensService.addLien(nouveauLien);
  }

}
