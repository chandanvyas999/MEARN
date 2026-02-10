//Interoduction: Hame yaha ke code ko terminal me run karne ke liye. Pehle hame vaha tak cd karana hai jaha tak ye file hai. uske baad vaha hame "node node1.js" likhkar phir enter maarana hoga. Phir vo run hoga.

let n = 5;

for (let i = 0; i < n; i++) {
    console.log("Hello", i);
}

//AB mujhe vaha "node node1.js ke baad me kuchh naam dene he jisko ye hello bolega"
let args = process.argv;

for (let i = 2; i < args.length; i++) {
    console.log("Hello", args[i]);
};

const math = require("./node2");
console.log(math);
console.log(math.sum(2, 4));