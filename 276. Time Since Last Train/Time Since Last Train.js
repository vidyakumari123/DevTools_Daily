// do not change function name
function timeSinceLastTrain(departureTimes, currentTime) {
  // write your code below
  const toMin = t => {
    let [h,m] = t.split(":")
    return h * 60 + +m
  }
  let current = toMin(currentTime)
  for(let i = departureTimes.length-1; i>=0; i--){
    let train = toMin(departureTimes[i])
    if(train<current)
    return current-train
  }
  return - 1
}