let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li")     //Ab hamne yaha list ko select kiya.
    item.innerText = inp.value;                //Ab bataya ki item ka jo inner text he vo input value he.

    dleBtn = document.createElement("button");
    dleBtn.innerText = "delete";
    dleBtn.classList.add("delete");

    item.appendChild(dleBtn);
    ul.appendChild(item);                     //Ab yaha append kar diya ul ke aneder as a child.
    inp.value = "";                          //Ye hamne input ke baad input khali ho.
});


/*ul.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
            let listItem = event.target.parentElement;
            listItem.remove();
            console.log("Element Deleted");
    }
});*/

//OR

ul.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
}
});
