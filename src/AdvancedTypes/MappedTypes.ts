interface User {
  name: string;
  age: number;
  email: string;
}
type UserUpdate = Partial<User>;
