// functions

// this is a simple function
function myFunction1() {
  return 'Function';
}

// function with return type specified
function myFunction2(): string {
  return 'Function2';
}

// the void function return type
function myFunction3(): void {
  console.log('this is awesome!');
  return;
}

// function argument types specified
function myFunction4(number1: number, number2: number): number {
  return number1 * number2;
}

// functions as types
let myFunction: (val1: number, val2: number) => number = myFunction4;
console.log('multiply', myFunction(4, 5));

// according to this we cannot assign a non matching signature function to this variable
// myFunction = myFunction3;
