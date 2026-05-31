// do not change function name
function countSpecialNumbers(collection) {
  // write your solution below
  let count = 0;

  for (let num of collection) {
    let str = Math.abs(num).toString();

    if (num % 3 === 0 && str.split('7').length - 1 >= 2) {
      count++;
    }
  }

  return count;
}