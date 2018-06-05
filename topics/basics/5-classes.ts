// basics of classes
class Person {
  protected name: string;
  public age: number = 0;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  setAge(age: number) {
    this.age = age;
  }
}

let chirag = new Person('Chirag', 'chiragbhatia94');

console.log(chirag);

class Chirag extends Person {
  constructor(public username: string, public test: string) {
    super('Chirag', 'chiragbhatia94');
  }
}

let extendedChirag = new Chirag('cb94', 'wow');
console.log(extendedChirag);

// getters & setters
class Test {
  private _species: string = '';

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      console.log('Please give correct value');
    }
  }

  get species() {
    return this._species;
  }
}

let test = new Test();
test.species = 'Insaan';
console.log(test);
console.log(test.species);

// readonly properties, static properties & methods
class Helper {
  static readonly PI = 3.14;
}

console.log(3 * Helper.PI);

// abstract classes, properties & methods
abstract class Project {
  protected _projectName: string = '';
  protected abstract _projectType: string;
  abstract calcBudget(): number;

  get projectType(): string {
    return this._projectType;
  }

  set projectType(value: string) {
    this._projectType = value;
  }
}

class ITProject extends Project {
  protected _projectType: string = 'IT';
  calcBudget(): number {
    return 100;
  }
}

let newProject = new ITProject();
console.log('Budget: ', newProject.calcBudget());

// private constructor & singleton pattern
class Singleton {
  private static instance: Singleton;
  private constructor(public name: string) {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton('The only one');
    }
    return Singleton.instance;
  }
}

// note this wont work because the constructor is private
// let singleton = new Singleton();
let singleton: Singleton = Singleton.getInstance();
console.log(singleton);
