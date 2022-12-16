
//=====1 inside global scope===========

this.a ="main table";
// console.log(a);----ReferenceError: a is not defined
console.log(this.a);
// console.log(window.a);

this.garage={
    a:"garage wala table"};

// console.log(garage.a);----ReferenceError: garage is not defined
console.log(this.garage.a);

//======2 inside an object

let urfi={
    a:"urfi room table",
    clean_a(){
        console.log("with this "+this.a);
        // console.log("without this "+a);
    }

}

console.log(urfi.a);
// console.log(this.urfi.a);  --------TypeError: Cannot read properties of undefined (reading 'a')

//======3 inside an method

urfi.clean_a();
// console.log();

//======3 inside an function

const  abc=function(){
    console.log("abs funstion "+this.a);
}
abc();
// will create error if used 'use strict'

//=====4 call function to rescue
console.log("4 call function to rescue");
abc.call(this);
abc.call(this.garage);
abc.call(urfi);

//======5 inner function
// const a5=function(){

//     const a5inner=function(){
//         console.log("inner function"+this.a);


//     }
//     a5inner.call(this);
// };
// a5.call(this);
//======5 inner function---using arrow function
const a5=function(){

    const a5inner=()=>{
        console.log("inner function using arrow function"+this.a);


    }
    a5inner.call();
};
a5.call(this);
// //====this inside constructor
// let createroom=function(a){
//     this.a=`${a} s room`;}
// const daddy=new createroom("daddy");
// const SU=new createroom("SU");

// abc.call(daddy);
// abc.call(SU);

// ======this inside classes
class createRoom{
    constructor(name){
        this.a=`${name} s table`;
    }
    cleantable(){
        console.log(this.a+"  clean it now");
    }
    }

const daddy=new createRoom("daddy");
const SU=new createRoom("SU");
daddy.cleantable();