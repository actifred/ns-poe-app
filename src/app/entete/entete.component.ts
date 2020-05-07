import { Component } from "@angular/core";
import { ObjetLien } from '../shared/structures';
import { LiensService } from '../services/liens.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'nat-entete',
    styleUrls: [ './entete.component.css' ],
    templateUrl: './entete.component.html'
})
export class EnteteComponent {
    private annee = 2020;

    public isVersion2Visible = true;

    public liens: ObjetLien[] = [];

    private abonnement : Subscription;

    constructor(private ls: LiensService) {
      this.abonnement = this.ls.getLiens().subscribe(
          liens => {
              this.liens = liens;
          }
      );
    }

    public afficheDate() {
        return Date.now();
    }

    public afficheAnnee() {
        return this.annee;
    }

    public augmenteAnnee(valeur) {
        console.log(valeur);
        this.annee += valeur;
    }

    public toggleVisibility() {
        this.isVersion2Visible = !this.isVersion2Visible;
    }

    ngOnDestroy() {
        this.abonnement.unsubscribe();
    }
}
