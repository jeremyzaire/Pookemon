function Pokemon(type, master) {
    this.type = type;
    this.master = master;
}

Pokemon.prototype.talk = function() {
    console.log(this.type.substr(0, 4));
};

Pokemon.prototype.walk = function() {
    console.log(`${this.type} walk beside of ${this.master}`);
};


const pikachu = new Pokemon("Pikachu", "Sacha");
pikachu.talk();
pikachu.walk();

const myPikachu = new Pokemon("Pikachu", "Jérémy");
myPikachu.talk();
myPikachu.walk();

const bulbizarre = new Pokemon("Bulbizarre", "Jérémy");
bulbizarre.talk();
bulbizarre.walk();