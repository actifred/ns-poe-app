import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ObjetLien } from '../shared/structures';

@Component({
    selector: 'nat-entete',
    styleUrls: [ './entete.component.css' ],
    templateUrl: './entete.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnteteComponent {
    private annee = 2020;

    public isVersion2Visible = true;

    public liens: ObjetLien[];

    constructor() {
      this.liens = [
        { url: 'https://apple.com', intitule: 'apple' },
        { url: 'https://google.com', intitule: 'google' }
      ];
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
}
