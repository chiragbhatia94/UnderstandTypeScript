// implicit user object
let user = {
  name: 'Chirag',
  age: 23
};

// note since TS has inferred the type of the user object on its initialization we cannot assign a new type of value to this user object
// user = {};

// though we can do the following & note even the names of the variable inside the functions should be same
user = {
  name: 'Chirag Bhatia',
  age: 23
};

// explicit user object
// syntax: let/var <objName>: { <type definition> } = { <type values> }
let userObj: { name: string; age: number } = {
  name: 'Chirag',
  age: 23
};

// complex data object
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 101, 102],
  output: function(all: boolean) {
    return this.data;
  }
};

// type alias
type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [1, 2, 3],
  output: function(all: boolean) {
    return this.data;
  }
};

// union types
let confusedObject: number | string = 27;
confusedObject = '27';

// checking types
if (typeof confusedObject == 'string') {
  console.log('This is a string');
} else if (typeof confusedObject == 'number') {
  console.log('This is a number');
}

// never type
function noReturnFunction(): never {
  throw new Error('an error');
}

// nullable type
let canBeNull: number | null = 12;
console.log('canBeNull: ', canBeNull);
