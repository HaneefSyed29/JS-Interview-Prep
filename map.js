// Higher order Functions 
// forEach
// filter
// map
// sort
// reduce

const companies = [
  { name: "Google", category: "Product Based", start: 1981, end: 2004 },
  { name: "Amazon", category: "Product Based", start: 1992, end: 2008 },
  { name: "Paytm", category: "Product Based", start: 1999, end: 2007 },
  { name: "Coforage", category: "Service Based", start: 1989, end: 2010 },
  { name: "Mindtree", category: "Service Based", start: 1989, end: 2010 },
];

const ages = [32, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// simple loop
for(i=0;i<companies.length;i++){
  console.log(companies[i].name);
}

// forEach Loop
companies.forEach(company => console.log(company.name));

// filter function
const ans = companies.filter(company => company.category === "Product Based");
console.log(ans);

// map function
companies.filter(company => company.category === "Service Based").map((company) => console.log(company.name));

// sort function
const sortedAns = ages.sort((a1, a2) => {
  return a2 - a1;
});
console.log(sortedAns);

// reduce function
const ans1 = ages.reduce((total, age) => {
  return total += age;
}, 0);
console.log(ans1);

