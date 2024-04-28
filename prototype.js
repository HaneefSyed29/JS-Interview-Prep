const obj = {
  name: "Haneef Syed",
};
const obj1 = {
  age: "21",
  __proto__: obj,
};
const obj2 = {
  professional: "SE",
  __proto__: obj1,
};
console.log(obj1.name);
console.log(obj2.name);
console.log(obj2.age);

// in case of arrow function the return object will be null
Array.prototype.show = function(){
  return this;
}
const nums = [1, 2, 3, 4];
console.log(nums.show());
