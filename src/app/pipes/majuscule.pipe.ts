import { Pipe } from "@angular/core";

@Pipe({
    name: 'majuscule'
})
export class MajusculePipe {
    public transform(valeur: string) {
        let resultat = '';
        if (valeur && valeur.length > 0) {
            resultat = valeur[0].toUpperCase() + valeur.substr(1).toLowerCase();
        }
        return resultat;
    }
}