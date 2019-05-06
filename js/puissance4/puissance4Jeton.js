class Jeton {
    constructor(nom) {
        this.creerJeton(nom);
    }

    creerJeton(nom) {

        let jeton = document.createElement("div");
        jeton.style.backgroundImage = "url(\"../img/puissance4/jeton_" + nom + ".png\")";
        jeton.style.backgroundSize = "cover";



    }


}
