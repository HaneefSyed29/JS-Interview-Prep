// Currying function in Javascript
function Sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// writing this type of code is said to be currying
const res = Sum(1)(2)(3);
console.log(res);

// the next concept is about the infinite currying
function add(a){
  return function(b){
    if(b) return add(a+b);
    return a;
  }
}
console.log(add(4)(5)(8)(8)());


