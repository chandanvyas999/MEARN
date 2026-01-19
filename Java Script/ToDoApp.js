let todo = [];

let req = prompt("Please enter your request");
console.log(req);

while (true) {
    if (req == "quit") {
        console.log("queitting app");
        break; 
    }
    if (req == "list") {
        console.log("-------------------");
        for (let i = 1; i < todo.length; i++) {
            console.log(i , todo);
        }
        console.log("--------------------");
    }
    else if (req == "add") {
        let task = prompt("Please enter the task what you wanna add");
        todo.push(task);
        req = alert("Your Task is Added in list");
    }
    else if (req == "delete") {
        let idx = prompt("Please enter the task index");
        todo.splice(idx, 1);
        req = alert("Your task is Deleted for list");
    }
    else {
        req = alert("Please enter your valid tasks");
    }
    req = prompt("Please enter your request");
}