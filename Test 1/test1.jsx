// Soal 1
function sortNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(sortNumber([1, 2, 4, 3, 5, 3, 2, 1]));
// [5, 4, 3, 3, 2, 2, 1, 1]

// Soal 2
function maxSubarray(arr, k) {
  let max = -Infinity;

  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;

    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }

    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

console.log(maxSubarray([100, 200, 300, 400], 2));
// 700

console.log(maxSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
// 39

console.log(maxSubarray([-3, 4, 0, -2, 6, -1], 2));
// 5

// Soal 3
function sumEven(obj) {
  let sum = 0;

  for (let key in obj) {
    let value = obj[key];

    if (typeof value === "number" && value % 2 === 0) {
      sum += value;
    } else if (typeof value === "object" && value !== null) {
      sum += sumEven(value);
    }
  }

  return sum;
}

const data = {
  a: 2,
  b: {
    b: 2,
    bb: {
      b: 3,
      bb: {
        b: 2,
      },
    },
  },
  c: {
    c: {
      c: 2,
    },
    cc: "ball",
    ccc: 5,
  },
  d: 1,
  e: {
    e: {
      e: 4,
    },
    ee: "car",
  },
};

console.log(sumEven(data));
// 12
