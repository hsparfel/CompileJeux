class Partie {
    constructor() {
        this.joueur1 = new Joueur(1);
        this.joueur2 = new Joueur(2);
        this.plateau = new Plateau();
        
        
        this.isFini = false;
        this.listeJoueur = [this.joueur1, this.joueur2];
        //pour l'instant inutile
        this._createListenersLancerDes();
        this.debutPartie = this._jouer(this.joueur1);
    }

    _createListenersLancerDes() {
        //var idElem = "#lancerDes";
        $('#lancerDes').click(function () {
            console.log("tiraaaaage");
            $('#totalDes').css("display","none");
            $('#lancerDes').css("pointer-events","none");
            let tirage = new Tirage();
        });
    }

    _jouer(player) {
        player.isActif = true;
        this._avancerJoueur(player);
    }

    _avancerJoueur(player) {

        //boucle jusqu'à un vainqueur
        while (this.isFini === false) {
            console.log(player.nom + " joue");
            console.log(player.nom + " depart:" + player.positionDepart);

            var indiceJoueur = -1;
            player.tirage = new Tirage();
            console.log("tirage: " + player.tirage.total);
            player.positionArrivee = player.positionDepart + player.tirage.total;

            //on verifie que si le joueur depase 63=>retour en arriere
            if (player.positionArrivee > 63) {
                player.positionArrivee = 63 - (player.tirage.total - 63 + player.positionDepart);
            }

            //on verifie la case d'arrivée
            console.log(player.nom + " arrivee (sans bonus/malus):" + player.positionArrivee);
            //boucle pour etre sur que l'on enchaine pas plusieurs bonus/malus (ex faire 9 au 1er coup)
            while (this.plateau.listeCase[player.positionArrivee].etat > 0) {
                switch (this.plateau.listeCase[player.positionArrivee].etat) {
                    case 1: { player.positionArrivee = player.positionArrivee + player.tirage.total; console.log("oie !! tu doubles"); } break;
                    case 2: { player.positionArrivee = 0; console.log("la loose retour depart"); } break;
                    case 3: { player.positionArrivee = player.positionArrivee + 7; console.log("pont +7"); } break;
                    case 4: { player.positionArrivee = player.positionArrivee - 6; console.log("pont casse -6"); } break;
                    default: console.log("pas de bonus");
                }
            }
            player.positionDepart = player.positionArrivee;
            player.positionArrivee = 0;
            console.log(player.nom + " arrivee:" + player.positionDepart);

            //on verifie si le joueur est arrivee en case 63=>fin de la partie sinon on desactive le joueur et on active l'autre et on recommence
            if (player.positionDepart === 63) {
                console.log(player.nom + " a gagné");
                this.isFini = true;
            }
            else {
                var i = 0;
                for (i = 0; i < 2; i++) {
                    if (this.listeJoueur[i].isActif === false) {
                        var indicejoueurSuivant = i;
                        this.listeJoueur[i].isActif = true;
                    } else {
                        this.listeJoueur[i].isActif = false
                    }
                }
                player = this.listeJoueur[indicejoueurSuivant];
            }
        }
    }
}
