// Async JS Programming
// Callbacks, Promises, Async & Await
const datas = [
  { name: "Haneef", proffesional: "SE" },
  { name: "Fazal", proffesional: "Buisness" },
];

function getDatas() {
  setTimeout(() => {
    datas.forEach((data) => console.log(data.name));
  }, 2000);
}

function createData(data) {
  setTimeout(() => {
    datas.push(data);
  }, 5000);
}

function createData1(data, Callbacks) {
  setTimeout(() => {
    datas.push(data);
    Callbacks();
  }, 8000);
}

function createData2(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(data);
    }, 3000);
    let isTrue = true;
    if (isTrue) {
      resolve();
    } else {
      reject();
    }
  });
}

// now here what happeing is like you are not able to see the updates list of datas because it is taking the 5sec to update
// calling createData without the callback
createData({ name: "Sufiyan", proffesional: "Doctor" });
getDatas();
// calling createData1 with callback
createData1({ name: "Milind", proffesional: "Lead" }, getDatas);
// Now its time to use promises
createData2({ name: "Ghanshyam", proffesional: "Business" }).then(getDatas);
// Async/Await with the create and will also get the updated one as well
async function getUpdatedData() {
  await createData({ name: "Sumit", proffesional: "SE" });
  getDatas();
}
getUpdatedData();
