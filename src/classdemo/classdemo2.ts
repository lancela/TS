class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

let greeter: Greeter; // Greeter类的实例 的类型是 Greeter
greeter = new Greeter('world');
console.log(greeter.greet());
