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
      { url: 'https://bing.com', intitule: 'Bing' },
      { url: 'https://amazon.com', intitule: 'Amazon' },
      { url: 'https://qwant.com', intitule: 'Qwant' }
    ];
  }
}
