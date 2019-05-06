

class Partie {
    constructor(j1, j2) {
        this.joueur1 = "";
        this.joueur2 = "";
        this.isJoueur1Actif;
        this.listTripletteGagnante = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        this.casesJoueur1 = [];
        this.casesJoueur2 = [];
        this.isOver = false;
        this.vainqueur = "";
        this.ligneGagnante = [];
        // this.intro = new Introduction();
        //this.plateau = new Plateau(this.intro.joueur1,this.intro.joueur2);
        this._createListeners();
        this._tiragePremierJoueur(j1, j2);
    }

    _createListeners() {
        for (let i = 0; i < 9; i++) {
            let idElem = "#casePlateau" + i;
            // 
            $(idElem).one('click', function (idElem) {
                this._clickHandler(idElem);
            }.bind(this, i));
        }
    }



    //ClickHandlers

    _clickHandler(idElement) {
        let image;
        console.log(this.joueur2);
        if (this.isJoueur1Actif) {
            image = this.joueur1 + ".JPG";
        }
        else { image = this.joueur2 + ".JPG"; }
        console.log(image);
        let elementClicked = $('#casePlateau' + idElement)
        elementClicked.css('background', 'url(../img/tictactoe/' + image + ')');
        elementClicked.css('background-size', '100%');
        //elementClicked.css('pointer-events', 'none');

        if (this.isJoueur1Actif) {
            this.casesJoueur1.push(idElement);
            console.log(this.casesJoueur1);
        }
        else {
            this.casesJoueur2.push(idElement);
            console.log(this.casesJoueur2);
        }

        if (this.isJoueur1Actif) {

            document.getElementById("j1").style.opacity = "0.2";
            document.getElementById("j2").style.opacity = "";
            document.getElementById("message").textContent = "joueur suivant: " + this.joueur2;
        }
        else {

            document.getElementById("j2").style.opacity = "0.2";
            document.getElementById("j1").style.opacity = "";
            document.getElementById("message").textContent = "joueur suivant: " + this.joueur1;
        }
        this.isJoueur1Actif = !this.isJoueur1Actif;


        ///verifier si vainqueur. ----- A REVOIR
        console.log("vainqueur ?");

        let compteur1 = 0;
        let compteur2 = 0;

        for (let i = 0; i < 8; i++) {

            for (let j = 0; j < 3; j++) {
                if (this.casesJoueur1.includes(this.listTripletteGagnante[i][j])) {
                    compteur1++;
                    // console.log(this.listTripletteGagnante[i][j]);
                    // console.log("compteur1="+compteur1);
                    if (compteur1 === 3) {
                        console.log("victoire de j1");
                        this.isOver = true;
                        this.vainqueur = this.joueur1;
                        document.getElementById("j1").style.opacity = "";
                        document.getElementById("j2").style.opacity = "0.2";
                        this.ligneGagnante = this.listTripletteGagnante[i];
                    }
                }
            }
            compteur1 = 0


            for (let j = 0; j < 3; j++) {
                if (this.casesJoueur2.includes(this.listTripletteGagnante[i][j])) {
                    compteur2++;
                    //    console.log(this.listTripletteGagnante[i][j]);
                    //   console.log("compteur2="+compteur2);
                    if (compteur2 === 3) {
                        console.log("victoire de j2");
                        this.isOver = true;
                        this.vainqueur = this.joueur2;
                        document.getElementById("j1").style.opacity = "0.2";
                        document.getElementById("j2").style.opacity = "";
                        this.ligneGagnante = this.listTripletteGagnante[i];
                    }
                }
            }
            compteur2 = 0

            if (this.isOver) {
                document.getElementById("message").textContent = "victoire: " + this.vainqueur;
                for (let i = 0; i < 9; i++) {
                    let element = $('#casePlateau' + i);

                    element.css('pointer-events', 'none');
                }


                for (let i = 0; i < 9; i++) {
                    let element = $('#casePlateau' + i);
                    if (!this.ligneGagnante.includes(i)) {
                        element.css('opacity', '0.2');
                    }
        
                }
            }
        }
        //surligner la ligne gagnate

        console.log(this.ligneGagnante);



        
        //// fin vainqueur ?


    }








    _tiragePremierJoueur(j1, j2) {
        console.log("ici");
        let premier;
        this.joueur1 = j1;
        this.joueur2 = j2;
        let hasard = Math.ceil(Math.random() * 2);



        //console.log(this.joueurActif);
        if (hasard === 1) {
            premier = this.joueur1;
            this.isJoueur1Actif = true;
            document.getElementById("j2").style.opacity = "0.2";
        }
        else {
            premier = this.joueur2;
            this.isJoueur1Actif = false;
            document.getElementById("j1").style.opacity = "0.2";
        }

        document.getElementById("message").textContent = "Le tirage au sort a désigné " + premier + " pour commencer la partie"
        document.getElementById("message").style.display = "";

        //document.getElementById("message").style.opacity="0.5"


        console.log(this.joueur1);


    }
}