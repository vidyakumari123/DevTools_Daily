# Time Since Last Train

This project solves a simple JavaScript problem.

The goal is to find how many minutes have passed since the last train departed.

---

## What The Function Does

The function name is:

```js
timeSinceLastTrain(departureTimes, currentTime)
```

It receives:

- `departureTimes`: an array of train departure times
- `currentTime`: the current time

Times are given in `"HH:MM"` format.

---

## Expected Output

The function should:

- return the number of minutes since the last train
- return `-1` if no train has departed before the current time

---

## Example

```js
timeSinceLastTrain(["10:00", "12:30", "14:00"], "15:00")
```

Output:

```js
60
```

Explanation:

The last train before `15:00` was at `14:00`.

So the answer is:

```js
15:00 - 14:00 = 60 minutes
```

---

## How It Works

First, each time is converted into total minutes.

Example:

```js
"14:30" = 14 * 60 + 30 = 870 minutes
```

Then the function starts checking from the end of the `departureTimes` array.

This is useful because the latest train is usually near the end.

If a train time is less than the current time, that train has already departed.

Then we return:

```js
currentTimeInMinutes - trainTimeInMinutes
```

If no previous train is found, the function returns:

```js
-1
```

---

## Concepts Learned

- JavaScript functions
- Arrays
- Loops
- String splitting
- Time conversion
- Comparing values in minutes

---

## Final Outcome

The function successfully finds the time difference between the current time and the most recent train departure.
