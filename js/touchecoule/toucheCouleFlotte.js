class Flotte {
    constructor() {
        this.ListNavires = [];
        this._creerFlotte();
    }

    _creerFlotte() {
        let i = 0;
        for (i = 0; i < 5; i++) {
            let navire = new Navire();
            switch (i) {
                case 0: { navire.nom = "PorteAvion"; navire.taille = 5; navire.pv = 5; } break;
                case 1: { navire.nom = "Croiseur"; navire.taille = 4; navire.pv = 4; } break;
                case 2: { navire.nom = "Fregate"; navire.taille = 3; navire.pv = 3; } break;
                case 3: { navire.nom = "SousMarin"; navire.taille = 3; navire.pv = 3; } break;
                case 4: { navire.nom = "Torpilleur"; navire.taille = 2; navire.pv = 2; } break;
            }
            this.ListNavires.push(navire);
        }
    }
}