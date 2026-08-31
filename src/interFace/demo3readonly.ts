interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!
console.log(p1);

let a: number[] = [1, 2, 3, 4];
// ReadonlyArray<T>类型 把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error! 不可以修改
// ro.push(5); // error! 不可以新增
// ro.length = 100; // error! 不可以修改长度
// a = ro; // error! a = ro; // error!

a = ro as number[]; // 可以用类型断言重写：
console.log(ro);
