//  Attempt 1: 17:34
const testList = [1, 2, 3];

function sumFor(listOfNum) {
  let sum = 0;
  for (let i = 0; i < listOfNum.length; i++) {
    sum += listOfNum[i];
  }
  return sum;
}
console.log(sumFor(testList));

function sumWhile(listOfNum) {
  let i = 0;
  let sum = 0;
  while (i < listOfNum.length) {
    sum += listOfNum[i];
    i++;
  }
  return sum;
}
console.log(sumWhile(testList));

function sumRecursion(listOfNum) {
  if (listOfNum.length === 0) return 0;
  return listOfNum[0] + sumRecursion(listOfNum.slice(1, listOfNum.length));
}
console.log(sumRecursion(testList));

function sumTheSimpleWay(listOfNum) {
  return _.reduce(listOfNum, function (memo, num) { return memo + num; }, 0);
}
console.log(sumTheSimpleWay(testList));
