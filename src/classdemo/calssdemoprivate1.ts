class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  getname(): string {
    return this.name;
  }
}

class Rhino extends Animal {
  constructor() {
    super('Rhino');
  }
}

class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  getname(): string {
    return this.name;
  }
}

let animal = new Animal('Goat');
let rhino = new Rhino();
let employee = new Employee('Bob');

animal = rhino;
// animal = employee; // 错误: Animal 与 Employee 不兼容.
console.log(animal);
console.log(employee); // 输出: Rhino
// 这个例子中有 Animal和 Rhino两个类， Rhino是 Animal类的子类。
// 还有一个 Employee类，其类型看上去与 Animal是相同的。
// 我们创建了几个这些类的实例，并相互赋值来看看会发生什么。
// 因为 Animal和 Rhino共享了来自 Animal里的私有成员定义 private name: string，因此它们是兼容的。
// 然而 Employee却不是这样。当把 Employee赋值给 Animal的时候，得到一个错误，说它们的类型不兼容。
// 尽管 Employee里也有一个私有成员 name，但它明显不是 Animal里面定义的那个。
