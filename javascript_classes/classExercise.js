class Animal {
  constructor(species, legs, name) {
    this.species = species;
    this.legs = legs;
    this.name = name;
  }

  identify() {
    console.log(`This animal is a ${this.species}, and has ${this.legs} legs.`);
  }
  fetch() {
    console.log(`I don’t want to fetch.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super("dog", 4, name); // a dog has 4 legs
  }
  bark() {
    console.log("Woof!");
  }
  fetch(item) {
    console.log(`${this.species} is fetching a ${item}`);
  }
  call(name) {
    name === this.name
      ? console.log(`Yes, this is ${name}`)
      : console.log(`No, this is not ${name}`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super("cat", 4, name);
  }
  meow() {
    console.log(`Meow!`);
  }
  scratch(item) {
    console.log(`${this.species} ${this.name} is scratching the ${item}`);
  }
  call(name) {
    console.log(`${name} is ignoring you`);
  }
}

const human = new Animal("human", 2, "Alice");
human.identify();

// human.bark();
human.fetch();
console.log(human.name);

const dog = new Dog("Bo");
dog.bark();
console.log(dog.legs);
dog.identify();

dog.fetch("ball");
console.log(dog.name);
dog.call("Bo");
dog.call("Marley");

const cat = new Cat("Minoes");
cat.meow();
cat.scratch("sofa");
cat.call("Turbo");
