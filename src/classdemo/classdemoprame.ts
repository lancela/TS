class Octopus {
  numberOfLegs: number = 8;
  //   (只读属性才适用)参数属性可以方便地让我们在一个地方定义并初始化一个成员。
  // 仅在构造函数里使用 readonly name: string参数来创建和初始化 name成员。 我们把声明和赋值合并至一处。
  constructor(public readonly name: string) {}
}
let dad = new Octopus('Man with the 8 strong legs');

console.log(dad.name);
