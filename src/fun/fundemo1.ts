function buildName(firstName: string, lastName: string) {
  return firstName + ' ' + lastName;
}

// let result1 = buildName('Bob'); // error, An argument for 'lastName' was not provided.
// let result2 = buildName('Bob', 'Adams', 'Sr.'); // error, too many parameters
let result3 = buildName('Bob', 'Adams'); // ah, just right
// console.log(result1);
// console.log(result2);
console.log(result3);

// 函数的完整类型
let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number,
): number {
  return x + y;
};
myAdd(1, 3);
