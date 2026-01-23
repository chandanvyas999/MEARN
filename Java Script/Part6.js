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