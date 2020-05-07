import { Component, OnDestroy } from '@angular/core';
import { ObjetLien } from './shared/structures';
import { LiensService } from './services/liens.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'nat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  public titre = 'Nat Poe';
  public titreMenu = 'Le joli menu';

  public liens: ObjetLien[] = [];

  private abonnement : Subscription;

  constructor(private liensService: LiensService) {
    this.abonnement = this.liensService.getLiens().subscribe(
      (nouveauxLiens) => {
        this.liens = nouveauxLiens;
      });
  }

  addLinkToMenu(nouveauLien) {
    console.log('Recu depuis le formulaire', nouveauLien);
    let newLink = {
      intitule: nouveauLien.titre,
      url: nouveauLien.adresse
    }
    this.liens.push(newLink);
  }

  ngOnDestroy() {
    this.abonnement.unsubscribe();
  }

}
