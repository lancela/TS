interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || 'white',
    area: config.width ? config.width * config.width : 100,
  };
}

let mySquare = createSquare({ width: 100, color: 'red' });
console.log(mySquare);
