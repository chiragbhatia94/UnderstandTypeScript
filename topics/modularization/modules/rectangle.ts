export function calcRectanglePerimeter(
  length: number,
  breadth: number
): number {
  return 2 * (length + breadth);
}

// default means that in the import statement we can give any name and we will find this is function there
export default function calcRectangleArea(
  length: number,
  breadth: number
): number {
  return length * breadth;
}
