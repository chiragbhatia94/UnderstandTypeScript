interface DoubleValue {
  (num1: number, num2: number): number;
}

let myDoubleFunction: DoubleValue = (val1: number, val2: number): number => {
  return (val1 + val2) * 2;
};

console.log(myDoubleFunction(10, 20));
