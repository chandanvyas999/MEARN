console.log("Hello bhaije ki haal chaal????");
console.log("Me Narendra das damodar modi");

let a = 15;
let b = 16;
console.log("The sum is: ", (a+b));

let kachha = 100;
let baniyan = 80;
console.log("Tera last paisa ", kachha + baniyan , "hua re");

//Ek to ye tarika hua jis se e likh sakata hu lakin ek dusra batate he
// Yaha par simplly us string ko agar hum ek variable me daal de to...

let output = ("Tera total: " + (kachha + baniyan) + " hua re");
console.log(output);

//Ab dekho isko karne ka is se bhi aasaan tarika
let finalPrice = `Tera last paisa he: ${kachha + baniyan}`;
console.log(finalPrice);

// Ab yaha apun dekhenge operators
// Comparision for non-numbers
let num = 'a' > 'A'
console.log(num)  // Matlab ki ese hi kuchh likhenge re

// Ab If Statement
let age = 23;
if (age >= 18)
{
    console.log("Tu 18 se uppar he mere bhai tu adult ho gaya")   
}

//Le bhai traffic light bana diya
let color = "yellow";
if (color == "green") {
    console.log("Chalte baniye");
}
if (color == "red") {
    console.log("Ruko be kaha bhage jaa rahe ho");
}
if (color == "yellow") {
    console.log("Chal gadi start kar");
}

//Ab Else dekhte he
let boy = 13;
if(boy >= 14) {
    console.log("He is a man")
} else {
    console.log("He is a child")
}

//Ab else if dekhta he 
let girl = 15;
if(girl >= 15) {
    console.log("She's women")
}
else if (girl < 15)
{
    console.log("She's girl")
}

//Practice Question Popcorn Price in sizes
let size = "S";

if (size === "XL") {
    console.log("Popcorn 250 ka he")
} else if (size === "L") {
    console.log("Popcorn 200 ka he")
} else if (size === "M") {
    console.log("Popcorn 100 ka he")
} else if (size === "S") {
    console.log("Popcorn 50 ka he")
} else {
    console.log("Size se pehle poket check kar")
}

//Nested if else 
let marks = 20;

if (marks >= 30 ) {
    if (marks >= 80) {
        console.log("A Grade")
    }
    else{
        console.log("B Grade")
    }
}
else {
    console.log("Ab tere papa ko result jayega");
}

//Logical Operator
let maths = 60;
if ((maths >= 30) && (maths >= 80)) {   //AB yaha mera outpur nahi aa raha kyoki dono conditin setify nahi he. Kyoki ye 80 ye uppar nahi he. Agar me yaha maths<=80 karta to paas bhi dihta. Ya abhi iske bich me || (OR) ka use kaunto jaroor dikhega. Kyoki usme koi 1 condition paas honi jaroori he
    console.log("Paas he bhai");
}
else {
    console.log("Result 30-80 ke beech me nahi he")
}

//Bhai mast question he dekh
//Q. A "good string" is a string that starts with the letter 'a' & has a length > 3. wrp to find a string is good or not
//Bhai logic bhale hi pata ho lakin "" ya '' ka use sahi se nahi kiya to... answer hi nahi aayega.
let str = "apple";
if ((str[0] === 'a') && (str.length > 3)) {
    console.log("String is good")
}
else{
    console.log("Not a good string")
}

//Final output batana tha par me yaha code likh deta hu
let wo = 12;
if ((wo % 4 === 0) && (wo + 1 === 12 || wo - 1 === 11)) {
    console.log("Safe he bhai")
}
else {
    console.log ("Unsafe he bhai")
}

//Switch Case
let co = "Red";
switch(co) {
    case "Red" :
        console.log("Gaadi rok de bhai");
        break;
    case "Yellow" :
        console.log("Gadi start kar bhai");
        break;
    case "Green" :
        console.log("Bhagaaa Bhaaaiiii Bhagaaa");
        break;
    default :
        console.log("Bhai Tere baap ki hi Road samajh");
}

