let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// GAME START (any key)
document.addEventListener("keydown", function () {
    if (!started) {
        started = true;
        levelUp();
    }
});

// BUTTON FLASH
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

// LEVEL UP
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    btnFlash(randBtn);
}

// USER BUTTON CLICK
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", function () {
        if (!started) return;

        let userColor = btn.classList[1];
        userSeq.push(userColor);

        btnFlash(btn);
        checkAnswer(userSeq.length - 1);
    });
}

// CHECK ANSWER
function checkAnswer(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over ❌ <br> Score: ${level - 1} <br> Press any key to restart`;
        document.body.style.backgroundColor = "red";

        setTimeout(() => {
            document.body.style.backgroundColor = "white";
        }, 200);

        resetGame();
    }
}

// RESET GAME
function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
