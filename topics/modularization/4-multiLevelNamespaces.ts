namespace Mathematics {
  export namespace Circle {
    const PI = 3.14;
    export function calcCircleCircumference(diameter: number): number {
      return PI * diameter;
    }

    export function calcCircleArea(radius: number): number {
      return PI * radius * radius;
    }
  }

  export namespace Rectangle {
    export function calcRectanglePerimeter(
      length: number,
      breadth: number
    ): number {
      return 2 * length * breadth;
    }

    export function calcRectangleArea(length: number, breadth: number): number {
      return length * breadth;
    }
  }
}
