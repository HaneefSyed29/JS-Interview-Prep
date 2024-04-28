"use strict";

// set contains only unique value
const arr = [1, 2, 3, 4, 5, 5];
let set = new Set(arr);
set.forEach(data => console.log(data)); 

// Map will contains the key value pairs
let map = new Map([["name","Haneef"]]);
console.log(map);

//the main differnece between weakset/set and weekmap/map is all about the provision to traverse

