import { NamedPerson } from './1-introduction';
class Persons implements NamedPerson {
  firstName: string;
  age?: number | undefined;

  constructor(firstName: string) {
    this.firstName = firstName;
  }

  greet(lastName: string): void {
    console.log('Hi, ', this.firstName, ' ', lastName);
  }
}

const newPerson = new Persons('Chirag');

newPerson.greet('Bhatia');
