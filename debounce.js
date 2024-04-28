function getData() {
  console.log("Fetching Data");
}

function myDeBounce(fun, d) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {fun()}, d);
  };
}

const betterFunction = myDeBounce(getData, 1000);
