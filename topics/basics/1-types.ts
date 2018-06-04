// Following are some basic types in TS:
// 1. string
// 2. number
// 3. boolean
// 4. any
// 5. array
// 6. tuples

// Also these types can be defined both implicitly (by TS Compiler) or even explicitly by the user

// string
let implicitString = 'string';
let explicitString: string = 'string';

// number
let implicitNumber = 27;
let explicitNumber: number = 27;

// boolean
let implicitBoolean = true;
let explicitBoolean: boolean = true;

// any type
let implicitAny;
implicitAny = 21;
implicitAny = '21';

let explicitAny: any = true;
explicitAny = 'true';

// array type
let implicitArray = ['1', '2'];
let explicitArray: string[] = ['1', '2'];

// to check the type of a variable
console.log('Type of hobbies array is ', typeof implicitArray);
// note in case of an implicit array the type of the array is object if we print the 'typeof' of the variable
// but the actual type of the array is set when the user sets the value of the array
// in the above case the type is string[] & hence note that implicitArray = [1, 2]; wont be allowed

// note there is a difference between any and any[]
let explicitAnyArray: any[] = [1, 2, 3];

// tuple type
let explicitTuple: [string, number] = ['string', 21];
// note since the order of the tuple elements matter we cannot write as below
// let explicitTuple: [string, number] = [21, 'string'];

// enum type
enum Colors {
  Grey,
  Green,
  Blue
}

let myColor: Colors = Colors.Green;

console.log('myColor', myColor);

// to set the value of the string explicitly we can give it like this
enum Colors2 {
  Grey,
  Green = 200,
  Blue // it will automatically be 201
}

let myColor2: Colors2 = Colors2.Green;

console.log('myColor2', myColor2);
console.log('myColors2', Colors2);
