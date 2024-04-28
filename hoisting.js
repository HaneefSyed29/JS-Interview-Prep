// Hoisting in the JS
console.log(a) // idhar undefined milega 
var a = 10;

function getName(){
  console.log("Haneef");
}

getName();
console.log(a); // idhar 5 print hoga