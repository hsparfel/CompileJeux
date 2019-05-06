class Tirage {
    constructor() {
        this.de1;
        this.de2;
        this.total = 0;
        this._lancerDes();
    }

    _lancerDes() {
        //lancer les 2 des et enregistrer le total
        this.de1 = new Dice();
        this.de2 = new Dice();
        this.total = this.de1.valeur + this.de2.valeur;
        this._animerLancer();
    }

    _afficherTirage() {
        $('#de1').css("background-image", "url('../img/jeudeloie/de_" + this.de1.valeur + ".png')");
        $('#de2').css("background-image", "url('../img/jeudeloie/de_" + this.de2.valeur + ".png')");
        $('#totalDes').text("Total = " + this.total);
        $('#totalDes').css("display","");
    }

    _animerLancer() {
        let compteur = 0;
        let animDes = setInterval(() => {
            let aleat1 = "de_" + Math.ceil(Math.random() * 6);
            let aleat2 = "de_" + Math.ceil(Math.random() * 6);
            $('#de1').css("background-image", "url('../img/jeudeloie/" + aleat1 + ".png')");
            $('#de2').css("background-image", "url('../img/jeudeloie/" + aleat2 + ".png')");
            compteur++;
            if (compteur === 10) {
                clearInterval(animDes);
                this._afficherTirage();
                $('#lancerDes').css("pointer-events","");
                
            }
        }, 100);
    }
}