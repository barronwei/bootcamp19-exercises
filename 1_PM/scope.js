// Part 1:
//  - What will print and why? 1 and 2 because y() calls x(), but a is undefined under x().
//  - What will change if we delete line 12? Why? Another 1 will be printed because x() does not redefine a to undefined.

// Part 2:
// - change to ES6 syntax

// Part 3:
// - modify so that it prints 1, 2, 2 in that order. Console.logs must stay in place.

const x = () => {
  let a = 2;
  console.log(a);
}

const y = () => {
  let a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();
