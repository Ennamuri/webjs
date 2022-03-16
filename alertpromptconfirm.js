"use strict";
alert('this is an alert message');

let name = prompt("the prompt message is: \nplease enter your name:");
console.log("you have entered: " + name);

let subject = prompt("please enter your selected subject name","javascript");
console.log("your selected subject is " + subject);

let a = prompt("enter a number to get its square value");
let b = a * a;
alert("square value of " + a + " is :" + b);

let output = confirm("confirmationnmessage:\n Redy to move");
if(output){
    console.log("you pressed ok");
}
else {
    console.log("you pressed cancel");
}