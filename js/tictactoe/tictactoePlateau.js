class Plateau {
    constructor(j1, j2) {
        this._creerPlateau(j1, j2);
    }

    _creerPlateau(j1, j2) {
        console.log(this.joueur1 + "-" + this.joueur2);
        let player1 = document.createElement("img");
        let player2 = document.createElement("img");

        player1.id = "player1";
        player2.id = "player2";
        player1.src = '../img/tictactoe/' + j1 + '.JPG';
        player2.src = '../img/tictactoe/' + j2 + '.JPG';





        document.getElementById("j1").appendChild(player1);

        document.getElementById("j2").appendChild(player2);
        new Grille();
        setTimeout(function () {

            new Partie(j1,j2);



        }, 1000);
    }
}
