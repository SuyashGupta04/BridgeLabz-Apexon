/* ===============================================================
   1️⃣ VARIABLES + SCOPE + HOISTING
   =============================================================== */

var varVariable = "I am var";
let letVariable = "I am let";
const constVariable = "I am const";

{
    let blockLet = "Block scoped";
    var blockVar = "Function scoped";
}

// console.log(varVariable);
// console.log(blockVar);
// console.log(blockLet); ❌ ReferenceError


/* ===============================================================
   2️⃣ DATA TYPES
   =============================================================== */

let num = 10;
let str = "Hello";
let bool = true;
let undef;
let empty = null;
let sym = Symbol("id");
let big = 123n;

let obj = { name: "Suyash" };
let arr = [1, 2, 3];

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof empty); // object (JS bug)


/* ===============================================================
   3️⃣ TYPE COERCION
   =============================================================== */

// console.log("5" + 2);   // "52"
// console.log("5" - 2);   // 3
// console.log(true + 1);  // 2


/* ===============================================================
   4️⃣ CONDITIONALS
   =============================================================== */

let age = 22;
let result = age >= 18 ? "Adult" : "Minor";

// console.log(result);


/* ===============================================================
   5️⃣ LOOPS
   =============================================================== */

for (let i = 0; i < 3; i++) {
    // console.log("for:", i);
}

let count = 0;
while (count < 2) {
    // console.log("while:", count);
    count++;
}

do {
    // console.log("do-while:", count);
    count--;
} while (count > 0);

for (let value of arr) {
    // console.log("for-of:", value);
}

for (let key in obj) {
    // console.log("for-in:", key, obj[key]);
}


/* ===============================================================
   6️⃣ FUNCTIONS
   =============================================================== */

function add(a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
};

const multiply = (a, b) => a * b;

// console.log(add(5, 3));
// console.log(subtract(5, 3));
// console.log(multiply(5, 3));


/* ===============================================================
   7️⃣ CALLBACKS & HIGHER ORDER FUNCTIONS
   =============================================================== */

function calculate(a, b, operation) {
    return operation(a, b);
}

// console.log(calculate(5, 3, add));


/* ===============================================================
   8️⃣ CLOSURES
   =============================================================== */

function outer() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counter = outer();

// console.log(counter());
// console.log(counter());


/* ===============================================================
   9️⃣ OBJECTS
   =============================================================== */

const person = {
    name: "Suyash",
    age: 22,
    greet() {
        return `Hi, I am ${this.name}`;
    }
};

// console.log(person.greet());

const { name, age: userAge } = person;
// console.log(name, userAge);

const updatedPerson = { ...person, city: "Delhi" };
// console.log(updatedPerson);


/* ===============================================================
   🔟 ARRAYS
   =============================================================== */

const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.map(n => n * 2));
// console.log(numbers.filter(n => n % 2 === 0));
// console.log(numbers.reduce((sum, n) => sum + n, 0));


/* ===============================================================
   1️⃣1️⃣ SET & MAP
   =============================================================== */

const uniqueNumbers = new Set([1, 2, 2, 3]);
// console.log(uniqueNumbers);

const mapData = new Map();
mapData.set("key", "value");

// console.log(mapData.get("key"));


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
    // console.log(err.message);
} finally {
    // console.log("Finally block executed");
}


/* ===============================================================
   1️⃣4️⃣ ASYNC JAVASCRIPT
   =============================================================== */

setTimeout(() => {
    // console.log("setTimeout executed");
}, 1000);

const promise = new Promise(resolve => resolve("Promise resolved"));

// promise.then(res => console.log(res));

async function asyncExample() {
    return "Async Result";
}

// asyncExample().then(res => console.log(res));


/* ===============================================================
   1️⃣5️⃣ EVENT LOOP
   =============================================================== */

// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("End");


/* ===============================================================
   1️⃣6️⃣ THIS, CALL, APPLY, BIND
   =============================================================== */

function greet(city, country) {
    return `Hi I am ${this.name} from ${city}, ${country}`;
}

const per = { name: "Suyash" };

// console.log(greet.call(per, "Delhi", "India"));
// console.log(greet.apply(per, ["Delhi", "India"]));

const boundFunc = greet.bind(per, "Delhi", "India");
// console.log(boundFunc());


/* ===============================================================
   1️⃣7️⃣ PROTOTYPE & CLASSES
   =============================================================== */

function People(name) {
    this.name = name;
}

People.prototype.sayHello = function () {
    return `Hello ${this.name}`;
};

const p1 = new People("Suyash");
// console.log(p1.sayHello());

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes noise`;
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} barks`;
    }
}

const dog = new Dog("Buddy");
// console.log(dog.speak());


/* ===============================================================
   1️⃣8️⃣ SHALLOW vs DEEP COPY
   =============================================================== */

const original = { name: "JS", address: { city: "Delhi" } };

const shallow = { ...original };
shallow.address.city = "Mumbai";

// console.log(original.address.city);

const deep = JSON.parse(JSON.stringify(original));
deep.address.city = "Pune";

// console.log(original.address.city);


/* ===============================================================
   1️⃣9️⃣ SYMBOL, GENERATOR, CURRY
   =============================================================== */

const sym1 = Symbol("id");
const userObj = { [sym1]: 123 };

// console.log(userObj[sym1]);

function* generatorFunc() {
    yield 1;
    yield 2;
}

const gen = generatorFunc();
// console.log(gen.next().value);

function curry(a) {
    return b => c => a + b + c;
}

// console.log(curry(1)(2)(3));


/* ===============================================================
   2️⃣0️⃣ DEBOUNCE & THROTTLE
   =============================================================== */

function throttle(fn, limit) {
    let inThrottle = false;
    return function () {
        if (!inThrottle) {
            fn();
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

const throttledFunc = throttle(() => {
    // console.log("Throttled");
}, 2000);

// throttledFunc();


function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

const search = debounce(text => {
    // console.log("Searching:", text);
}, 500);

// search("JavaScript");


/* ===============================================================
   2️⃣1️⃣ STRICT MODE
   =============================================================== */

"use strict";
x = 10; // ❌
//console.log(x);




/* ===============================================================
   2️⃣2️⃣ NULLISH COALESCING & OPTIONAL CHAINING
   =============================================================== */

//console.log(0 || 10);
//console.log(0 && 10);
//console.log(0 ?? 10);



/* ===============================================================
   2️⃣3️⃣ DOM MANIPULATION & EVENTS
   =============================================================== */

function addEventListenerToButton() {
    document.getElementById("actionBtn").addEventListener("click", function() {
        document.getElementById("demo").innerText = "Button Clicked!";
    });
}

//addEventListenerToButton();

/* ===============================================================
   END OF JAVASCRIPT BASICS
   =============================================================== */   