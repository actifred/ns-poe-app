import { Component } from "@angular/core";

@Component({
    selector: 'nat-entete',
    styleUrls: [ './entete.component.css' ],
    templateUrl: './entete.component.html'
})
export class EnteteComponent {
    private annee = 2020;

    public afficheAnnee() {
        return Date();
    }
}
