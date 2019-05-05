

class Partie {
    constructor() {
        this.difficultLevel = 0;
        this.nbTours = 0;
        //  this.coordonneesCartes = [60, 300, 540];
        this.listCartes = ["#carte1", "#carte2", "#carte3"];

        this.masquerToutHtml();
        this.afficherTitreHtml();
        this.choixBoutonsDifficulte();
    }

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
            $("#facile").css('pointer-events', 'none');
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
       */
      
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





}