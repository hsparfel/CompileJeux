class Case {
    constructor(name) {
        this.nom = name;
        this.isCaseNoire = false;
        this.image = "../img/taquin/" + name + ".jpg";
        this._verifCase(name);
    }

    _verifCase(name) {
        if (name === "I") { this.isCaseNoire = true; }
    }
}