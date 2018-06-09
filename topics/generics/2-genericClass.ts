class GenericClass<T extends number | string> {
  constructor(public first: T, public second: T) {}

  calcTotal(): number {
    return +this.first + +this.second;
  }
}

let testObj = new GenericClass<number>(10, 12);
console.log(testObj.calcTotal());
