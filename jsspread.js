"use strict";
console.log("the min of 1,2,3 :",Math.min(1,2,3));
let arr1 = [1,2,3];

console.log("Min of arr1(with spred):", Math.min(...arr1));

let  arr2 = [4,5,6];
let arr3 = [7,8,9];
console.log("min of arr2 and arr3:" ,Math.min(...arr2, ...arr3));
console.log("min of arr2 and arr3 and more:" ,Math.min(...arr2, 0,  ...arr3, 8));
let arrays = [...arr1, 10, ...arr3, 20];
console.log("array created by combining thespread operator with intergers:\n",arrays);

let str = "skillsoft";
console.log("str:", str);
console.log("array formed by sporeading str:\n", [...str]);
console.log("array formed with array.from(str):\n",Array.from(str));
