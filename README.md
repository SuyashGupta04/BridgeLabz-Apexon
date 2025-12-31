# BridgeLabz-Apexon

1️⃣ VARIABLES, SCOPE & HOISTING
var, let, const
var

Function-scoped

Hoisted (moved to top with value undefined)

Can be re-declared

var a = 10;
var a = 20; // allowed


Behind the scenes:

var a;      // hoisted
a = 10;
a = 20;


⚠️ This causes bugs → avoid var

let

Block-scoped

Hoisted but in Temporal Dead Zone (TDZ)

Cannot be re-declared in same scope

let b = 10;


Before initialization:

// b exists but cannot be accessed (TDZ)

const

Same as let but cannot be reassigned

For objects/arrays → reference is fixed, content can change

const obj = { a: 1 };
obj.a = 2; // allowed

Block Scope
{
  let x = 1;
  var y = 2;
}


x → only inside { }

y → leaks outside

This happens because:

let → block scope

var → function scope

2️⃣ DATA TYPES
Primitive (Stored in STACK)

number

string

boolean

undefined

null

symbol

bigint

let a = 10;
let b = a;
b = 20;


👉 a stays 10 (copy of value)

Non-Primitive (Stored in HEAP)

object

array

function

let obj1 = { x: 1 };
let obj2 = obj1;
obj2.x = 2;


👉 obj1.x becomes 2 (same reference)

Why typeof null === "object"?

Historical bug in JS. Kept for backward compatibility.

3️⃣ TYPE COERCION (IMPLICIT CONVERSION)

JS tries to auto-convert types.

"5" + 2  // "52" (string wins)
"5" - 2  // 3   (numeric operation)
true + 1 // 2


Why?

+ → string concatenation if any operand is string

Other operators → numeric conversion

This is why:

==  // loose equality (avoid)
=== // strict equality (recommended)

4️⃣ CONDITIONALS
if–else

Runs based on truthy / falsy values.

Falsy values:

false, 0, "", null, undefined, NaN

Ternary Operator

Short form of if–else.

condition ? valueIfTrue : valueIfFalse


Used heavily in React JSX.

5️⃣ LOOPS
for

Best when iterations are known.

while

Runs while condition is true.

do...while

Runs at least once, condition checked later.

for...of

Iterates values

Works on arrays, strings, sets

for (let val of arr) {}

for...in

Iterates keys

Used for objects

for (let key in obj) {}


⚠️ Don’t use for...in on arrays (order issues).

6️⃣ FUNCTIONS
Function Declaration

Hoisted fully.

function add(a, b) {}

Function Expression

Stored in variable, not hoisted.

const sub = function () {}

Arrow Function

Short syntax

No this

No arguments

const mul = (a, b) => a * b;


Used heavily in callbacks & React.

Default Parameters
function greet(name = "Guest") {}


If argument is undefined, default is used.

Rest Parameters
function sum(...nums) {}


Collects remaining arguments into array.

7️⃣ CALLBACKS & HIGHER-ORDER FUNCTIONS
Callback

Function passed as argument.

calculate(5, 3, add)


Why?

JS is single-threaded

Callbacks allow async behavior

Higher-Order Function

A function that:

Takes function as argument OR

Returns a function

Used in:

map

filter

reduce

promises

8️⃣ CLOSURES (VERY IMPORTANT 🔥)
function outer() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}


Why does this work?

Behind the scenes:

Inner function remembers variables of outer function

Even after outer function finishes execution

This is called Lexical Scope

Used in:

Data hiding

Counters

React hooks

Memoization

9️⃣ OBJECTS & this
this

Refers to object that calls the function

person.greet()


→ this = person

Arrow Function & this

Arrow functions do NOT have their own this
They take this from parent scope.

That’s why:

arrowFunc: () => this.name // undefined

Destructuring

Extract values easily.

const { name, age } = person;

Spread Operator

Creates shallow copy.

{ ...person }

🔟 ARRAYS (Functional Style)
map

Transforms array → new array.

filter

Selects elements based on condition.

reduce

Reduces array to single value.

Why important?

Clean

Immutable

Used heavily in React

1️⃣1️⃣ SET & MAP
Set

Stores unique values

No duplicates

new Set([1,1,2])

Map

Key-value pairs

Keys can be anything

Better than object for dictionaries.

1️⃣2️⃣ REGEX

Used for:

Validation

Search

Replace

/hello/i


i → case-insensitive

1️⃣3️⃣ ERROR HANDLING
try { }
catch { }
finally { }


Prevents app crash

Handles runtime errors

finally always runs

1️⃣4️⃣ ASYNCHRONOUS JAVASCRIPT
setTimeout

Placed in macrotask queue

Promise

Represents future value.

States:

pending

fulfilled

rejected

async/await

Syntactic sugar over promises.

await promise


Makes async code look synchronous.

1️⃣5️⃣ EVENT LOOP (CRITICAL 🔥)

Execution order:

Call Stack

Microtask Queue (Promises)

Macrotask Queue (setTimeout)

That’s why:

Promise → before setTimeout

1️⃣6️⃣ CALL, APPLY, BIND

Used to manually control this

call → args separated

apply → args array

bind → returns new function

Used in:

Borrowing methods

React class components

1️⃣7️⃣ PROTOTYPE & CLASSES
Prototype

Every JS object has hidden [[Prototype]]

Methods are shared → memory efficient.

Classes

Just syntax sugar over prototype.

class Dog extends Animal {}


Uses prototype chain internally.

1️⃣8️⃣ SHALLOW vs DEEP COPY
Shallow

Copies reference.

Deep

Copies actual values.

Why it matters?

State mutation bugs

React state issues

1️⃣9️⃣ SYMBOL, GENERATOR, CURRY
Symbol

Unique property keys (no collision).

Generator

Pauses execution using yield.

Used in:

Iterators

Lazy evaluation

Currying

Transforms function:

f(a,b,c) → f(a)(b)(c)


Used in:

Functional programming

Reusability

2️⃣0️⃣ DEBOUNCE & THROTTLE
Debounce

Runs after delay
Used in:

Search input

API calls

Throttle

Runs once per time interval
Used in:

Scroll

Resize

Button spam prevention