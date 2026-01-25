//Making function
function Jute() {
    console.log("Jute khane he kya?");
}
//Calling function
Jute();
//Making Function 
function kachha() {
    console.log("Me 80 no. ka kachha pehenta hu");
}
//Calling function
kachha();

//RoleDice par ek function banaiye
function roleDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand)
}

roleDice();

//Function with arguments pass
function printName(name , age) {
    console.log(`My name is ${name} and age is ${age}`);
}
//Function used
printName("Chandan", 23);

//Ab mujhe table print karvana he jo bhi mujhe number dega uska 
function printTable(number) {
    for (let i=1; i<=10; i++) {
        console.log(`${number} X ${i} = ${number * i}`);
    }
}
printTable(5);

//Scope 
let sum = 10; //Global Scope
function aa(a , b) {
    let sum = a+b;  //Local Scope
    console.log(sum);
}
aa(2,3);

//Lexical scope (Nested function)
function outerfunction() {
    let x = 4;
    let y = 5;
    function innerfunction() {
        console.log(x);
    }
}

//Higher Order Function
function multipleGreet(funct , count) {          //Higher order function
    for (let i = 1; i <= count; i++)
    funct();
}
let greet = function() {
    console.log('Hello Bhai');
}

multipleGreet(greet , 5);

//Methods
let ba = {
    sum: function(a,b) {
        return a + b;
    },
    sub (a , b) {
        return a - b;
    },
    mul (a , b) {
        return a * b;
    },
    div (a , b) {
        return a / b;
    }
};

//"this" keyword of javascript

let bo = {
    name: "Chandan",
    age: 21,
    mathe: 56,
    eng: 45,
    hindi: 78,
    getAvg() {
        let avg = (this.mathe + this.eng + this.hindi) / 3;
        console.log(avg);
    }
}
bo.getAvg();

//try & catch
//try and catch ka kaam ye he ki ab yaha hamne "b" ko define nahi kiya th to code poora ruk gaya aur website crash ho gayi. To is chij ko solve karne ke liye hum try catch ka use karte he ki vaha ek bar catch ka code run karta he taaki programmer ko pata ho ki yaha error he. Ab aage vala code smoothly chalega. 
try {
    console.log(b);
} catch {
    console.log("Error hai bhai");
}

console.log("Program chal raha hai");

//Arrow Function
let a = 5;
let b = 10;
let Arrow = (a , b) => {
    return a + b;
}
console.log(Arrow(a , b));

//Shorter Arrow Function
let ShortArrow = (a , b) => a + b;
console.log(ShortArrow(a , b));

//Set time out function
//This is also a prebuild function just like MAth()
//To pehle sum (funct, time)
//To pehle time likh dena aur baad me function ko likh dena yaad rakhna ki "," lagana nahi bhulo.
console.log("Pehle ye");
setTimeout (() => {
    console.log("Ye 2 sec baad print hoga")
}, 2000);

console.log("Ye 2nd par peint hoga")

//"this" with arrow function and regular function diffrence
let co = {
    name: "Chandan",
    marks: 90,
    prop: this,     //Global scope
    getName: function() {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);    //Parent's scope -> window (global scope)
        return this.marks;
    },
    getInfo1: function() {
        setTimeout(() => {
            console.log(this);  //Student
        }, 2000)
    },
    getInfo2: function() {
        setTimeout(function()  {
            console.log(this);  //Window (global scope)
        }, 2000)
    }
};