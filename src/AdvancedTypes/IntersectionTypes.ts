// 交叉类型
interface Customer {
  name: string;
  phone: string;
}

interface Loggable {
  log(): void;
}

type CustomerWithLog = Customer & Loggable;

const customer: CustomerWithLog = {
  name: '张三',
  phone: '13800000000',
  log() {
    console.log('记录客户操作');
  },
};
customer.log(); // 记录客户操作
