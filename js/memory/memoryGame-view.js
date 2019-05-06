
class GameView {
    constructor() {
        this.initializeGame();
    }

    initializeGame() {
        var element = document.getElementById('clavier');
        for (var i = 1; i <= 6; i++) {
            element.innerHTML += '<input type="image" id="' + i + '" class="carte" src="../img/memory/verso.jpg" alt="hugo" ></input>';
        }
    }
}