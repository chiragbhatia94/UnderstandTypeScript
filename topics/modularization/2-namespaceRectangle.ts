namespace MyMath {
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
