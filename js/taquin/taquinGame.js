
class Game {
    constructor() {
        this.isOver = false; // fin de partie
        this.nomCasesGagnantes = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];//ordre des cases gagnantes
        this.cases = [new Case("A"), new Case("B"), new Case("C"), new Case("D"), new Case("E"), new Case("F"), new Case("G"), new Case("H"), new Case("I")];//ordre des cases en cours
        this.positionCaseNoire;
        this._generateRandomCases();
        this._actualiserGame();
        this._createListeners();
    }

    _generateRandomCases() {
        return this.cases.sort(function () { return 0.5 - Math.random() })
    }

    _actualiserGame() {
        var element = document.getElementById('clavier');
        element.innerHTML = "";
        for (var i = 0; i < 9; i++) {
            element.innerHTML += '<input type="image" id="' + i + '" class="case"  src="../img/taquin/' + this.cases[i].nom + '.jpg" alt="taquin" ></input>';
        }
        for (var i = 0; i < 9; i++) {
            $("#" + i).attr("disabled", "");
        }
        for (var i = 0; i < 9; i++) {
            if (this.cases[i].isCaseNoire) {
                this.positionCaseNoire = i;
            }
        }
        switch (this.positionCaseNoire) {
            case 0: {
                $("#1").removeAttr("disabled");
                $("#3").removeAttr("disabled");
            } break;
            case 1: {
                $("#0").removeAttr("disabled");
                $("#2").removeAttr("disabled");
                $("#4").removeAttr("disabled");
            } break;
            case 2: {
                $("#1").removeAttr("disabled");
                $("#5").removeAttr("disabled");
            } break;
            case 3: {
                $("#0").removeAttr("disabled");
                $("#4").removeAttr("disabled");
                $("#6").removeAttr("disabled");
            } break;
            case 4: {
                $("#1").removeAttr("disabled");
                $("#3").removeAttr("disabled");
                $("#5").removeAttr("disabled");
                $("#7").removeAttr("disabled");
            } break;
            case 5: {
                $("#2").removeAttr("disabled");
                $("#4").removeAttr("disabled");
                $("#8").removeAttr("disabled");
            } break;
            case 6: {
                $("#3").removeAttr("disabled");
                $("#7").removeAttr("disabled");
            } break;
            case 7: {
                $("#4").removeAttr("disabled");
                $("#6").removeAttr("disabled");
                $("#8").removeAttr("disabled");
            } break;
            case 8: {
                $("#5").removeAttr("disabled");
                $("#7").removeAttr("disabled");
            } break;
        }
        this._verifGagnant();
        this._createListeners();
    }

    _verifGagnant() {
        var verif = 0;
        for (var i = 0; i < this.cases.length; i++) {
            if (this.cases[i].nom === this.nomCasesGagnantes[i]) {
                verif++;
            }
        }
        if (verif === 9) {
            this.isOver = true;
            setTimeout(function () {
                alert("victoire");
            }, 500);
            for (var i = 0; i < 9; i++) {
                $("#" + i).attr("disabled", "");
            }
        }
    }

    _clickHandler(idElement) {
        var temp = this.cases[idElement];
        this.cases[idElement] = this.cases[this.positionCaseNoire]
        this.cases[this.positionCaseNoire] = temp;
        this._actualiserGame(this.cases);
    }

    _createListeners() {
        for (var i = 0; i < 9; i++) {
            var idElem = "#" + i;
            $(idElem).click(function (idElem) {
                this._clickHandler(idElem);
            }.bind(this, i))
        }
    }
}