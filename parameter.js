"use strict";
let add;
function sum(...nums){
    add = 0;
    for (var num of nums){
        add += num;
    }
    return add;
}
let addition = sum(1,2,3,4,5);
console.log(addition);


function studentdetails(name, ...courses){
    console.log("name of the student is :" + name);
    let sub;
    for(sub = 0; sub< courses.length; sub++){
        console.log(courses[sub]);
    }
}
studentdetails("chris","javascript","python","java","react");