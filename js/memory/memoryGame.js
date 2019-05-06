
class Game {
    constructor() {
        this.view = new GameView();
        this.nbEssais = 0; // Nombre d'essais actuel
        this.nbPairesTrouves = 0; // Nombre de paires de cartes trouvées actuelles
        this.paireTiree = []; // Contient la ou les cartes tirées actuellement
        this.cards = this._generateRandomCards(); // Contient l'identifiant de toutes les cartes dans un ordre désordonné
        this.pairesGagnante = [[1, 2], [3, 4], [5, 6]]; // Ce tableau de tableau contiendra les paires gagnantes
        this._createListeners();
    }

    _generateRandomCards() {
        // On trie les éléments au hasard
        return [1, 2, 3, 4, 5, 6].sort(function () { return 0.5 - Math.random() })
    }

    _clickHandler(idElement) {
        var elementClicked = $('#' + idElement)

        // On retourne la carte
        elementClicked.attr('src', '../img/memory/' + this.cards[idElement - 1] + '.jpg');

        this.paireTiree.push(idElement);
        this.nbEssais++;

        elementClicked.attr('disabled', '');

        // Si 2 cartes tirées, on vérifie si celles-ci sont les mêmes
        if (this.paireTiree.length == 2) {
            this._verifierCartesTirees();
            this.paireTiree = [];
        }

        this._verifierFinPartie();
    }

    _createListeners() {
        for (var i = 1; i <= 6; i++) {
            var idElem = "#" + i;

            $(idElem).on('click', function (idElem) {
                this._clickHandler(idElem);
            }.bind(this, i));
        }
    }

    _verifierCartesTirees() {
        var valeurTiree1 = this.cards[this.paireTiree[0] - 1];
        var valeurTiree2 = this.cards[this.paireTiree[1] - 1];

        var isGagnant = false;

        this.pairesGagnante.forEach(function (tableauGagnant) {
            if (tableauGagnant.indexOf(valeurTiree1) >= 0 && tableauGagnant.indexOf(valeurTiree2) >= 0) {
                isGagnant = true;
                return; // sortir du forEach
            }
        });

        if (isGagnant) {
            this.nbPairesTrouves++;
        } else {
            // Si pas bon, on attend 1s et on retourne les cartes
            var manque1 = $("#" + this.paireTiree[0]);
            var manque2 = $("#" + this.paireTiree[1]);

            setTimeout(function () {
                manque1.attr('src', '../img/memory/verso.jpg');
                manque2.attr('src', '../img/memory/verso.jpg');
                manque1.removeAttr("disabled");
                manque2.removeAttr("disabled");
            }, 1000);
        }
    }

    _verifierFinPartie() {
        if (this.nbPairesTrouves === this.pairesGagnante.length) {
            setTimeout(function () {
                switch (this.nbEssais) {
                    case 6: alert("la chatte !!"); break;
                    case 8: alert("t'es un Boss !"); break;
                    case 10: alert("c'est pas mal"); break;
                    case 12: alert("tu peux mieux faire"); break;
                    case 14: alert("tu peux mieux faire"); break;
                    default: alert("t'es serieux là ?!"); break
                }
            }.bind(this), 500);
        }
    }
}