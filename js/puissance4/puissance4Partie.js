

class Partie {
    constructor() {
        this.listCombinaisonsGagnantes = [];
        this.caseNonRempliesBasse = ["61", "62", "63", "64", "65", "66", "67"];
        this.casesJoueesJoueur1 = [];
        this.casesJoueesJoueur2 = [];
        this.isOver = false;
        this.vainqueur = "";
        this.ligneGagnante = [];
        this.isJoueurUnActif = true;
        this.couleurActive = "";
        this.grille = new Grille();
        this.genererCombinaisonsGagnantes();
        this._createListeners();
    }

    genererCombinaisonsGagnantes() {
        this._genererCombinaisonsHorizontales();
        this._genererCombinaisonsVerticales();
        this._genererCombinaisonsDiagonalesBas();
        this._genererCombinaisonsDiagonalesHaut();
        console.log(this.listCombinaisonsGagnantes);
        console.log(this.caseNonRempliesBasse);
    }
    _genererCombinaisonsHorizontales() {
        let temp = [];
        for (let i = 1; i < 7; i++) {
            for (let j = 1; j < 5; j++) {
                temp.push("" + i + j);
                temp.push("" + i + (j + 1));
                temp.push("" + i + (j + 2));
                temp.push("" + i + (j + 3));
                this.listCombinaisonsGagnantes.push(temp);
                temp = [];
            }
        }
    }
    _genererCombinaisonsVerticales() {
        let temp = [];
        for (let i = 1; i < 8; i++) {
            for (let j = 1; j < 4; j++) {
                temp.push("" + j + i);
                temp.push("" + (j + 1) + i);
                temp.push("" + (j + 2) + i);
                temp.push("" + (j + 3) + i);
                this.listCombinaisonsGagnantes.push(temp);
                temp = [];
            }
        }
    }
    _genererCombinaisonsDiagonalesBas() {
        let temp = [];
        for (let i = 1; i < 4; i++) {
            for (let j = 1; j < 5; j++) {
                temp.push("" + i + j);
                temp.push("" + (i + 1) + (j + 1));
                temp.push("" + (i + 2) + (j + 2));
                temp.push("" + (i + 3) + (j + 3));
                this.listCombinaisonsGagnantes.push(temp);
                temp = [];
            }
        }
    }

    _genererCombinaisonsDiagonalesHaut() {
        let temp = [];
        for (let i = 4; i < 7; i++) {
            for (let j = 1; j < 5; j++) {
                temp.push("" + i + j);
                temp.push("" + (i - 1) + (j + 1));
                temp.push("" + (i - 2) + (j + 2));
                temp.push("" + (i - 3) + (j + 3));
                temp.sort();
                this.listCombinaisonsGagnantes.push(temp);
                temp = [];
            }
        }
    }

    //ajouter le click sur une colonne qui fait descendre jeton jusqu'à la case non remplie basse

    _createListeners() {
        for (let i = 1; i < 8; i++) {
            let idElem = "#colonne" + i;
            // 
            $(idElem).on('click', function (idElem) {

                //bloquer toutes les colonnes:
                for (let j = 1; j < 8; j++) {
                    let element = $('#colonne' + j);
                    element.css('pointer-events', 'none');
                }




                console.log("ici");
                console.log(idElem);
                this._clickHandler(idElem);


            }.bind(this, i));
        }
    }

