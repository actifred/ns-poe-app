import { Component } from '@angular/core';
import { ObjetLien } from './shared/structures';

@Component({
  selector: 'nat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titre = 'Nat Poe';
  public titreMenu = 'Le joli menu';

  public liens: ObjetLien[];

  constructor() {
    this.liens = [
      { url: 'https://bing.com', intitule: 'bing' },
      { url: 'https://amazon.com', intitule: 'amazon' },
      { url: 'https://qwant.com', intitule: 'qwant' }
    ];
  }

  addLinkToMenu(nouveauLien) {
    console.log('Recu depuis le formulaire', nouveauLien);
    let newLink = {
      intitule: nouveauLien.titre,
      url: nouveauLien.adresse
    }
    this.liens.push(newLink);
  }
}
