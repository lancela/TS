interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 };
  //   好处之一是可以对可能存在的属性进行预定义，
  // 好处之二是可以捕获引用了不存在的属性时的错误
  if (config.color) {
    // Error: Property 'color' does not exist on type 'SquareConfig'
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: 'black' } as SquareConfig);
console.log(mySquare);
// 该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。
// 做为变量使用的话用 const，若做为属性则使用readonly。
