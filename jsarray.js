"use strict";
let studentgrades = ["A", "B", 3, "D", 5];
console.log("length :" + studentgrades.length);
console.log("element at iondex 3 :", studentgrades[3]);
console.log("element at index -3 :", studentgrades[-3]);

console.log("iterating over elements with theold syntax : \n");
var i;
for (i=0; i<studentgrades.length; i++){
         console.log(studentgrades[i]);
}

console.log("iterating over lelements with the es6 syntax : \n");
for(i of studentgrades){
    console.log(i);
}

console.log("elements in vowels :");
let vowels = new Array("A", "E", "I", "O", "U");
for(i of vowels){
    console.log(i);
}

let grades = [];
grades[0] = "A";
grades[1] = "B";
grades[2] = "C";
grades[3] = "D";
grades[4] = "E";
grades[7] = "H";
console.log("length :",grades.length);
console.log("elements in the grades array : \n");
for(i of grades){
    console.log(i);
}
console.log(`\nthe elements at index 5 and index 6 : ${grades[5]} and ${grades[6]}`);

let testscores = [43, 64, 76, 87, 89, 56];
function flagGoodScore(score){
    if (score > 70){
        console.log(`the score of ${score} is good`);
    }
}
console.log("iterating over the test score with foreach :");
testscores.forEach(flagGoodScore);