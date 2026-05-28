# Chainable Currency Calculator

This project implements a simple chainable currency calculator in JavaScript.

The goal was to complete the `currencyAmount` function so that values can be added in different Indian currency units and then returned as one final number.

---

## What Needed To Be Implemented

The function needed to support method chaining.

Example:

```js
currencyAmount()
  .addCrores(1)
  .addLakhs(2)
  .addThousands(3)
  .getValue()
```

Each method should update the total amount and return the same object so that the next method can be called immediately.

---

## Supported Methods

### `addCrores(amount)`

Adds the given amount in crores.

```js
1 crore = 10000000
```

### `addLakhs(amount)`

Adds the given amount in lakhs.

```js
1 lakh = 100000
```

### `addThousands(amount)`

Adds the given amount in thousands.

```js
1 thousand = 1000
```

### `getValue()`

Returns the final calculated total.

---

## Example

```js
const total = currencyAmount()
  .addCrores(1)
  .addLakhs(2)
  .addThousands(3)
  .getValue()

console.log(total)
```

Output:

```js
10203000
```

Explanation:

```js
1 crore     = 10000000
2 lakhs     =   200000
3 thousands =     3000

Total       = 10203000
```

---

## How It Works

A variable named `total` is created inside `currencyAmount`.

```js
let total = 0
```

Each add method updates this `total` value.

```js
total += amount * 10000000
```

After updating the value, each method returns `this`.

```js
return this
```

Returning `this` allows method chaining.

Finally, `getValue()` returns the calculated total.

---

## Concepts Learned

- JavaScript functions
- Objects
- Method chaining
- Returning `this`
- Closures
- Currency unit conversion

---

## Final Outcome

The `currencyAmount` function can now calculate amounts using crores, lakhs, and thousands with clean chainable syntax.
