class Dice {
    constructor() {
        this.valeur = 0;
        this._genererValeurAleatoire();
    }
    _genererValeurAleatoire() {
        this.valeur = Math.ceil(Math.random() * 6);
        console.log(this.valeur);
    }
}