"use strict";
console.log("is this === window?",this === window);
console.log("whatr is this",this);
 var age = 35;
 console.log("window.age",window.age);
 console.log("this.age:",this.age);
  this.age = 55;
  console.log("window.age:",window.age);
  console.log("age:",age);
   let somefunction = () => this;
   console.log("this returned from a function:",somefunction());