type OneParam = (a: number) => void;
type TwoParams = (a: number, b: string) => void;

let fn1: OneParam = (a: number) => {
  console.log(a);
};
let fn2: TwoParams = (a: number, b: string) => {
  console.log(a, b);
};

// fn1 = fn2; // 报错 // Type 'TwoParams' is not assignable to type 'OneParam'. Target signature provides too few arguments. Expected 2 or more, but got 1.
fn2 = fn1; // 在 strictFunctionTypes 下可以
