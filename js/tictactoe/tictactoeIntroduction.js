class Introduction {
    constructor() {
        this.joueur1 = "";
        this.joueur2 = "";
        this.difficulte="";
        //this.joueurActif = 0;
        this._demarrer();
        // this._afficherBoutonsNbJoueurs();
        //this._afficherBoutonsChoixUnJoueur();
    }

    _demarrer() {
        document.getElementById("choix").style.display = "none";
        document.getElementById("debut").style.display = "none";
        document.getElementById("plateau").style.display = "none";
        document.getElementById("choixDifficulte").style.display = "none";
        document.getElementById("message").style.display = "none";
        this._afficherBoutonsNbJoueurs();
    }

    _afficherBoutonsNbJoueurs() {
        let bouton1 = document.createElement("button");
        bouton1.id = "bouton1";
        bouton1.textContent = "1 Joueur";
        bouton1.style.marginRight = "25px";
        bouton1.style.height = "40px";

        let bouton2 = document.createElement("button");
        bouton2.id = "bouton2";
        bouton2.textContent = "2 Joueur";
        bouton2.style.height = "40px";

        document.getElementById("choixNbJoueur").appendChild(bouton1);
        document.getElementById("choixNbJoueur").appendChild(bouton2);

        let _this = this;

        $("#bouton1").one('click', function () {
            document.getElementById("choix").style.display = "";
            //$("#bouton1").css("opacity","0.5");
            $("#bouton2").css("opacity", "0.5");
            $("#bouton1").css("background-color", "green");
            $("#bouton1").css('pointer-events', 'none');
            $("#bouton2").css('pointer-events', 'none');
            _this._afficherBoutonsChoixUnJoueur();
        });

        $("#bouton2").one('click', function () {
            _this.joueur1 = "tara";
            _this.joueur2 = "tim";
            console.log(_this.joueur1 + "-" + _this.joueur2);
            document.getElementById("debut").style.display = "";
            //alert("c'est parti");
            setTimeout(function () {
                _this._creerPlateau(_this.joueur1, _this.joueur2);
            }, 1000);
        });
    }

    _afficherBoutonsChoixUnJoueur() {
        let img1 = document.createElement("button");
        img1.id = "img1";
        img1.style.backgroundImage = "url('../img/tictactoe/tara.JPG')";
        img1.style.width = "100px";
        img1.style.height = "100px";
        img1.style.backgroundSize = "100%";
        img1.style.marginRight = "100px";

        let img2 = document.createElement("button");
        img2.id = "img2";
        img2.style.backgroundImage = "url('../img/tictactoe/tim.JPG')";
        img2.style.width = "100px";
        img2.style.height = "100px";
        img2.style.backgroundSize = "100%";

        document.getElementById("boutonsChoixUnJoueur").appendChild(img1);
        document.getElementById("boutonsChoixUnJoueur").appendChild(img2);

        let _this = this;

        $("#img1").one('click', function () {
            // console.log("lic");
            _this.joueur1 = "tara";
            _this.joueur2 = "cpu";
            $("#img1").css("border", "line");
            $("#img2").css("opacity", "0.5");
            console.log(_this.joueur1 + "-" + _this.joueur2);
            //alert("c'est parti");
            /*
             document.getElementById("debut").style.display = "";
             setTimeout(function () {
                 _this._creerPlateau(_this.joueur1, _this.joueur2);
             }, 1000);
 */
            _this._choisirDifficulte(_this.joueur1, _this.joueur2);
        });

        $("#img2").one('click', function () {
            _this.joueur1 = "tim";
            _this.joueur2 = "cpu";
            console.log(_this.joueur1 + "-" + _this.joueur2);
            $("#img2").css("border", "line");
            $("#img1").css("opacity", "0.5");
            // alert("c'est parti");
         /*   document.getElementById("debut").style.display = "";
            setTimeout(function () {
                _this._creerPlateau(_this.joueur1, _this.joueur2);
            }, 1000);
            */
            _this._choisirDifficulte(_this.joueur1, _this.joueur2);
        });
    }

    _choisirDifficulte(j1, j2) {
        document.getElementById("choixDifficulte").style.display = "";
        let bouton1 = document.createElement("button");
        bouton1.id = "diff1";
        bouton1.textContent = "Facile";
        bouton1.style.marginRight = "25px";
        bouton1.style.height = "40px";

        let bouton2 = document.createElement("button");
        bouton2.id = "diff2";
        bouton2.textContent = "Moyen";
        bouton2.style.marginRight = "25px";
        bouton2.style.height = "40px";

        let bouton3 = document.createElement("button");
        bouton3.id = "diff3";
        bouton3.textContent = "Difficile";
        bouton3.style.marginRight = "25px";
        bouton3.style.height = "40px";

        let bouton4 = document.createElement("button");
        bouton4.id = "diff4";
        bouton4.textContent = "Expert";
        bouton4.style.height = "40px";

        document.getElementById("choixDifficulte").appendChild(bouton1);
        document.getElementById("choixDifficulte").appendChild(bouton2);
        //mise en commentaire car non implemente pour le moment
/*
        document.getElementById("choixDifficulte").appendChild(bouton3);
        document.getElementById("choixDifficulte").appendChild(bouton4);
*/
        let _this = this;

        let player1 = j1;
        let player2 = j2;

        $("#diff1").one('click', function () {
            console.log("facile");
            $("#diff1").css("background-color", "green");
            $("#diff1").css('pointer-events', 'none');
            $("#diff2").css("opacity", "0.5");
            $("#diff2").css('pointer-events', 'none');
            $("#diff3").css("opacity", "0.5");
            $("#diff3").css('pointer-events', 'none');
            $("#diff4").css("opacity", "0.5");
            $("#diff4").css('pointer-events', 'none');

            document.getElementById("debut").style.display = "";
            setTimeout(function () {
                _this._creerPlateauSolo(player1, player2, "facile");
            }, 1000);
        });

        $("#diff2").one('click', function () {
            console.log("moyen");
            $("#diff2").css("background-color", "green");
            $("#diff2").css('pointer-events', 'none');
            $("#diff1").css("opacity", "0.5");
            $("#diff1").css('pointer-events', 'none');
            $("#diff3").css("opacity", "0.5");
            $("#diff3").css('pointer-events', 'none');
            $("#diff4").css("opacity", "0.5");
            $("#diff4").css('pointer-events', 'none');

            document.getElementById("debut").style.display = "";
            setTimeout(function () {
                _this._creerPlateauSolo(player1, player2, "moyen");
            }, 1000);
        });

        $("#diff3").one('click', function () {
            console.log("difficile");
            $("#diff3").css("background-color", "green");
            $("#diff3").css('pointer-events', 'none');
            $("#diff2").css("opacity", "0.5");
            $("#diff2").css('pointer-events', 'none');
            $("#diff1").css("opacity", "0.5");
            $("#diff1").css('pointer-events', 'none');
            $("#diff4").css("opacity", "0.5");
            $("#diff4").css('pointer-events', 'none');

            document.getElementById("debut").style.display = "";
            setTimeout(function () {
                _this._creerPlateauSolo(player1, player2, "difficile");
            }, 1000);
        });

        $("#diff4").one('click', function () {
            console.log("expert");
            $("#diff4").css("background-color", "green");
            $("#diff4").css('pointer-events', 'none');
            $("#diff2").css("opacity", "0.5");
            $("#diff2").css('pointer-events', 'none');
            $("#diff3").css("opacity", "0.5");
            $("#diff3").css('pointer-events', 'none');
            $("#diff1").css("opacity", "0.5");
            $("#diff1").css('pointer-events', 'none');

            document.getElementById("debut").style.display = "";
            setTimeout(function () {
                _this._creerPlateauSolo(player1, player2, "expert");
            }, 1000);
        });
    }



    _creerPlateau(j1, j2) {
        //let _this = this;
        document.getElementById("intro").style.display = "none";
        document.getElementById("plateau").style.display = "";

        this.joueur1 = j1;
        this.joueur2 = j2;
        console.log(this.joueur1 + "&" + this.joueur2);
        new Plateau(this.joueur1, this.joueur2);
    }

    _creerPlateauSolo(j1, j2, diff) {
        //let _this = this;
        document.getElementById("intro").style.display = "none";
        document.getElementById("plateau").style.display = "";

        this.joueur1 = j1;
        this.joueur2 = j2;
        this.difficulte=diff;
        console.log(this.difficulte);
        console.log(this.joueur1 + "&" + this.joueur2+"&"+diff);
        new PlateauSolo(this.joueur1, this.joueur2,this.difficulte);
    }




}