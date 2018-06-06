/// <reference path='./1-namespaceCircle.ts' />
/// <reference path='./2-namespaceRectangle.ts' />

/// <reference path='./4-multiLevelNamespaces.ts' />

// Syntactic sugar for multi hierarchy namespaces
import Circle = Mathematics.Circle;
import Rectangle = Mathematics.Rectangle;

console.log(MyMath.calcCircleArea(3));
console.log(MyMath.calcCircleCircumference(5));

console.log(MyMath.calcRectangleArea(3, 5));
console.log(MyMath.calcRectanglePerimeter(3, 5));

console.log('---------------- Sugar ----------------');
console.log(Circle.calcCircleArea(3));
console.log(Rectangle.calcRectangleArea(3, 5));

// tsc --outFile app.js 1-namespaces.ts 2-multifileNamespaces.ts
// the above command combines all the files 1 & 2 in app.js

// or another way is to import namespace files into the main file
// & compile the code with the following command

// tsc app.ts --outFile app.js
// following is the example for the import statement & remember the order of import here matters
