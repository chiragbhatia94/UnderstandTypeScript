export interface NamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any;
  greet(lastName: string): void;
}

function greet(person: NamedPerson) {
  console.log('Hi, ' + person.firstName);
}

const testing: NamedPerson = {
  firstName: 'Chirag',
  age: 23,
  greet(lastName: string) {
    console.log('Hello, ' + this.firstName);
  }
};

testing.greet('Bhatia');

greet(testing);
greet({
  firstName: 'Chirag Bhatia',
  greet() {}
});
