// Apply, Call, Bind in JS
const userDetails = {
  name: "Haneef",
  age: "21",
};

// so for every object we are passing we can clg the name
function details(city, state) {
  console.log(this.name + " " + city + " " + state);
}

const userDetails1 = {
  name: "Fazal",
  age: "22",
};
// it will just call the function with the given object in the arguments
details.call(userDetails);
details.call(userDetails1);
// it will call the function with the arguments and as well as the extra arguments
details.apply(userDetails, ["Nagpur", "Maha"]);
// in bind we can store that particular call and then we can use it in future
const newFun = details.bind(userDetails);
newFun();
