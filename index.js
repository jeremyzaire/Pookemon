function Pokemon(type, master) {
    this.type = type;
    this.master = master;
}

function Pikachu(master) {
    Pokemon.call(this, "Pikachu", master);
}

Pikachu.prototype = Object.create(Pokemon.prototype);

Pikachu.prototype.talk = function() {
    console.log("Pika, pika !");
}

Pokemon.prototype.talk = function() {
    console.log(this.type.substr(0, 4));
};

Pokemon.prototype.walk = function() {
    console.log(`${this.type} walk beside of ${this.master}`);
};


const pikachu = new Pikachu("Pikachu", "Sacha");
pikachu.talk();
pikachu.walk();

const myPikachu = new Pikachu("Jérémy");
myPikachu.talk();
myPikachu.walk();

const bulbizarre = new Pokemon("Bulbizarre", "Jérémy");
bulbizarre.talk();
bulbizarre.walk();