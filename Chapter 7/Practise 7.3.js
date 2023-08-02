// Practice exercise 7.3
// Create a class that contains properties for different animal species and the sound that
// each species makes, and create two (or more) animals:
// 1. Create a method that prints a given animal and its sound.
// 2. Add a prototype with another action for the animal.
// 3. Output an entire animal object into the console.

class Animal {
    constructor(species, sounds) {
        this.species = species;
        this.sounds = sounds;
    }
    animalSound() {
        console.log(this.species + " " + this.sounds);
    }
}
Animal.prototype.color = function () {
    return this.species + " are white";
}
let cow = new Animal("cows", "moo");
let duck = new Animal("ducks", "quack");
cow.animalSound();
console.log(duck.color());
console.log(duck);
