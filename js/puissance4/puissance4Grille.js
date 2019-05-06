
class Grille {
    constructor() {
        this.listCases =[];
        this._dessinerGrille();
       
    }

    _dessinerGrille() {


        for (let i = 1; i < 8; i++) {
            let colonneGrille = document.createElement("div");
            colonneGrille.id = "colonne" + i;
            document.getElementById("grille").appendChild(colonneGrille);

            for (let j = 0; j < 7; j++) {









                let casePlateau = document.createElement("div");
                casePlateau.id = "casePlateau" + j + i;
                //casePlateau.textContent = "" + j + i;
this.listCases.push(""+j+i);



                if (j!=0){
                casePlateau.style.border = "solid";
                casePlateau.style.borderWidth = "1px";}
                casePlateau.style.height = "60px";
                document.getElementById(colonneGrille.id).appendChild(casePlateau);
                document.getElementById(colonneGrille.id).style.display = "column";
                document.getElementById(colonneGrille.id).style.width = "60px";
            }
        }
        document.getElementById("grille").style.display = "flex";

    }

   
}