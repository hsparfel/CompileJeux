class Partie {
    constructor() {
        this.difficultLevel = 0;
        this.nbTours = 0;
        this.listCartes = ["#carte1", "#carte2", "#carte3"];
        this.masquerToutHtml();
        this.afficherTitreHtml();
        this.choixBoutonsDifficulte();
    }

    masquerToutHtml() {
        $('#titre').css('display', 'none');
        $('#plateau').css('display', 'none');
        $('#choisir').css('display', 'none');
        $('#resultat').css('display', 'none');
        $('#rejouer').css('display', 'none');
    }

    afficherTitreHtml() {
        $('#titre').css('display', '');
        $('#messageDebut').css('display', 'none');
    }

    choixBoutonsDifficulte() {
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
        $('#messageDebut').css('display', '');
        this.masquerToutHtml()
        this.afficherPlateau();
    }

    afficherPlateau() {
        $('#plateau').css('display', '');
        this.choixPret();
    }

    choixPret() {
        switch (this.difficultLevel) {
            case 1: { this.nbTours = Math.floor(Math.random() * 3 + 2); } break;
            case 2: { this.nbTours = Math.floor(Math.random() * 3 + 6); } break;
            case 3: { this.nbTours = Math.floor(Math.random() * 3 + 9); } break;
        }
        $("#isReady").one('click', function () {
            $("#isReady").css('display', 'none');
            setTimeout(function () {
                $("#carte1").css("background-image", "url('../img/bonneteau/carte4.png')");
                $("#carte1").css("background-size", "cover");
                $("#carte3").css("background-image", "url('../img/bonneteau/carte4.png')");
                $("#carte3").css("background-size", "cover");
            }.bind(this), 800);
            setTimeout(function () {
                $("#carte2").css("background-image", "url('../img/bonneteau/carte4.png')");
                $("#carte2").css("background-size", "cover");
            }.bind(this), 1500);
            let mixeCarte = setInterval(() => {
                let melange = new Melange(this.listCartes, this.difficultLevel)
                let maj = setTimeout(() => {
                    this.listCartes = melange.listCartesArrivee;
                }, 1200);
                this.nbTours--;
                if (this.nbTours === 0) { clearInterval(mixeCarte); this.tirageJoueur(); }
            }, 1500);

        }.bind(this));
    }

    tirageJoueur() {
        $('#resultatGagne').css('display', 'none');
        $('#resultatPerdu').css('display', 'none');
        $('#resultat').css('display', '');
        setTimeout(function () {
            $('#choisir').css('display', '');
        }.bind(this), 1500);
        $("#carte1").one('click', function () {
            $("#carte1").css("background-image", "url('../img/bonneteau/carte1.png')");
            $("#carte1").css("background-size", "cover");
            $('#resultatPerdu').css('display', '');
            $('#choisir').css('display', 'none');
            let reponse = setTimeout(() => {
                $("#carte2").css("background-image", "url('../img/bonneteau/carte2.png')");
                $("#carte2").css("background-size", "cover");
                $('#rejouer').css('display', '');
            }, 1000);
        });
        $("#carte2").one('click', function () {
            $("#carte2").css("background-image", "url('../img/bonneteau/carte2.png')");
            $("#carte2").css("background-size", "cover");
            $('#resultatGagne').css('display', '');
            $('#rejouer').css('display', '');
            $('#choisir').css('display', 'none');
        });
        $("#carte3").one('click', function () {
            $("#carte3").css("background-image", "url('../img/bonneteau/carte3.png')");
            $("#carte3").css("background-size", "cover");
            $('#resultatPerdu').css('display', '');
            $('#choisir').css('display', 'none');
            let reponse = setTimeout(() => {
                $("#carte2").css("background-image", "url('../img/bonneteau/carte2.png')");
                $("#carte2").css("background-size", "cover");
                $('#rejouer').css('display', '');
            }, 1000);
        });
    }
}