    _clickHandler(idElement) {
        console.log("ici2");
        console.log(idElement);
        let caseDepart = "0" + idElement;
        let caseFinale = this.caseNonRempliesBasse[idElement - 1];
        if (this.isJoueurUnActif) {
            this.couleurActive = "rouge";
        } else { this.couleurActive = "jaune"; }
        console.log("debut:" + parseInt(caseDepart) + " - " + typeof (parseInt(caseDepart)));
        console.log("fin:" + parseInt(caseFinale));
        let i = parseInt(caseDepart);
        console.log("ici3");
        let descenteJeton = setInterval(() => {
            console.log("ici4");
            if (i < 10) {
                $('#casePlateau0' + i).css("background-image", 'url(\"../img/puissance4/jeton_' + this.couleurActive + '.png\")');
                $('#casePlateau0' + i).css("background-size", "cover");
            } else {
                $('#casePlateau' + i).css("background-image", 'url(\"../img/puissance4/jeton_' + this.couleurActive + '.png\")');
                $('#casePlateau' + i).css("background-size", "cover");
                $('#casePlateau0' + (i - 10)).css("background-image", '');
                $('#casePlateau' + (i - 10)).css("background-image", '');
            }
            if (i === parseInt(caseFinale)) {
                clearInterval(descenteJeton);
                this.caseNonRempliesBasse[idElement - 1] = "" + (parseInt(this.caseNonRempliesBasse[idElement - 1]) - 10);
                console.log(this.caseNonRempliesBasse);
                if (this.isJoueurUnActif) {
                    this.casesJoueesJoueur1.push("" + i);
                    this.casesJoueesJoueur1.sort();
                    console.log(this.casesJoueesJoueur1);
                    this.isJoueurUnActif = false;
                    this.verifierVainqueur(1);




                } else {
                    this.casesJoueesJoueur2.push("" + i);
                    this.casesJoueesJoueur2.sort();
                    console.log(this.casesJoueesJoueur2);
                    this.isJoueurUnActif = true;
                    this.verifierVainqueur(2);


                }
            }
            i += 10;
        }, 90);



        
            setTimeout(() => {

                //verifie si vainqueur

                if (!this.isOver) {
                //debloquer toutes les colonnes:
                for (let j = 1; j < 8; j++) {
                    let element = $('#colonne' + j);
                    element.css('pointer-events', '');
                }
            }
            }, 1100);
        
    }

    verifierVainqueur(joueur) {
        let compteur = 0;
        for (let k = 0; k < this.listCombinaisonsGagnantes.length; k++) {
            if (joueur === 1) {
                for (let j = 0; j < 4; j++) {
                    if (this.casesJoueesJoueur1.includes(this.listCombinaisonsGagnantes[k][j])) {
                        compteur++;
                        // console.log(this.listTripletteGagnante[i][j]);
                        // console.log("compteur1="+compteur1);
                        if (compteur === 4) {
                            console.log("victoire de j1");
                            this.isOver = true;
                            this.vainqueur = "Joueur1";
                            // document.getElementById("j1").style.opacity = "";
                            // document.getElementById("j2").style.opacity = "0.2";
                            this.ligneGagnante = this.listCombinaisonsGagnantes[k];
                        }
                    }
                }
                compteur = 0;


            } else {
                for (let j = 0; j < 4; j++) {
                    if (this.casesJoueesJoueur2.includes(this.listCombinaisonsGagnantes[k][j])) {
                        compteur++;
                        // console.log(this.listTripletteGagnante[i][j]);
                        // console.log("compteur1="+compteur1);
                        if (compteur === 4) {
                            console.log("victoire de j2");
                            this.isOver = true;
                            this.vainqueur = "Joueur2";
                            // document.getElementById("j1").style.opacity = "";
                            // document.getElementById("j2").style.opacity = "0.2";
                            this.ligneGagnante = this.listCombinaisonsGagnantes[k];
                        }
                    }
                }
                compteur = 0;
            }

        }
        console.log(this.ligneGagnante);
        if (this.isOver) {
            console.log(this.grille.listCases);
            // document.getElementById("message").textContent = "victoire: " + this.vainqueur;
            for (let i = 0; i < this.grille.listCases.length; i++) {
                let element = $('#casePlateau' + this.grille.listCases[i]);

                element.css('pointer-events', 'none');
                element.css('opacity', '0.2');
            }


            for (let i = 0; i < this.ligneGagnante.length; i++) {
                let element = $('#casePlateau' + this.ligneGagnante[i]);

                element.css('opacity', '1');


            }
            // a remplacer par une foncton qui desactive le click listener
            for (let i = 1; i < 8; i++) {
                let element = $('#colonne' + i);

                element.css('pointer-events', 'none');
                //  element.css('opacity', '0.2');
            }
        }


    }


    //empecher le click sur une colonne full remplie

    //boucle juqu'à un vainqueur

    //nb joueur1 rouge, joueur 2 jaune









