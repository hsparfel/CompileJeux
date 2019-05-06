class CasePlateau {
    constructor(position) {
        this.positionPlateau = position;
        this.valeur = -1;
        this.etat = 0;
        this.bordure = "";
        this.taille = 70;
        this.coordonnees = [];
        this.coordCentre = [];
        this.disposition = [0, 1, 2, 3, 4, 5, 6, 7, 27, 28, 29, 30, 31, 32, 33, 8, 26, 47, 48, 49, 50, 51, 34, 9, 25, 46, 59, 60, 61, 52, 35, 10, 24, 45, 58, 63, 62, 53, 36, 11, 23, 44, 57, 56, 55, 54, 37, 12, 22, 43, 42, 41, 40, 39, 38, 13, 21, 20, 19, 18, 17, 16, 15, 14];
        this.bordures = ["b_r", "b_r", "b_r", "b_r", "b_r", "b_r", "b_r", "_b", "_rb", "b_r", "b_r", "b_r", "b_r", "b_r", "_b", "l_b", "r_b", "_rb", "b_r", "b_r", "b_r", "_b", "l_b", "l_b", "r_b", "r_b", "_rb", "b_r", "_b", "l_b", "l_b", "l_b", "r_b", "r_b", "r_b", 63, "_l", "l_b", "l_b", "l_b", "r_b", "r_b", 57, "t_l", "t_l", "_l", "l_b", "l_b", "r_b", 43, "t_l", "t_l", "t_l", "t_l", "_l", "l_b", 21, "t_l", "t_l", "t_l", "t_l", "t_l", "t_l", "_l"];
        //indiquer les cases speciales
        this._modifierEtat();
        //pour disposition des cases en spirale
        this._modifierValeur(position);
        //pour tracer bordures de chaque case
        this._modifierBordure(position);
        //pour calculer coordonnées de chq case [top,left]
        this._modifierCoordonnees(position);
    }

    _modifierCoordonnees(element) {
        this.coordonnees = [Math.floor(element / 8) * this.taille, element % 8 * this.taille];
        this.coordCentre = [this.coordonnees[0] + 35, this.coordonnees[1] + 35]
    }

    _modifierBordure(element) {
        this.bordure = this.bordures[element];
    }
    _modifierValeur(element) {
        this.valeur = this.disposition[element];
    }

    _modifierEtat() {
        var tab0 = [0];//depart
        var tab1 = [9, 18, 27, 36, 45];//case oie on double le chemin
        var tab2 = [59];//case tete de mort retour au depart
        var tab3 = [14, 31, 50];//case pont on avance de 7 en +
        var tab4 = [29, 43, 58];//case pont casse on recule de 6

        if (tab0.includes(this.positionPlateau)) {
            this.etat = -1;
        } else {
            if (tab1.includes(this.positionPlateau)) {
                this.etat = 1;
            } else {
                if (tab2.includes(this.positionPlateau)) {
                    this.etat = 2;
                } else {
                    if (tab3.includes(this.positionPlateau)) {
                        this.etat = 3;
                    } else {
                        if (tab4.includes(this.positionPlateau)) {
                            this.etat = 4;
                        }
                    }
                }
            }
        }
    }
}
