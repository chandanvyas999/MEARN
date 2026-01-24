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