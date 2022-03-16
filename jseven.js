"use strict";
function isEven(){
    var a;
    a = document.getElementById("num").value;
    try{
        if((a%2)==0){
            console.log("the enteren number is even");
        }
        else{
            throw "not an even number";
        }
    }
    catch(msg){
        console.log("the enetred value is " + msg);
    }
}