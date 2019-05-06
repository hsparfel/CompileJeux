class Plateau {
    constructor() {
        this.nbCase = 0;
        this.listeCase = [];
        this.creerPlateau = this._creerPlateau();
    }

    _creerPlateau() {
        let caseCreee;
        var i;
        var element = document.getElementById('plateaujeu');
        for (i = 0; i < 64; i++) {
            caseCreee = new CasePlateau(i);
            this.listeCase.push(caseCreee);
            element.innerHTML += '<div id="case' + i + '" class="casePlateau"  >' + caseCreee.valeur + '</div>';
            let elt = "#case" + i;
            $(elt).css("top", caseCreee.coordonnees[0]);
            $(elt).css("left", caseCreee.coordonnees[1]);
            $(elt).css("border", "5px");
            //$(elt).addClass("droppable");


          //  $(function(){

         //       $(elt).droppable(); // appel du plugin
            
         //   });


            switch (caseCreee.bordure) {
                case "_rb": {
                    $(elt).css("border-bottom", "1px dotted");
                    $(elt).css("border-right", "1px dotted");
                } break;
                case "r_b": {
                    $(elt).css("border-bottom", "1px dotted");
                    $(elt).css("border-right", "solid");
                } break;
                case "t_l": {
                    $(elt).css("border-top", "solid");
                    $(elt).css("border-left", "1px dotted");
                } break;
                case "l_b": {
                    $(elt).css("border-left", "solid");
                    $(elt).css("border-bottom", "1px dotted");
                } break;
                case "_b": {
                    $(elt).css("border-bottom", "1px dotted");
                } break;
                case "_l": {
                    $(elt).css("border-left", "1px dotted");
                } break;
                case "b_r": {
                    $(elt).css("border-bottom", "solid");
                    $(elt).css("border-right", "1px dotted");
                } break;
                default: {
                } break;
            }
        }
    }
}

