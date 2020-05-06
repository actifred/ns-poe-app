import { Component } from "@angular/core";

@Component({
    selector: 'nat-entete',
    styleUrls: [ './entete.component.css' ],
    templateUrl: './entete.component.html'
})
export class EnteteComponent {
    private annee = 2020;

    public afficheDate() {
        return Date();
    }

    public afficheAnnee() {
        return this.annee;
    }

    public augmenteAnnee(valeur) {
        console.log(valeur);
        this.annee += valeur;
    }
}
