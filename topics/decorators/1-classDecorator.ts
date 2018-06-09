function logged(constructorFunction: Function) {
  console.log(constructorFunction);
}

@logged
class DecoratorExampleClass {
  constructor(public firstName: string) {
    console.log('From Constructor');
  }
}

// decorator factory
// this is used to get more info to a decorator as decorator in case of class only has one argument that is the constructor function itself
function logging(value: boolean): Function {
  return value
    ? logged
    : () => {
        return;
      };
}

@logging(true)
class DecoratorFactoryExampleClass {}

let decoratorExample: DecoratorExampleClass = new DecoratorExampleClass(
  'Chirag'
);
