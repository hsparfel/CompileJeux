class Melange {
    constructor(listCarte, level) {
        this.difficulteLevel = level;
        this.carteMelange = [];
        this.coordonneesCartes = [260, 500, 740];
        this.listCartesDepart = listCarte;
        this.listCartesArrivee;
        this.creerCarteMelange();
        this.swap(this.carteMelange[0] - 1, this.carteMelange[1] - 1);
        this.echangerDeuxCartes(this.carteMelange);
    }

    creerCarteMelange() {
        let cart1 = Math.floor(Math.random() * 3 + 1);
        let cart2;
        do {
            cart2 = Math.floor(Math.random() * 3 + 1);
        } while (cart1 === cart2);
        this.carteMelange = [cart1, cart2];
        this.carteMelange.sort();
    }

    swap(x, y) {
        this.listCartesArrivee = this.listCartesDepart;
        let temp = this.listCartesArrivee[x];
        this.listCartesArrivee[x] = this.listCartesDepart[y];
        this.listCartesArrivee[y] = temp;
    }

    echangerDeuxCartes(tab) {
        let carte1 = this.listCartesDepart[tab[0] - 1];
        let carte2 = this.listCartesDepart[tab[1] - 1];

        let pos1XInitial = this.coordonneesCartes[tab[0] - 1];
        let pos2XInitial = this.coordonneesCartes[tab[1] - 1];
        let rayon = Math.abs(pos1XInitial - pos2XInitial) / 2;
        let posXCentre = Math.min(pos1XInitial, pos2XInitial) + rayon;
        let posYCentre = 100;
        let angle = 0;
        let deplacement = setInterval(() => {
            let pos1XTemp = posXCentre + rayon * Math.cos(Math.PI / 180 * angle);
            let pos1YTemp = posYCentre - rayon * Math.sin(Math.PI / 180 * angle);
            let pos2XTemp = posXCentre + rayon * Math.cos(Math.PI / 180 * (180 - angle));
            let pos2YTemp = posYCentre + rayon * Math.sin(Math.PI / 180 * (180 - angle));
            $(carte1).css('left', pos1XTemp);
            $(carte1).css('top', pos1YTemp);
            $(carte2).css('left', pos2XTemp);
            $(carte2).css('top', pos2YTemp);
            switch (this.difficulteLevel) {
                case 1: { angle = angle + 2; } break;
                case 2: { angle = angle + 4; } break;
                case 3: { angle = angle + 8; } break;
            }
            angle++;
            if (angle > 180) { clearInterval(deplacement); }
        }, 20);
    }
}