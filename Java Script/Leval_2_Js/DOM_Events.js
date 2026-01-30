//Part 1
/*let btn = document.querySelector("button");

console.dir(btn);

btn.addEventListener("click", pehlaVala);
btn.addEventListener("click", dusraVala);

function pehlaVala() {
    alert("Hit me");
}

function dusraVala() {
    alert("Mouse ke uppar aa gaya")
}*/

//PArt 2
/*let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("color updated");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}*/

//Part 3
/*let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "pink";
}

btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);*/

//Part 4
/*Yaya key down ka matlab hua ki keyboard se button daba. Aur key up ka matlab hoga ki button uth gaya. Ese hi keyboard me use karne ke liye bohot saare functions he.*/
/*let inp = document.querySelector("input");
inp.addEventListener("keydown", function(event) {
    console.log("key =", event.key);
    console.log("code =", event.code);
    console.log("key was pressed");
});*/

//Part 5
/*let form = document.querySelector("form");
form.addEventListener("submit", function() {
    console.log("Submitted");
});*/

//Ab ye hum kar raha he data ko secure karne ke liye li agar koi form submitt hota he to uska data kaha save ho.
let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value);

    alert(`Hii${user.value} Your password is set to ${pass.value}`)
});