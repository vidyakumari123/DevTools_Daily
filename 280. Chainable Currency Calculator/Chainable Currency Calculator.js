// do not change function name
function currencyAmount() {
  // write your code here
  let total = 0;

  return {
    addCrores(amount) {
      total += amount * 10000000;
      return this;
    },

    addLakhs(amount) {
      total += amount * 100000;
      return this;
    },

    addThousands(amount) {
      total += amount * 1000;
      return this;
    },

    getValue() {
      return total;
    }
  };
}