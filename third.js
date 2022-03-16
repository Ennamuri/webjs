"use strict"
var line = "fundamentals of java script"
console.log("the actual sentense is ",line);
console.log("the slicing after line is ",line.slice(2,9));
console.log("slice(13)" ,line.slice(1,15));
console.log("global replace of a with A: ",line.replace(/a/g, "A"));


console.log("splitting on the space: ",line.split(" "));

var myStr = "           Hey, this is js    "
console.log("befor trim : "+ myStr);
console.log("after trim: "+ myStr.trim());
console.log('john deere');
console.log(Date());
console.log("john" + " " + "deere");