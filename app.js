
/* ===============================================================
   1️⃣ VARIABLES + SCOPE + HOISTING
   =============================================================== */

// var → function scoped, hoisted (undefined)
//console.log(varVariable); // undefined
var varVariable = "I am var";

// let → block scoped, temporal dead zone
// console.log(letVariable); // ❌ ReferenceError
let letVariable = "I am let";

// const → block scoped, must be initialized
const constVariable = "I am const";

// const value cannot be reassigned
// constVariable = "change"; ❌

// Block scope
{
    let blockLet = "Block scoped";
    var blockVar = "Function scoped";
}
// console.log(blockLet); ❌
// console.log(blockVar); ✅


/* ===============================================================
   2️⃣ DATA TYPES
   =============================================================== */

let num = 10;                 // number
let str = "Hello";            // string
let bool = true;              // boolean
let undef;                    // undefined
let empty = null;             // null
let sym = Symbol("id");       // symbol
let big = 123n;               // bigint

let obj = { name: "Suyash" }; // object
let arr = [1, 2, 3];          // array

// console.log(typeof null); // "object" (JS bug)


/* ===============================================================
   3️⃣ TYPE COERCION
   =============================================================== */

// console.log("5" + 2); // "52"
// console.log("5" - 2); // 3
// console.log(true + 1); // 2


/* ===============================================================
   4️⃣ CONDITIONALS
   =============================================================== */

let age = 22;

// if-else
if (age >= 18) {
    // console.log("Adult");
} else {
    // console.log("Minor");
}

// ternary
let result = age >= 18 ? "Adult" : "Minor";

// switch
let day = new Date().getDay();
switch (day) {
    case 0: break;
    case 1: break;
    default: break;
}


/* ===============================================================
   5️⃣ LOOPS (ALL TYPES)
   =============================================================== */

// for
for (let i = 0; i < 3; i++) {
    // console.log(i);
}

// while
let count = 0;
while (count < 3) {
    count++;
}

// do-while
do {
    count--;
} while (count > 0);

// for...of (arrays)
for (let value of arr) {
    // console.log(value);
}

// for...in (objects)
for (let key in obj) {
    // console.log(key, obj[key]);
}


/* ===============================================================
   6️⃣ FUNCTIONS (ALL TYPES)
   =============================================================== */

// Normal
function add(a, b) {
    return a + b;
}

// Function expression
const subtract = function (a, b) {
    return a - b;
};

// Arrow
const multiply = (a, b) => a * b;

// Default parameters
function greet(name = "Guest") {
    return `Hello ${name}`;
}

// Rest parameters
function sumAll(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

// console.log(sumAll(1, 2, 3));


/* ===============================================================
   7️⃣ CALLBACKS & HIGHER ORDER FUNCTIONS
   =============================================================== */

function calculate(a, b, operation) {
    return operation(a, b);
}

// console.log(calculate(5, 3, add));


/* ===============================================================
   8️⃣ CLOSURES (VERY IMPORTANT)
   =============================================================== */

function outer() {
    let count = 0;

    return function inner() {
        count++;
        return count;
    };
}

const counter = outer();
// console.log(counter());
// console.log(counter());


/* ===============================================================
   9️⃣ OBJECTS IN DEPTH
   =============================================================== */

const person = {
    name: "Suyash",
    age: 22,
    greet() {
        return `Hi, I am ${this.name}`;
    }
};

//console.log(person.greet());

// Destructuring
const { name, age: userAge } = person;

// Spread
const updatedPerson = { ...person, city: "Delhi" };


/* ===============================================================
   🔟 ARRAYS IN DEPTH
   =============================================================== */

const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map(n => n * 2);

// filter
const evens = numbers.filter(n => n % 2 === 0);

// reduce
const total = numbers.reduce((sum, n) => sum + n, 0);


/* ===============================================================
   1️⃣1️⃣ SET & MAP
   =============================================================== */

const uniqueNumbers = new Set([1, 2, 2, 3]);

const mapData = new Map();
mapData.set("key", "value");


/* ===============================================================
   1️⃣2️⃣ REGEX
   =============================================================== */

const regex = /hello/i;
const text = "Hello World";

// console.log(regex.test(text));


/* ===============================================================
   1️⃣3️⃣ ERROR HANDLING
   =============================================================== */

try {
    JSON.parse("{ bad json }");
} catch (err) {
    // console.error(err.message);
} finally {
    // console.log("Always runs");
}


/* ===============================================================
   1️⃣4️⃣ ASYNCHRONOUS JAVASCRIPT
   =============================================================== */

// setTimeout
setTimeout(() => {
    // console.log("Timeout");
}, 1000);

// Promise
const promise = new Promise((resolve) => {
    resolve("Done");
});

// promise.then(console.log);

// async/await
async function asyncExample() {
    return "Async Result";
}


/* ===============================================================
   1️⃣5️⃣ EVENT LOOP (MICROTASK VS MACROTASK)
   =============================================================== */

// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("End");


/* ===============================================================
   1️⃣6️⃣ DOM EVENTS (REFERENCE)
   =============================================================== */
/*
document.getElementById("btn").addEventListener("click", () => {
    alert("Clicked");
});
*/

// Global context
// console.log(this); // window (browser), {} in Node

const user = {
    name: "Suyash",
    sayName() {
        //console.log(this.name); // refers to user
    }
};

user.sayName();

// Arrow function does NOT have its own this
const ob = {
    name: "JS",
    arrowFunc: () => {
        //console.log(this.name); // undefined
    }
};

function greet(city, country) {
    return `Hi, I am ${this.name} from ${city}, ${country}`;
}

const per= { name: "Suyash" };
// call → arguments one by one
 //console.log(greet.call(per, "Delhi", "India"));

// apply → arguments as array
 //console.log(greet.apply(per, ["Delhi", "India"]));

// bind → returns new function
const boundFunc = greet.bind(per, "Delhi", "India");
//console.log(boundFunc());


function People(name) {
    this.name = name;
}

// Adding method using prototype
People.prototype.sayHello = function () {
    return `Hello ${this.name}`;
};

const p1 = new People("Suyash");
 //console.log(p1.sayHello());

// Check prototype chain
// console.log(p1.__proto__ === People.prototype);


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a noise`;
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} barks`;
    }
}

const dog = new Dog("Buddy");
//console.log(dog.speak());



const original = {
    name: "JS",
    address: { city: "Delhi" }
};

// Shallow copy
const shallow = { ...original };
shallow.address.city = "Mumbai";

// console.log(original.address.city); // Mumbai ❗

// Deep copy
const deep = JSON.parse(JSON.stringify(original));
deep.address.city = "Pune";

//console.log(original.address.city); // Mumbai


const userData = {
    id: 1,
    profile: {
        username: "suyash",
        ag: 22
    }
};

const {
    profile: { username, ag }
} = userData;

// console.log(username, ag);

