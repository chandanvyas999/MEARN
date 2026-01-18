//Favorit Movie guess game
const favMovie = "Avatar";

let guess = prompt("Guess my favourit movie");
while((guess != favMovie) && (guess != 'quit')) {
    guess = prompt("Wrong! Please try again");
}

if (guess == favMovie){
    alert("Congratulation!!");
}
else if (guess = 'quit') {
    alert("Bhai tujhse ye ummid nahi thi");
}