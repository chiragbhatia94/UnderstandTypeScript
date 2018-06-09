function echo(data: any) {
  return data;
}

console.log(echo('Chirag').length);
console.log(echo(3).length);

function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho('Chirag').length);
console.log(betterEcho<number>(3).toExponential(2));
