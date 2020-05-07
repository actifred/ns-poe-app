import { ObjetLien } from '../shared/structures';

export class LiensService {
    private liens: ObjetLien[];

    constructor() {
        this.liens = [
            { url: 'https://bing.com', intitule: 'bing' },
            { url: 'https://amazon.com', intitule: 'amazon' },
            { url: 'https://qwant.com', intitule: 'qwant' }
          ];
    }

    public getLiens() {
        return [...this.liens];
    }

    public addLien() {
        // ici on valide que l'url et l'intitulé sont non vides
        // Et on pushe uniquement sous cette condition
    }
}