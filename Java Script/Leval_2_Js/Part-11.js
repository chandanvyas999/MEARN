/*function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}
three();*/


//CALLBACK HELL
/*h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
};

//Ab humne yaha ek function banaya he jo ki callback hell ko represent karta he.
//Yaha hum dekh rahe he ki ek task ko execute hone ke baad hi dusra execut ho raha he.
//Aur yaha hum function ke andar function ko call laga rahe he
//Halanki ye simple kaam hun aur bhi tarike ke se kar sakate the lakin hame yaha call back hell samajhna tha to hamne isko ese kiya.

//Isko hum callbacks nesting bhi keh sakate he

changeColor("red", 1000, () => {
    changeColor("blue", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("pink", 1000);
            });
        });
    });
});*/

//Again Callback Hell

/*function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}*/

/*savetoDb(
    "Chandan Vyas",
    () => {
        console.log("Success: Your data is saved");

        savetoDb(
            "Hello mere bhai",
            () => {
                console.log("success2: data2 saved");

                savetoDb(
                    "Chandu mere Bhai",
                    () => {
                        console.log("success3: data3 saved");
                    },
                    () => {
                        console.log("failure3: weak connection");
                    }
                );
            },
            () => {
                console.log("failure2: weak connection");
            }
        );
    },
    () => {
        console.log("Failure: weak connection");
    }
);*/


//Now Promises
/*function savetoDb(data) {
    return new Promise( (success, failure) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            success("success: Data was saved");
        }
        else {
            failure("fail: weak connection");
        }
    })
}

let request = savetoDb("Chandan Vyas") //req = promise object
.then( () => {
    console.log("promise was resolved");           //Yaha hamne then() aur catch() ka use kiya
})
.catch( () => {
    console.log("promise was rejected");           //Ye simply try catch ki tah kaam karte he.
}); 
//Promise chaining bhi same hi hoti he me yaha nahi likh raha kyoki time nahi he baad me kabhi karenge */

//Async Function

/*async function greet() {
    return "hello Bhai";
}
greet()
.then ( (result) => {
    console.log("Promise was resolved");
    console.log("Result was", result);
})
.catch ( (err) => {
    console.log("Promise was rejected with error", err);
});*/

//Now awit keyword
//Hum log await keyword ko hamesha hi sirf async function ke saath hi laga sakat he.
/*function getNum() {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}*/

//JASON data access in Javascript
/*let url = "https://catfact.ninja/fact"

fetch(url)
.then ( (response) => {
    console.log(response);
    return response.json();
})
.then( (data) => {
    console.log(data.fact);
})
.catch ((err) => {
    console.log("ERROR - ", err);
});*/

//With using await and async
/*let url = "https://catfact.ninja/fact"

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    } catch (e) {
        console.log("error -", e);
    }
    console.log("Bye Bye");
};*/

//With using Axios
/*let url = "https://catfact.ninja/fact"

async function getFacts() {
    try {
        let res = await axios.get(url);
        console.log(res.data.fact);
    } catch (e) {
        console.log("error -", e);
    }
};*/

//Try Something new

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    console.log(fact)
    let p = document.querySelector('#result');
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact"

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        return "no facts found";
    }
};