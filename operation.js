"use strict";
let prices = new Array(10,20,30,40,70);
let shallowcopy = prices;
console.log("befor changing shallow copy, prices = \n",prices);
shallowcopy[0] = 70;
console.log("after changing shallow copy, prices = \n",prices);

let deepcopy = prices.slice();
console.log("befor changing deepcopy copy, prices = \n",prices);

deepcopy[0] = "eighty";
console.log("after changing deepcopy, prices = \n",prices);
console.log("the contents of deepcopy, prices = \n",deepcopy);

prices.push(100);
console.log("contents of prices after a push: \n",prices);
prices.unshift(0);
console.log("contents of prices after an unshift:/n",prices);
prices.pop();
console.log("contents of prices after pop:\n",prices);
let europeoffices = ['india','delhi','france'];
let africaoffices = ['durban','nairobi'];
let oceanoffices = ['christchurch','sydney'];
let southernoffices = africaoffices.concat(oceanoffices);
console.log("southernoffices:",southernoffices);
console.log("africaoffies:",africaoffices);
console.log("oceanoffices:",oceanoffices);
let alloffices = africaoffices.concat(oceanoffices,europeoffices);
console.log("alloffices:",alloffices);
let sortedoffices = alloffices.sort();
console.log("sortedoffices:",sortedoffices);
console.log("alloffices after sorting :\n",alloffices);
console.log("reverse sorting of alloffices:",alloffices.reverse());
alloffices = africaoffices.concat(oceanoffices,europeoffices);
console.log("sorted copy of offices using spread syntax:\n",[...alloffices].sort());

let numArray = [20,30,5,60];
console.log("original elements of numArray:\n",numArray);
console.log("sorted copy of numarray using the default sort:\n",numArray.slice().sort());
numArray.sort(function(a,b){return a-b});
console.log("sorted numArray with compare function:\n",numArray);
numArray.sort(function(a,b){return b-a});
console.log("sorted numArray with the reveerse function:\n",numArray);