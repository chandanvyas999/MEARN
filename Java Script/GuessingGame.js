let max = alert("Enter the number number");

let random = Math.floor(Math.random() * 10) + 1;

let guess = prompt("Guess the number");

while(true) {
    if (guess == 'quit') {
        alert("Bhai tujhse ye ummid nahi thi");
        break;
    }
    else if (guess < random) {
        guess = prompt("Your guess was too small. Plz Try again")
    }
    else if (guess > random) {
        guess = prompt("Your guess is too large. Plz try again.")
    }

    if (guess == random) {
        guess = alert("You're right bro!");
        break;
    }

    /*else {
        guess = prompt("Wrong guess. Please try again. Nahi to 'quit' likh de.");
    }*/
}