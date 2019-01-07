// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  const fun = el => {
    if (typeof el === 'object') {
      return Object.values(el).reduce(fun);
    }
    else {
      return (el);
    }
  }
  if (typeof obj === 'object') {
    let x = 0;
    for (o in Object.values(obj)) {
      if (!fun(o)) {
        x = 1;
        console.log(x)
      }
    }
    if (x) {
      return false;
    }
  }
  else {
    return false;
  }
};

const obj = {
  name: "dab",
  red: "hold",
  do: 0,
}

console.log(hasFalsyValue(obj))