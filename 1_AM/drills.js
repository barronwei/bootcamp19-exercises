const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  return str.split(" ");
};

const reverse = str => {
  return str.split("").reverse().join("");
};

const uniqueOnes = arr => {
  let store = [];
  arr.forEach(function(one) {
    if (!store.includes(one)) {
      store.push(one);
    }
  });
  return store;
};

const factorial = num => {
  let store = 1;
  for (let a = num; a > 0; a--) {
    store *= a;
  }
  return store;
};

const zip = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    let arr = [];
    arr1.forEach(function(item) {
      arr[arr1.indexOf(item)] = [item, arr2[arr1.indexOf(item)]];
    });
    return arr;
  }
  else {
    return -1;
  }
};

const unzip = arr => {
  let arr1 = [];
  let arr2 = [];
  arr.forEach(function(item) {
    arr1.push(arr[arr.indexOf(item)][0]);
    arr2.push(arr[arr.indexOf(item)][1]);
  });
  return [arr1, arr2];
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  return [str.splice(0, num), str.splice(num,)].join();
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:

// console.log(tokenize("dab on me"));
// console.log(uniqueOnes([1, 2, 2, "3", "3"]));
// console.log(zip([1, 2, 3], [2, 3, 4]));
// console.log(unzip([[1, 2], [2, 3], [3, 4]]));
assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
assert (reverse("3df") === "fd3");
assert(40320 == factorial(8));
