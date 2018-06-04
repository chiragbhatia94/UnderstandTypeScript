// default parameters
let myFunction5 = (start: number = 10) => {
  while (start > 0) {
    start--;
  }

  console.log('Done', start);
};
myFunction5();

// rest & spread operators
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers)); // spread operator

function restFunction(...args: number[]) {
  return args;
}

console.log('restFunction', restFunction(...numbers));

// destructuring array
const hobbies = ['Coding', 'Innovating', 'Having fun'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// destructuring objects
let userData = {
  firstName: 'Chirag',
  age: 21
};

let { firstName, age } = userData;

console.log(firstName, age);

let greeting = `Welcome ${firstName}
Are you ${age} years old?`;
console.log(greeting);
