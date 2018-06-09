interface Human {
  name: string;
  age?: number;
  greet(): void;
}

interface AgedHuman extends Human {
  age: number;
}

let normalHuman: Human = {
  name: 'Chirag',
  greet() {
    console.log('Hi, ' + this.name);
  }
};

normalHuman.greet();

let agedHuman: AgedHuman = {
  name: 'Chirag',
  age: 23,
  greet() {
    console.log('Hi, ' + this.name + ' you are ' + this.age + ' years old.');
  }
};

agedHuman.greet();
