
class Grille {
    constructor() {
        this._dessinerGrilleCpu();
        this._dessinerGrilleJoueur();
    }

    _dessinerGrilleCpu() {
        let i = 0;
        for (i = 0; i < 100; i++) {
            let casePlateauCpu = document.createElement("div");
            casePlateauCpu.id = "casePlateauCpu" + i;
            //casePlateauCpu.textContent = i;
            casePlateauCpu.style.border = "solid";
            casePlateauCpu.style.borderWidth = "1px";
            document.getElementById("grilleCpu").appendChild(casePlateauCpu);
            document.getElementById("grilleCpu").style.display = "grid";
            document.getElementById("grilleCpu").style.gridTemplateColumns = "40px 40px 40px 40px 40px 40px 40px 40px 40px 40px";
            document.getElementById("grilleCpu").style.gridTemplateRows = "40px 40px 40px 40px 40px 40px 40px 40px 40px 40px";



            let element2 = $('#casePlateauCpu' + i);
            element2.css('pointer-events', 'none');

        }





    }

    _dessinerGrilleJoueur() {
        let i = 0;
        for (i = 0; i < 100; i++) {
            let casePlateauJoueur = document.createElement("div");
            casePlateauJoueur.id = "casePlateauJoueur" + i;
            //casePlateauJoueur.textContent = i;
            casePlateauJoueur.style.border = "solid";
            casePlateauJoueur.style.borderWidth = "1px";
            document.getElementById("grilleJoueur").appendChild(casePlateauJoueur);
            document.getElementById("grilleJoueur").style.display = "grid";
            document.getElementById("grilleJoueur").style.gridTemplateColumns = "40px 40px 40px 40px 40px 40px 40px 40px 40px 40px";
            document.getElementById("grilleJoueur").style.gridTemplateRows = "40px 40px 40px 40px 40px 40px 40px 40px 40px 40px";
        }
    }

}