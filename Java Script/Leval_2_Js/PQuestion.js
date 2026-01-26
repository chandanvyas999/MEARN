//Ab ek peregraph banaana he withouth usings HTML

//To sabse pehle jis chij ko add karna he uska naam do usko. Jisko create karna he usko () isme likho.
//Ab jo element tumne banaya he usme kya karna he vo likho
//Jo bhi hum likhte he vo saara document me hi aata he aur hum apna content body me likhte he.
//Ab phir append karo. Child se karo ya sidha.

//Ab humne yaha dekha ki color add kiya he to uska kese karna?
//Jisme color daalana he uska naam likho.
//Aur phir vo class he ki, Id he jo bhi he likho.
//add karna to add nahi to remove aur jo bhi likha phir usko () isme daal do.


let pera1 = document.createElement('p');
pera1.innerText = "Bhai dekh le Javascript se banaya he";

document.body.appendChild(pera1);

pera1.classList.add('red');


//Ab blue color daalna he
let h3 = document.createElement('h3');
h3.innerText = "Ab le Blue color daal diya";
h3.classList.add('blue');

document.body.appendChild(h3);

//Ab ek div bannana he aur usme peregraph bhi likhna he
let div = document.createElement('div');
let h1 = document.createElement('h1');
let pera2 = document.createElement('p');

h1.innerText = "Ye ab H1 ka text he";
pera2.innerText = "Ye pera2 he";

div.append(h1);
div.append(pera2);

div.classList.add("box");

document.body.appendChild(div);