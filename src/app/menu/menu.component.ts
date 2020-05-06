import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ObjetLien } from '../shared/structures';

@Component({
    selector: 'nat-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    @Input('titre') myTitle = "Mon menu";

    public compteur = 0;

    @Input() liens: ObjetLien[];

    constructor() {
    }

    @Output() avancementEvent = new EventEmitter();

    public avancer(detailEvenement) {
        console.log('Clic reçu', detailEvenement);
        this.compteur++;
        this.avancementEvent.emit(this.compteur);
    }
}