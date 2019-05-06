class Pion {
    constructor(nom) {
        this.nomJoueur = "Joueur" + nom;
        this.colorIndex = nom;
        this.positionCase;
        this.coordonnees;
        this._creerPion(this.nomJoueur, this.colorIndex);
    }
    _creerPion(name, couleur) {

        if (name === "Joueur1") {
            this.coordonnees = [10, 10];
            
        } else {
            this.coordonnees = [10, 35];
            
        }
        console.log(this.coordonnees)
        let pion = document.createElement("div");
        //console.log(nom);
        pion.id = this.nomJoueur.substr(0,1)+this.nomJoueur.substr(6,1);
        //console.log(pion.id);
        
$('#plateaujeu').append(pion);
        console.log('#' + pion.id);
       $('#' + pion.id).css("background-image", "url(\"../img/jeudeloie/pion" + couleur + ".png\")");
        console.log("ici");
        $('#' + pion.id).css("background-size", "cover");
       $('#' + pion.id).css("position", "absolute");
       $('#' + pion.id).css("top", "" + this.coordonnees[0] + "px");
        $('#' + pion.id).css("left", "" + this.coordonnees[1] + "px");
       $('#' + pion.id).css("width", "25");
        $('#' + pion.id).css("height", "50");
        $('#' + pion.id).css("z-index", "10");
        console.log("ici2");
       $('#' + pion.id).addClass("draggable");


       $(function(){
        console.log('#' + pion.id);
        $('#' + pion.id).draggable({
            containment : '#plateaujeu',
            snap : '.droppable',
            revert : 'invalid'
        }); // appel du plugin
    
    });
     //  $('#' + pion.id).draggable = "true";
        //  pion.style.backgroundImage = "url(\"../img/pion" + couleur + ".png\")";
        //  pion.style.backgroundSize = "cover";

       // document.getElementById('plateaujeu').appendChild(pion);




    }
}