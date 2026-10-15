interface Pet {
  name: string;
}

class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  bark() {
    console.log('汪汪！');
  }
}

const dog = new Dog('旺财');
// Pet (name 属性) 与 Dog (name 属性+ bark 方法) 兼容
const pet: Pet = dog; // 正确
console.log(pet.name); // 输出: 旺财
