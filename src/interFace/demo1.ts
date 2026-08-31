function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

// let myObj: { label: string } = { size: 10, label: 'Size 10 Object' };
let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
// printLabel({ size: 10, label: 'Size 10 Object' });
