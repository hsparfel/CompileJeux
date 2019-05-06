

class Partie {
    constructor() {
        this.myFlotte = new Flotte();
        this.cpuFlotte = new Flotte();
        this.listPositionsCpu = [];
        this.listPositionsJoueur = [];
        this.listPositionJoueurTouche = [];
        this.listPositionsCpuTouche = [];
        this.listPositionsCpuVisee = [];
        this.indexNavireEnCours = 0;
        this.nbCoups = 0;
        this.difficultLevel = 0;
        this.grille = new Grille();
        this._createListenersJoueur();
        this._createListenersCpu();
        this._positionnerNaviresCpu();
        this._afficherMessage();
    }


    // Listeners

    _createListenersJoueur() {
        for (let i = 0; i < 100; i++) {
            let idElem = "#casePlateauJoueur" + i;
            // 
            $(idElem).one('click', function (idElem) {
                this._clickHandlerJoueur(idElem);
            }.bind(this, i));
        }
    }

    _createListenersCpu() {
        for (let i = 0; i < 100; i++) {
            let idElem = "#casePlateauCpu" + i;
            $(idElem).one('click', function (idElem) {
                this._clickHandlerCpu(idElem);
            }.bind(this, i));
        }
    }

    //ClickHandlers

    _clickHandlerJoueur(idElement) {

        let taille = this.myFlotte.ListNavires[this.indexNavireEnCours].taille;// à remplacer plus tard par boucle sur les differents navires

        let navirePositionsJoueur = [];
        let navirePositionsJoueurVoisins = [];
        //clic du 1er element

        let elementClicked = $('#casePlateauJoueur' + idElement)
        elementClicked.css("background-color", "orange");

        navirePositionsJoueur.push(idElement);
        this.listPositionsJoueur.push(idElement);
        this.myFlotte.ListNavires[this.indexNavireEnCours].listPositions.push(idElement)

        //verifier si plusieurs cases cochees de ne mettre voisins qu'aux 2 extremites
        function compare(x, y) {
            return x - y;
        }

        this.listPositionsJoueur.sort(compare);
        if (this.listPositionsJoueur.length > 1) {

            //identifier si horizontal ou vertical
            let testDirection = this.listPositionsJoueur[this.listPositionsJoueur.length - 1] - this.listPositionsJoueur[0];
            if (testDirection < 10) {
                navirePositionsJoueurVoisins = [this.listPositionsJoueur[0] - 1, this.listPositionsJoueur[this.listPositionsJoueur.length - 1] + 1];
            } else {
                navirePositionsJoueurVoisins = [this.listPositionsJoueur[0] - 10, this.listPositionsJoueur[this.listPositionsJoueur.length - 1] + 10];
            }
        } else {
            navirePositionsJoueurVoisins = [idElement - 10, idElement - 1, idElement + 1, idElement + 10];
        }

        for (let i = navirePositionsJoueurVoisins.length - 1; i >= 0; i--) {
            if (navirePositionsJoueurVoisins[i] < 0 || navirePositionsJoueurVoisins[i] >= 100) { navirePositionsJoueurVoisins.splice(i, 1); }

        }

        //verifier que pas de retour à la ligne
        for (let i = navirePositionsJoueurVoisins.length - 1; i >= 0; i--) {
            let var1 = (navirePositionsJoueurVoisins[i] - navirePositionsJoueurVoisins[i] % 10) / 10;
            let var2 = (idElement - idElement % 10) / 10;
            let var3 = navirePositionsJoueurVoisins[i] % 10;
            let var4 = idElement % 10;

            if (var1 !== var2 && var3 !== var4) {
                navirePositionsJoueurVoisins.splice(i, 1);
            }
        }

        let element;
        for (let j = 0; j < 100; j++) {
            element = $('#casePlateauJoueur' + j);
            if (!navirePositionsJoueurVoisins.includes(j)) {
                element.css('pointer-events', 'none');
                element.css("opacity", '0.25');
            } else {
                element.css('pointer-events', '');
                element.css("opacity", '1');
            }
        }

        if (this.listPositionsJoueur.length === taille) {
            for (let j = 0; j < 100; j++) {
                element = $('#casePlateauJoueur' + j);
                if (this.listPositionsJoueur.includes(j)) {
                    element.css('pointer-events', 'none');
                } else {
                    element.css('pointer-events', '');
                }
                element.css("opacity", '1');
                this.listPositionsJoueur = [];
            }

        }

        let varia1 = this.myFlotte.ListNavires[this.indexNavireEnCours].listPositions.length;
        let varia2 = this.myFlotte.ListNavires[this.indexNavireEnCours].taille;

        if (varia1 === varia2) {

            this.indexNavireEnCours++;
            let mess = document.querySelector("#message2");
            if (this.indexNavireEnCours < 5) {
                mess.textContent = this.myFlotte.ListNavires[this.indexNavireEnCours].nom + " (" + this.myFlotte.ListNavires[this.indexNavireEnCours].taille + " cases)";
            }
        }

        if (this.indexNavireEnCours > 4) {
            let element2;
            for (let j = 0; j < 100; j++) {
                element = $('#casePlateauJoueur' + j);
                element.css('pointer-events', 'none');
                element2 = $('#casePlateauCpu' + j);
                element2.css('pointer-events', '');
            }
            let messa = document.querySelector("#message");
            messa.textContent = "Fight !!";

            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < this.myFlotte.ListNavires[i].taille; j++) {
                    this.listPositionsJoueur.push(this.myFlotte.ListNavires[i].listPositions[j]);
                    this.listPositionsJoueur.sort(compare);
                }
            }


        }
    }
    _clickHandlerCpu(idElement) {

        let elementClicked = $('#casePlateauCpu' + idElement)
        if (this.listPositionsCpu.includes(idElement)) {
            elementClicked.css("background-color", "red"); this.listPositionsCpuTouche.push(idElement);
        } else { elementClicked.css("background-color", "blue"); }
        //elementClicked.unbind('click');
        this.nbCoups++;
        this._attaqueCpu();
        if (this.listPositionsCpuTouche.length === this.listPositionsCpu.length) {
            setTimeout(function () { 
                let messageFin = document.querySelector("body");
                messageFin.textContent = "Victoire !!";
                
                //alert("victoire"); 
            }, 1000);
        }
    }

    //positionner navires Cpu

    _positionnerNaviresCpu() {

        let j;
        function compare(x, y) {
            return x - y;
        }

        for (j = 0; j < this.cpuFlotte.ListNavires.length; j++) {

            let verif1 = false;
            let verif2 = false;
            let verif3 = false;
            let verif4 = false;
            do {
                //raz variables
                verif1 = false;
                verif2 = false;
                verif3 = false;
                verif4 = false;
                let verifCompteur = 0;
                this.cpuFlotte.ListNavires[j].positions = [];

                //tirage aleatoire de la case de depart puis direction
                let indexCasePlateauCpu = Math.floor(Math.random() * 100);
                let directionId = Math.floor(Math.random() * 4);
                let i;
                switch (directionId) {
                    case 0: {
                        for (i = 0; i < this.cpuFlotte.ListNavires[j].taille; i++) {
                            this.cpuFlotte.ListNavires[j].positions.push(indexCasePlateauCpu - i * 10);
                        }
                    } break;
                    case 1: {
                        for (i = 0; i < this.cpuFlotte.ListNavires[j].taille; i++) {
                            this.cpuFlotte.ListNavires[j].positions.push(indexCasePlateauCpu + i * 10);
                        }
                    } break;
                    case 2: {
                        for (i = 0; i < this.cpuFlotte.ListNavires[j].taille; i++) {
                            this.cpuFlotte.ListNavires[j].positions.push(indexCasePlateauCpu - i);
                        }
                    } break;
                    case 3: {
                        for (i = 0; i < this.cpuFlotte.ListNavires[j].taille; i++) {
                            this.cpuFlotte.ListNavires[j].positions.push(indexCasePlateauCpu + i);
                        }
                    } break;
                }
                this.cpuFlotte.ListNavires[j].positions.sort(compare);

                //verif des positions selon plusieurs criteres

                if (this.cpuFlotte.ListNavires[j].positions[0] >= 0) {
                    verif1 = true;
                }//pas de valeur <0

                if (this.cpuFlotte.ListNavires[j].positions[this.cpuFlotte.ListNavires[j].positions.length - 1] < 100) {
                    verif2 = true;
                }//pas de valeur  >99

                for (let i = 0; i < this.cpuFlotte.ListNavires[j].positions.length; i++) {
                    for (let k = 0; k < this.listPositionsCpu.length; k++) {
                        if (this.cpuFlotte.ListNavires[j].positions[i] === this.listPositionsCpu[k]) {
                            verifCompteur++;
                        }
                    }
                }
                if (verifCompteur === 0) { verif3 = true; }//pas de valeur deja selecionnee

                let positionDebut = this.cpuFlotte.ListNavires[j].positions[0];
                let positionFin = this.cpuFlotte.ListNavires[j].positions[this.cpuFlotte.ListNavires[j].positions.length - 1];
                let var1 = (positionFin - positionFin % 10) / 10;
                let var2 = (positionDebut - positionDebut % 10) / 10;
                if (var1 === var2 || positionFin % 10 === positionDebut % 10) {
                    verif4 = true;
                }//pas de retour ligne

                //inscripton des valeurs validées
                if (verif1 && verif2 && verif3 && verif4) {
                    for (let m = 0; m < this.cpuFlotte.ListNavires[j].positions.length; m++) {
                        this.listPositionsCpu.push(this.cpuFlotte.ListNavires[j].positions[m]);
                    }
                }
            } while (!verif1 || !verif2 || !verif3 || !verif4);
        }
        this.listPositionsCpu.sort();
    }

    _afficherMessage() {
        let mess = document.createElement("div");
        mess.id = "message2";
        mess.textContent = this.myFlotte.ListNavires[this.indexNavireEnCours].nom + " (" + this.myFlotte.ListNavires[this.indexNavireEnCours].taille + " cases)";
        document.getElementById("message").appendChild(mess);
    }

    _attaqueCpu() {
        let verifi = false;
        let caseVisee;
        do {
            //IA Easy
            if (this.difficultLevel === 0) {
                caseVisee = Math.floor(Math.random() * 100);
                //console.log(caseVisee);
           }
            //IA Medium - ne marche pas du tout
            if (this.difficultLevel === 1) {
                if (this.listPositionJoueurTouche.length === 0) {
                    caseVisee = Math.floor(Math.random() * 100);
                } else {
                    let random = Math.floor(Math.random() * this.listPositionJoueurTouche.length);
                    let random2 = Math.floor(Math.random() * 4);
                    switch (random2) {
                        case 0: { this.listPositionJoueurTouche[random] - 1 } break;
                        case 1: { this.listPositionJoueurTouche[random] + 1 } break;
                        case 2: { this.listPositionJoueurTouche[random] - 2 } break;
                        case 3: { this.listPositionJoueurTouche[random] + 2 } break;
                    }
                }
                //console.log(caseVisee);
            }

            //fin IA
            if (!this.listPositionsCpuVisee.includes(caseVisee)) {
                verifi = true;
            }
        } while (!verifi)
        let elt = $('#casePlateauJoueur' + caseVisee);
        if (this.listPositionsJoueur.includes(caseVisee)) {
            this.listPositionJoueurTouche++;
            elt.css("background-color", "red");
            if (this.listPositionJoueurTouche === 17) {
                setTimeout(function () {
                    let messageFin = document.querySelector("body");
                messageFin.textContent = "Defaite !!";
                    //alert("Defaite");
                }, 1000)
            }
        } else {
            elt.css("background-color", "blue");
        }
        this.listPositionsCpuVisee.push(caseVisee);
    }
}