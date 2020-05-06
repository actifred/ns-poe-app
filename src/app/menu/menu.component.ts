import { Component, Input, Output, EventEmitter } from "@angular/core";

interface ObjetLien {
    url: string,
    intitule: string
}

@Component({
    selector: 'nat-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    @Input('titre') myTitle = "Mon menu";

    public compteur = 0;

    public liens: ObjetLien[];

    constructor() {
        this.liens = [
            { url: 'https://bing.com', intitule: 'Bing' },
            { url: 'https://qwant.com', intitule: 'Qwant' }
        ];
    }

    @Output() avancementEvent = new EventEmitter();

    public avancer(detailEvenement) {
        console.log('Clic reçu', detailEvenement);
        this.compteur++;
        this.avancementEvent.emit(this.compteur);
    }
}