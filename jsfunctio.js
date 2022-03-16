"use strict";
window.onload = firstFunction;
function firstFunction() {
    var x = 49;
    console.log("first function x = ", x);
    secondFunction();
}
function secondFunction() {
    console.log("second function(befor declaration): x = ",x);
    var x = 89;
    console.log("second function(after declaration): x = ",x);
}