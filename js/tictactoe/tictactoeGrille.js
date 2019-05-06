
class Grille {
    constructor() {
        this._dessinerGrille();
        
    }

    _dessinerGrille() {
        let i = 0;
        for (i = 0; i < 9; i++) {
            let casePlateau = document.createElement("div");
            casePlateau.id = "casePlateau" + i;
            //casePlateauCpu.textContent = i;
            casePlateau.style.border = "solid";
            casePlateau.style.borderWidth = "1px";
            document.getElementById("grille").appendChild(casePlateau);
            document.getElementById("grille").style.display = "grid";
            document.getElementById("grille").style.gridTemplateColumns = "100px 100px 100px";
            document.getElementById("grille").style.gridTemplateRows = "100px 100px 100px ";

        }


    }

  

}