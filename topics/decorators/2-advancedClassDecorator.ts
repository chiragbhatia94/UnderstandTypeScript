function printable(constructorFunction: Function) {
  constructorFunction.prototype.print = function() {
    console.log(this);
  };
}

@printable
class PrintableClass {
  constructor(firstName: string) {
    console.log('this is just for fun');
  }
}

let printableClassObj = new PrintableClass('Chirag');

(<any>printableClassObj).print();
