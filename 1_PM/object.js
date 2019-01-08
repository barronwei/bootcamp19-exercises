// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  const check = (objr) => { 
    Object.values(objr).forEach((key) => {
    if (typeof key === 'object') {
      check(key);
    }
    else {
      if (!key) {
        change = 1;
      }
    }
    });
  }
  let change = 0;
  check(obj)
  return !!change
};

const meek = {
  name: "dab",
  red: "hold",
  do: {
    damn: "dab",
    troll: "ran",
    woah: {
      obr: "",
      foo: "woops",
    }
  }
}

console.log(hasFalsyValue(meek));