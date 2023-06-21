function largestOfFour(arr) {
  let largest = [0, 0, 0, 0];
  for (let i = 0; i < arr.length; i += 1) {
    for (let i2 = 0; i2 < arr[i].length; i2 += 1) {
      if (arr[i][i2] > largest[i]) {
        largest[i] = arr[i][i2]
      }
    }
    return largest[i];
  }
}
  


console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));