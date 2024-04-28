// Closure
// Lexical Scope is the concept
var Sum = function(a){
  return function(b){
    // now here the value a is in parent and child is able to access it
    return a + b;
  }
}

const answer = Sum(1);
// now here what happening is last function value is still retained so add it with the new value we passed
console.log(answer(2));