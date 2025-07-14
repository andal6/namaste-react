 "use strict";

//this in global space
 
console.log(this); //  global object -window 

//this inside a function
function x(){
    //value depends on strict and non strict mode

console.log(this);
}
x(); //undefined
window.x();     

//this inside an object
const student={
    name:"andal",
    printName:function(){
console.log(this.name)
    }

}
student.printName()
 
const student2={
    name:"deepika"
}
student.printName.call(student2);

//this in arrow function
const obj={
    a:10,
    x:function(){ 
        const y=()=>{
console.log(this) 
        }
       y();
    }
}
obj.x();

const o={
    a:10,
    x:()=>{
        console.log(this)
    }
}
o.x();

function x(){
    console.log(this)
}
window.x();
//this in strict mode


//this in strict mode-(this substitution)

//if the value of this keyword is undeifned/null 
//this will be replaced with gloabalobject
//only in non-strict mode
const person = {
  name: "Andal",
  greet() {
    console.log(this.name);
  },
};

person.greet(); // this → person object ⇒ Output: Hello, Andal

const p={
    name:"ashvathi",
    fn:()=>{
console.log(this.name);
    }
}
p.fn()