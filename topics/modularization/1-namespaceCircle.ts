namespace MyMath {
  const PI = 3.14;
  export function calcCircleCircumference(diameter: number): number {
    return PI * diameter;
  }

  export function calcCircleArea(radius: number): number {
    return PI * radius * radius;
  }
}

console.log('circle circumference: ' + MyMath.calcCircleCircumference(33));
