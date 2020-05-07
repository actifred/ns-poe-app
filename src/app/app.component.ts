import { Component } from '@angular/core';
import { ObjetLien } from './shared/structures';
import { LiensService } from './services/liens.service';

@Component({
  selector: 'nat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titre = 'Nat Poe';
  public titreMenu = 'Le joli menu';

  public liens: ObjetLien[];

  constructor(private liensService: LiensService) {
    this.liens = this.liensService.getLiens();
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
