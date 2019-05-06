class Joueur {
    constructor(numJoueur) {
        this.positionDepart = 0;
        this.positionArrivee = 0;
        this.isActif = false;
        this.nom = "Joueur" + numJoueur;
        this.pion = new Pion(numJoueur);
    }
}