// ES6
// Rest and Spread Operator
//Example Rest
function Sum(a, b, c, ...args) {
  // so args is storing the extra value passed in parameters
  // ES5 technique
  console.log(typeof arguments);
  console.log(arguments);
  // ES6 technique
  console.log(typeof args);
  return a + b + c + args[0] + args[1];
}
const output = Sum(1, 2, 3, 4, 5);
console.log(output);
console.log(typeof Sum);
class MyClass {}
console.log(typeof MyClass);

//Example Spread
const num1 = [1, 2, 3, 4];
const num2 = [...num1, 5, 6];
console.log(num2);

//Example of rest operator with object
const student = {
  name: "Haneef",
  age: "21",
  hobbies: ["Gymming", "Teaching"],
};
// the below is the object destructuring
const { name, age } = student;
console.log(age);
console.log(name);
// using spread in the combining
const newStudents = {
  ...student,
  name: "Fazal",
};
console.log(newStudents);
