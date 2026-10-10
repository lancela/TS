function identity<T>(arg: T): T {
  // console.log(arg.length); // Error: T doesn't have .length
  return arg;
}
let result = identity<string>('myString'); // type of output will be 'string'
let result2 = identity('myString'); // type of output will be 'string'
console.log(result);
console.log(result2);