    /*
    masquerToutHtml() {
        $('#titre').css('display', 'none');
        $('#plateau').css('display', 'none');
        $('#resultat').css('display', 'none');
    }

    afficherTitreHtml() {
        $('#titre').css('display', '');
        $('#messageDebut').css('display', 'none');
    }

    choixBoutonsDifficulte() {
        console.log("depart original:" + this.coordonneesCartes);
        $("#facile").one('click', function () {
            $("#facile").css("background-color", "green");
            $("#facile").css('point+er-events', 'none');
            $("#moyen").css("opacity", "0.5");
            $("#moyen").css('pointer-events', 'none');
            $("#difficile").css("opacity", "0.5");
            $("#difficile").css('pointer-events', 'none');
            this.difficultLevel = 1;
            this.afficherMessageDebut();
        }.bind(this));
        $("#moyen").one('click', function () {
            $("#moyen").css("background-color", "green");
            $("#moyen").css('pointer-events', 'none');
            $("#facile").css("opacity", "0.5");
            $("#facile").css('pointer-events', 'none');
            $("#difficile").css("opacity", "0.5");
            $("#difficile").css('pointer-events', 'none');
            this.difficultLevel = 2;
            this.afficherMessageDebut();
        }.bind(this));
        $("#difficile").one('click', function () {
            $("#difficile").css("background-color", "green");
            $("#difficile").css('pointer-events', 'none');
            $("#moyen").css("opacity", "0.5");
            $("#moyen").css('pointer-events', 'none');
            $("#facile").css("opacity", "0.5");
            $("#facile").css('pointer-events', 'none');
            this.difficultLevel = 3;
            this.afficherMessageDebut();
        }.bind(this));
    }

    afficherMessageDebut() {
        //   "use strict";
        $('#messageDebut').css('display', '');
        //   setTimeout(function () {
        this.masquerToutHtml()
        this.afficherPlateau();
        //  }.bind(this), 1000);
    }

    afficherPlateau() {
        //   "use strict";
        //   console.log("creation plateau");
        $('#plateau').css('display', '');
        this.choixPret();
    }

    choixPret() {
        switch (this.difficultLevel) {
            case 1: { this.nbTours = Math.floor(Math.random() * 3 + 2); } break;
            case 2: { this.nbTours = Math.floor(Math.random() * 3 + 6); } break;
            case 3: { this.nbTours = Math.floor(Math.random() * 3 + 9); } break;
        }
        console.log(this.nbTours);
        $("#isReady").one('click', function () {
            $("#isReady").css('display', 'none');
            setTimeout(function () {
                $("#carte1").css("background-image", "url('img/carte4.png')");
                $("#carte1").css("background-size", "cover");
                $("#carte3").css("background-image", "url('img/carte4.png')");
                $("#carte3").css("background-size", "cover");
            }.bind(this), 800);
            setTimeout(function () {
                $("#carte2").css("background-image", "url('img/carte4.png')");
                $("#carte2").css("background-size", "cover");
            }.bind(this), 1500);
            let mixeCarte = setInterval(() => {
                let melange = new Melange(this.listCartes, this.difficultLevel)
                let maj = setTimeout(() => {
                    // this.coordonneesCartes = melange.coordCartesArrivee;
                    this.listCartes = melange.listCartesArrivee;
                }, 1200);
                this.nbTours--;
                if (this.nbTours === 0) { clearInterval(mixeCarte); this.tirageJoueur(); }
            }, 1500);

        }.bind(this));
    }

    tirageJoueur() {
        /*   gerer le click du joueur sur une Carte
        creer litener d'abord 
        puis retournage carte 
        puis gagne perdu 
        puis si perdu retourne la bonne carte
       
      
      $('#resultatGagne').css('display', 'none');
      $('#resultatPerdu').css('display', 'none');
       $('#resultat').css('display', '');



        $("#carte1").one('click', function () {
            $("#carte1").css("background-image", "url('img/carte1.png')");
            $("#carte1").css("background-size", "cover");
            $('#resultatPerdu').css('display', '');
            let reponse = setTimeout(() => {
                $("#carte2").css("background-image", "url('img/carte2.png')");
            $("#carte2").css("background-size", "cover");
            }, 1000);
        });

        $("#carte2").one('click', function () {
            $("#carte2").css("background-image", "url('img/carte2.png')");
            $("#carte2").css("background-size", "cover");
            $('#resultatGagne').css('display', '');
        });

        $("#carte3").one('click', function () {
            $("#carte3").css("background-image", "url('img/carte3.png')");
            $("#carte3").css("background-size", "cover");
            $('#resultatPerdu').css('display', '');
            let reponse = setTimeout(() => {
                $("#carte2").css("background-image", "url('img/carte2.png')");
            $("#carte2").css("background-size", "cover");
            }, 1000);
        });



    }




*/
}