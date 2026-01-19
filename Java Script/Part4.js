//Loops in JS
//For Loops
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

//Print all odd number 1-15
for (let i = 1; i<=15; i=i+2) {                  //Here we do initialize by 1 
        console.log(i)
}
//OR
/*for (let i = 0; i<=15; i++) {
    if(i % 2 !==0) {
        console.log(i)
    }
}*/

//Print all Even number 2-10
for (let i = 0; i<=10; i=i+2) {                  //Here we do initialize by 0 or 2 
        console.log(i)
}

//Print Multiplication of 5 
for (let i=0; i<=50; i = i+5) {
    console.log(i)
}

//User to took input for any table
/*let n = prompt("Enter a number for table");
n = parseInt(n)
for (i=n; i<=n*10; i=i+n) {
    console.log(i)
}*/

//Nested loop
console.error("Nested loop Start")
for (i=1; i<=3; i++) {
    for (j=1; j<=5; j++) {
        console.log(i,j)
    }
}

//Now while Loop
let n = 1;
while (n<=5) {
    console.log(n);
    n++;
}

//Break case
console.log('Using Break');
let a = 1;
while (a <= 5) {
    if (a == 3)
        break;
    console.log(a);
    a++;
}

//Now Loops with Array
let color = ["Red", "Green", "Yellow", "Black", "White"];
for (let i = 0; i<color.length; i++) {
    console.log(i, color[i]);
}

//Loops with nested Arrays
let heroes = [["Ironman", "Thor", "Hulk"], ["Superman", "Batman", "Wonder Women"]];

//1st Step
for (i = 0; i<heroes.length; i++) {
    console.log(i, heroes[i])
}
//2nd Step
for (i = 0; i<heroes.length; i++) {
    console.log(i, heroes[i])
    for(j=0; j<heroes[i].length; j++) {
    }
}
//3rd Step
for (i = 0; i<heroes.length; i++) {
    console.log(i, heroes[i])
    for(j=0; j<heroes[i].length; j++) {
        console.log(`j = ${j}, ${heroes[i][j]}`);
    }
}

//Another Example
let student = [["Chandan",23], ["Sanjay", 44], ["Tarun",22]];

for (i = 0; i<student.length; i++) {
    console.log(`info of student #${i}`)
    for (j = 0; j<student[i].length; j++)
        console.log(student[i][j]);
}

//For of Loop (This is new type of loop that comes in javascript)
//Yaha par NA vali jagh par same same koi bhi word aa sakata he aur of ke baad me veriable ka naam he vo
let AA = ["Chandan", "Sanjay", "Ajay", "Vijay"]

for (NA of AA) {
    console.log(NA)
}

//Ab ye yaha mere word ko ek single single print karvayega
for (char of 'chandan') {
    console.log(char);
}

//Nested for of loop
let baap = [["Chandan", "JAtin", "Aditya"], ["Chhotu", "Tiwari", "Sahil"]];
for(chandan of baap) {
    for (tiwari of chandan) {
        console.log(tiwari)
    }
}

//Now Objects in Java script
let Mera_Naam  = {
    name: "Chandan",
    age: 23,
    marks: 44,
};

let post = {
    username: "chandanvyas999",
    content: "Videography",
    likes: 200,
    share: 900,
    repost: 500,
    tags: 700,
};
//To this we can get specific data form data page
console.log(post.username); /*OR*/ console.log(post["username"]);
//For Updating value
post.content = "Photography";
console.log(post["username"]);
console.log(post);
//For Adding value
post.sizeOfKachha = 80;
console.log(post["sizeOfKachha"]);
console.log(post);

//Nested Objects
let bachha = {
    chandan: {
        maths: 10,
        english: 12,
        hindi: 90,
        science: -8,
    },

    sanjay: {
        maths: 3,
        english: 1,
        hindi: 80,
        sciance: 10,
    },

    tarun: {
        maths: 0,
        english: 0,
        hindi: 75,
        science: 20,
    },
};

console.log(bachha)
bachha.tarun.maths = 10;
console.log(bachha.tarun.maths);

//Aur agar inhi chijo ko agar me {} isme na likh kar [] likh du to ye array ban jaayega.

//Ye he apne Math object jo JS me prebuild hota he ye ek library ki tarh he isme kar saare default values he to unko hum is tarh se access kar sakate he. Yaha hamne PI likh kar pi ki value access ki he
 console.log(Math.PI);