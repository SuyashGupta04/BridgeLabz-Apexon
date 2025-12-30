// Javascript 

// Javascript Variables
let greeting = "Hello, World!";
const pi = 3.14159;
var isActive = true;


//Javascript Conditionals
if (isActive) {
    //console.log(greeting);
} else {
    //console.log("Inactive");
}

switch (new Date().getDay()) {
    case 0:
        //console.log("It's Sunday!");
        break;
    case 1:
        //console.log("It's Monday!");
        break;
    case 2:
        //console.log("It's Tuesday!");
        break;
    default:
    //console.log("It's another day!");
}

var age = 22;
let text = (age < 18) ? "Minor" : "Adult";
//console.log(text);


// Javascript Loops
loop1: for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue loop1;
    }
    //console.log("For Loop iteration: " + i);
}

while (age < 25) {
    //console.log("Age is: " + age);
    age++;
}


do {    //console.log("This will run at least once.");
} while (false);


// Javascript Functions
function addition(a, b) {
    return a + b;
}

const multiply = function (a, b) {
    return a * b;
};

const divide = (a, b) => a / b;

//console.log("Addition: " + addition(5, 3));
//console.log("Multiplication: " + multiply(5, 3));
//console.log("Division: " + divide(6, 3));

const myFunction = new Function("a", "b", "return a * b");
let x = myFunction(4, 3);
//console.log("Function Constructor Multiplication: " + x);


// Javascript Objects
const person = {
    firstName: "Suyash",
    lastName: "Gupta",
    age: 22
};

person.nationality = "Indian";
//console.log("Person: " + person.firstName + " " + person.lastName + ", Age: " + person.age+", Nationality: "+person.nationality);

const car = new Object({
    type: "Fiat",
    model: "500",
    color: "white"
});

// Javascript Arrays
const fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Orange");
//console.log("Fruits: " + fruits.join(", "));


//Javascript Set

const letters = new Set();
letters.add("A");
letters.add("B");
letters.add("C");
letters.add("A"); 

//console.log("Set size: " + letters.size); 

//Javascript Map

const capitals = new Map();
capitals.set("India", "New Delhi");
capitals.set("USA", "Washington D.C.");
capitals.set("France", "Paris");

//console.log("Capital of India: " + capitals.get("India"));

// Javascript Regular Expressions
const pattern = /world/i;
const testString = "Hello, World!";
const result = pattern.test(testString);

let replacedString = testString.replace(pattern, "Universe");
//console.log("Replaced String: " + replacedString);

//console.log("Pattern found: " + result);


// Javascript Error Handling
try {
    let result = 10 / 0;
    if (!isFinite(result)) {
        throw new Error("Division by zero is not allowed.");
    }
} catch (error) {
    //console.error("Error caught: " + error.message);
} finally {
    //console.log("Execution completed.");
}


// Javascript Events

/*
const button = document.getElementById("actionBtn");
button.addEventListener("click", function () {
    document.getElementById("demo").innerHTML = "Button was clicked!";
});

window.addEventListener("load", function () {
    document.getElementById("demo").innerHTML += "<br>Page is fully loaded.";
});

*/


// Javascript Asynchronous Programming

// Callback Functions

function greet(name, callback) {
    //console.log("Hello, " + name);
    callback();
}

function sayBye() {
    //console.log("Goodbye!");
}

greet("Suyash", sayBye);

//console.log("Start");

setTimeout(function () {
    //console.log("Inside setTimeout");
}, 2000);

//console.log("End");

function calc(a, b, callback) {
    return callback(a, b);
}

function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

//console.log(calc(5, 3, add));    
//console.log(calc(5, 3, mul));

// Promises

const myPromise = new Promise(function (resolve, reject) {
    let success = true; 
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected.");
    }
});

myPromise.then(function (message) {
    //console.log(message);
}).catch(function (error) {
    //console.error(error);
});

// Async/Await

async function fetchData() {
    return "Data fetched successfully!";
}

async function displayData() {
    try {
        const data = await fetchData();
        //console.log(data);
    } catch (error) {
        //console.error("Error: " + error);
    }
}

displayData();

