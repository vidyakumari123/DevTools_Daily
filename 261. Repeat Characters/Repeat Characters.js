// do not change function name
function getRepeatedArray(collection=[]) {
  // write your solution below
    return collection.filter((_, i) => i % 2 === 0)
    .map((x, i) => x.repeat(2 * i + 1));
}