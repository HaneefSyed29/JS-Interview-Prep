// Event Bubbling & Capturing
// Stop Porgagation, Immediate Propagation & Prevent Default

var div = document.querySelector("div");
var button = document.querySelector("button");

// when we not mentioned the true keyword then we can capturing else bubbling
div.addEventListener("click", () => {
  console.log("DIV");
});

button.addEventListener("click", (event) => {
  event.stopPropagation(); // Bss yehi child tk rahega aur kuch nhi hoga
  console.log("BUTTON1");
});

button.addEventListener("click", (event) => {
  event.stopImmediatePropagation(); // Bss yehi child tk rahega aur kuch nhi hoga
  console.log("BUTTON2");
});

button.addEventListener("click", (event) => {
  console.log("BUTTON3");
});

// prevant default will forcefully stop the main logic of the whole tag
