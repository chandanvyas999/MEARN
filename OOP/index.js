//Factory FUnction New Operators
function Person (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.talk = function() {
    console.log(`My name is ${this.name}`);
}
let p1 = new Person ("Chandan", 21);
let p2 = new Person ("Sanjay", 24);

//Classes
class Chandan {
    constructor(name, age) {
        this.name =name;
        this.age = age;
    }
    talk() {
        console.log(`My name is ${this.name}`);
    }
}
let p3 = new Person ("Tarun", 20);
let p4 = new Person ("Ajay", 26);

//Inheritance
class Student extends Person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
        this.name = name;
        this.age = age;
    }
    greet() {
        return "hello!";
    }
}
let p5 = new Student("Dhananjay", 23, 34, 56);