interface User {
  name: string;
  age: number;
}

const user: User = {
  name: '张三',
  age: 25,
};

// const user: User = {
//   name: "张三",
//   age: "25" // Type 'string' is not assignable to type 'number'.
// };

console.log(user);
