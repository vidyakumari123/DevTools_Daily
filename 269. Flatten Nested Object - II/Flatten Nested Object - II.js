// do not change function name
function flattenObject(collection) {
  // write your code below
  const result = {};

  const flat = (obj) => {
    for (const key in obj) {
      const val = obj[key];

      if (val && typeof val === "object" && !Array.isArray(val)) {
        flat(val);
      } else {
        result[key] = val;
      }
    }
  };

  flat(collection);
  return result;
}