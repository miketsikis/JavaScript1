"use strict";
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log("The length of the string is "+myString.length);
let repl=myString.replace(","," ");
console.log(repl);