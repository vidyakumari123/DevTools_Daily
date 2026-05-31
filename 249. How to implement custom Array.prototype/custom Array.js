// DO NOT CHANGE FUNCTION NAME
function customSome(cb, thisArg) {
  // write your code here
   for (let i = 0; i < this.length; i++) {
    if (i in this && cb.call(thisArg, this[i], i, this)) return true;
  }
  return false;
}

Array.prototype.customSome = customSome;