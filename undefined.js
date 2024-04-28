// Not Defined or undefined in Javascript
console.log(a);
// due to double assignment we cannot use the b as well it is not defined
console.log(b);
// in case of let you cannot use before initialisation
console.log(c);
var a = b = 10;
let c = 10;