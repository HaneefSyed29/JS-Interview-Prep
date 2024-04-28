// Implementing Memoization in Javascript
// memoization is an optimization technique that can be used to reduce time-consuming calculations by saving previous input to something called cache and returning the result from it.

let sum = 0;
const calc = (n) => {
    for(i=1;i<=n;i++) sum += i;
    return sum;
}

const memoize = (fun) => {
  let cache = {};
  return function(...args){
    let n = args[0];
    if(n in cache){
      console.log("cache");
      return cache[n];
    }
    else{
      console.log("computed");
      let sum = fun(n);
      cache[n] = sum;
      return sum;
    }
  }
}

// console.time()
// console.log(calc(5));
// console.timeEnd();

console.time();
const res = memoize(calc);
console.log(res(5));
console.timeEnd();

console.time();
console.log(res(5));
console.timeEnd();

console.time();
console.log(res(5));
console.timeEnd();