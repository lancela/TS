//使用number类型来定义函数：
function identity(arg: number): number {
  return arg;
}
const result = identity(5);
console.log(result);

//使用any类型来定义函数：
function identity2(arg: any): any {
  return arg;
}

const result2 = identity2(5);
console.log(result2);
