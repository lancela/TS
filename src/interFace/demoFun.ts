interface SearchFunc {
  // 一个只有参数列表和返回值类型的函数声明，没有函数体
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  console.log(result);
  console.log(result > -1);
  return result > -1;
};
mySearch('Hello, world!', 'world');
