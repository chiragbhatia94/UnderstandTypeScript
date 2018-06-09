function editable(value: boolean) {
  return function(
    target: any,
    propName: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = value;
  };
}

class MethodDecoratorClass {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @editable(true)
  printName() {
    console.log('' + this.name);
  }
}

let mdcObj = new MethodDecoratorClass('MethodDecoratorClassObj');
mdcObj.printName();

mdcObj.printName = function() {
  console.log(
    'you have been hacked! Just kidding this is a very useful way to screw with programmers!'
  );
};

mdcObj.printName();
