// when given two arrays of integers return true or false if both arrays have items in common

// uses nested for loops to check each item in both arrays
// quadratic time
let inCommon = (arr, arr2) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr[i] === arr2[j]) return true;
    }
  }
  return false;
};

// uses a hashMap for speed to check if both arrays have at least one item in common
// linear time
let inCommon2 = (arr, arr2) => {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = true;
  }
  for (let j = 0; j < arr2.length; j++) {
    if (hash[arr2[j]]) return true;
  }
  return false;
};

console.log(inCommon2([1, 3, 5], [2, 4, 5]));