// Alert & Prompt
// Bhai jab hum kisi chij ko galat daal dete he to hame message aata he na plz fill the form correctfully ya phir ki koi chij chhoot gayi he vo hi ab hum samjhenge.
//Ye hi alert me hota he
//alert("Bhai aukaat me. Jo bola he vo likh na");

//Ye hame uski jagh kuchh likhne ko bolega. Hum likh kar OK karenge to hi hame aage ka kuchh dikhega nahi to nahi dikhega.
//prompt("Laude likh yaha")

//Prompt ko hum kuchh ese bhi se kar sakate
/*let ao = prompt("Bhai apna pehla naam likh");
let bo = prompt("Bhai apni jaati likh");
let eo = "Welcome" + ao + bo + "!";
alert(eo);*/


//Is se aaage aur pichhe vale space hat jaate he
let fo = "   Hello   ";
console.log(str.trim());

//To upper and lower case
let go = 'Chandan Vyas';
console.log(go.toUpperCase());
console.log(go.toLowerCase());

//indexOf (It shows only positions of that letter)
let ho = 'Mr.ChandanVyas'
console.log((ho.indexOf('C')));

//Method chaining 
//Iska matlab hua agataar ek hi word me arguments paas karna
let io = '    chagdgebydcb    ';
console.warn((io.toUpperCase().trim()));

//Slice
//JAha tak ka number diya he vaha tak ka cut kar dega
//2 number dete he to jaha se jaha tak ka dete he vaha tak ka rakhta he baaki cut
//Aur ye 2nd vale me ye he ki iski total valu ka -4 kar raha he
//Jese yaha total number of latters = 11 he. To 11-4=7 aur vaha 7 likhenge to bhi ye hi aayega answer. Check karke dekh lo
let jo = 'ChandanVyas'
console.log((jo.slice(7,11)));
console.log((jo.slice(-4)));

//Replace
//Ab replace word bade hi simpally kaam karte he
//Repeat me mo.repeat(2) to ye pura hi 2 baar likha jaayega
let mo = 'ChandanVyas';
console.log((mo.replace("Chandan","Lovely")));

//Arrays
let names = ["Chandan", "Sanjay", "Ajay", "Vijay","Dhanjay","Mritunjay"];
console.log((names[5].toUpperCase()));
//Now chandan is replace in same array. To this example we can understand arrays are mutable
names[0] = 'Lovely';
console.log((names[0].toUpperCase()));

//Now Push, Pop, Unshift, Shift
//Push = Add in end
names.push("Chandan")
console.log(names);
//Pop = Delete from end
names.pop();
console.log(names);
//Unshift = Add in start
names.unshift("Chandan");
console.log(names);
//Shift = Delete from start
names.shift();
console.log(names);
//Replace Ajay To kailash
names[2] = 'Kailash';
console.log(names);

//Concat(2 Arrays ko Merge karna)
let no = ["Meerut", "Tatti", "Sahar", "Hai"];
let oo = ["Phalodi", "Acchi", "Jagh", "Hai"];
let po = no.concat(oo);
console.log(po);

//Reverse karna
console.log((po.reverse()));

//Slice in Arrays
console.log(po.slice(2));
console.log(po.slice(2,3)); //Kyoki ye start point cover karke end point -1 cover karta he
console.log(po.slice(-2));  //Ab ye piche se 2 word uthata he

//Sort in Array
let days = ["Monday", "Sunday", "Wednesday", "Tuesday"]  //Sorting based on alphabet
console.log((days.sort()));

let qo = [25 , 16 , 4 , 49 , 36 , 9];
console.log((qo.sort()));

//Nested Array
let ro = [[1,2], [3,4], [5,6]];
console.log([ro]);      //It shows 3 Array
console.log([ro[2][1]]);   //Ye 2D array he 2nd no ke array ka 1st element that is 6