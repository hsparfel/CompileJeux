class PlateauSolo {
    constructor(j1, j2, diff) {
        this.difficulte=diff;
        this.joueur1=j1;
        this.joueur2=j2;
        this._creerPlateau(j1, j2,diff);
        
    }

    _creerPlateau(j1, j2,diff) {
        console.log(this.joueur1 + "-" + this.joueur2+"&&"+this.difficulte);
        let player1 = document.createElement("img");
        let player2 = document.createElement("img");

        player1.id = "player1";
        player2.id = "player2";
        player1.src = '../img/tictactoe/' + j1 + '.JPG';
        player2.src = '../img/tictactoe/' + j2 + '.JPG';





        document.getElementById("j1").appendChild(player1);

        document.getElementById("j2").appendChild(player2);
        
        setTimeout(function () {
            //console.log(this.difficulte);
                new PartieSolo(j1, j2, diff);
           


        }, 1000);
        new Grille();
    }
}
