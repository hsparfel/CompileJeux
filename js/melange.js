
class Melange {
    constructor( listCarte, level) {
        this.difficulteLevel = level;
        this.carteMelange = [];
        this.coordonneesCartes = [60, 300, 540];
      //  this.coordCartesDepart = listCoord;
     //   this.coordCartesArrivee;
        this.listCartesDepart = listCarte;
        this.listCartesArrivee;
        //this.creerNbTours();
        this.creerCarteMelange();
        this.swap(this.carteMelange[0] - 1, this.carteMelange[1] - 1);
        this.echangerDeuxCartes(this.carteMelange);

    }

    creerCarteMelange() {
        //"use strict";
        let cart1 = Math.floor(Math.random() * 3 + 1);
        let cart2;
        //console.log(this.coordonneesCartes);
        do {
            cart2 = Math.floor(Math.random() * 3 + 1);
        } while (cart1 === cart2);
        this.carteMelange = [cart1, cart2];
        this.carteMelange.sort();
        console.log(this.carteMelange);
    }

    swap(x, y) {
     //   this.coordCartesArrivee = this.coordCartesDepart;
     //   let temp = this.coordCartesArrivee[x];
      //  this.coordCartesArrivee[x] = this.coordCartesDepart[y];
      //  this.coordCartesArrivee[y] = temp;
        // console.log(this.coordCartesDepart);
      //  console.log(this.coordCartesArrivee);
        this.listCartesArrivee = this.listCartesDepart;
        let  temp = this.listCartesArrivee[x];
        this.listCartesArrivee[x] = this.listCartesDepart[y];
        this.listCartesArrivee[y] = temp;
        // console.log(this.coordCartesDepart);
        console.log("listCartesDepart" + this.listCartesDepart);
        console.log("listCartesArrivee" + this.listCartesArrivee);
    }

    echangerDeuxCartes(tab) {
        let carte1 = this.listCartesDepart[tab[0] - 1];
        let carte2 = this.listCartesDepart[tab[1] - 1];
        console.log(carte1);
        console.log(carte2);
        let pos1XInitial = this.coordonneesCartes[tab[0] - 1];
        // let pos1YInitial = this.coordCartesDepart[tab[0] - 1][1];
        let pos2XInitial = this.coordonneesCartes[tab[1] - 1];
        //  let pos2YInitial = this.coordCartesDepart[tab[1] - 1][1];


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
        
/*
        let delta = 0.0;
        switch (this.difficulteLevel) {
            case 1: { delta = 0.01; } break;
            case 2: { delta = 0.02; } break;
            case 3: { delta = 0.04; } break;
        }


        for (let angle = 0; angle <= 180; angle + delta) {

            let pos1XTemp = posXCentre + rayon * Math.cos(Math.PI / 180 * angle);
            let pos1YTemp = posYCentre - rayon * Math.sin(Math.PI / 180 * angle);
            let pos2XTemp = posXCentre + rayon * Math.cos(Math.PI / 180 * (180 - angle));
            let pos2YTemp = posYCentre + rayon * Math.sin(Math.PI / 180 * (180 - angle));
            $(carte1).css('left', pos1XTemp);
            $(carte1).css('top', pos1YTemp);
            $(carte2).css('left', pos2XTemp);
            $(carte2).css('top', pos2YTemp);

        }*/







    }
}