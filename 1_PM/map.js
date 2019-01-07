// Complete the implementation of the following functions so that
// the output is [0, 3, 6, 9, 12]

const arr = [0, 1, 2, 3, 4];

const triple = el => el * 3;

Array.prototype.map = function(fun) {
  const holder = [];
  this.forEach((el) => {
    holder.push(fun(el))
  });
  return holder;
};

console.log(arr.map(triple));
