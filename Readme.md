# Scoping:

how our program's variables are organized and accessed by the JavaScript engine. So basically scoping asks the question, where do variables live Or where can we access a certain variable and where not?

# scope:

space or environment in which certain variable is declare (variable environment in case of functions). there is a globel scope, function scope and block scope.

- scope is the place in our code where variables are declared.

---

## Types of Scope

1 lexical Scope  
2 Global Scope  
3 Function Scope  
4 Block Scope

## lexical scoping.

This scope allows variables declared inside functions to be accessible by nested functions of that same function or accessible by local functions of the global scope.

## globel scope

- Global scope is this is for variables that are declared outside of any function or block.

```
const name='Gibson',
const job='web developer'
const year=2000
```

- These variables will be accessible everywhere in our program, in all functions and all blocks.

## Function scope

Each and every function create a scope.

```
function age(){
  const now=2022;
  const birthYear=2000;
  return now - birthYear
}
console.log(now)  //reference error
```

- variables are accessible only inside function.Not outside.
- This is also called a local scope opposed to the global scope.
- function declarations, function expressions and arrow functions all create their own scope.

## Block Scope:

```
if (age >= 18) {
    const name:'Gibson'
}
    console.log(name)  //reference error.
```

- Now traditionally, only functions used to create scopes in JavaScript.
- But starting in ES6, blocks also creates scopes now.
- The big difference is that block scopes only apply to variables declared with let or const. because let and const variables are block scoped.
- If a variable declared with var, block scopes don't apply at all. They are function scoped, not block scope. Let and const on the other hand are in fact blocks scoped.

---

<!-- ------------------------------------- -->

# Hoisting in JavaScript:

Makes some types of variables accessible or usable in the code before they are actually declared. **"variables lifted to the top of there scope"**.

## Behind Scene:

Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the **"variable environment object"**.

- hoisting does not work the same for all variable types.

## Function declaration Hoisting:

- function declarations are actually hoisted and the initial value in the variable environment is set to the actual function.

```javascript
//function Declaration

console.log(ageDeclaration(2022, 2000));

function ageDeclaration(currentYear, BirthYear) {
  return currentYear - BirthYear;
}
```

## var hoisting:

variables declared with var are also hoisted, but hoisting works in a different way here. So unlike functions, when we try to access a var variable before it's declared in a code, we don't get the declared value but we get **undefined**.

```javascript
console.log(name); //undefined
var name = 'JavaScript';
```

so this is one of the main reasons why in modern JavaScript we almost never use var.

## Let and Const variables hoisting:

let and const variables are not hoisted.

if we attempt to use a let or const variable before it's declared, we get an error. because let and const are **block scoped**.

```javascript
console.log(name); //Cannot access 'name' before initialization
console.log(age);

let name = 'JavaScript';
const age = 21;
```

## function expressions and arrows hoisting:

It depends if they were created using var or const or let. Because that these **functions are variables**.

so they behave the exact same way as variables in regard to hoisting

that a function expression or arrow function created with var is hoisted to undefined.

If created with let or const, it's not usable before it's declared in a code.

```javascript
//Function expression:

console.log(ageExpression(2022, 2000));
console.log(ageArrows(2022, 2000));

const ageExpression = function (currentYear, BirthYear) {
  return currentYear - BirthYear;
}; //Cannot access 'ageExpression' before initialization

//Arrow function:

const ageArrows = (currentYear, BirthYear) => {
  return currentYear - BirthYear;
};
```

---

<!-- --------------------------------------------- -->

# This KeyWord:

- this keyword/variable: Special variable that is created for every execution context (every function). Takes the value of (points to) the “owner” of the function in which the this keyword is used.

- this is NOT static. It depends on how the function is called, and its value is only assigned when the
  function is actually called.

## method this:

## four different ways:

### Method this:

So when we call a method, the this keyword inside that method will simply point to the object on which the method is called, or in other words, it points to the object that is calling the method.

```javascript
const gibson = {
  name: 'gibson',
  year: 2000,
  calcAge: function () {
    console.log(2037 - this.year);
  },
};
gibson.calcAge(); //37

const joseph = {
  year: 2020,
};
joseph.calcAge = gibson.calcAge; //borrowing

console.log(joseph.calcAge);

joseph.calcAge(); //17
```

### simple function Call:

- So not as a method and so not attached to any object. In this case, the this keyword, will simply be undefined.

```JavaScript
'use strict';

const age = function (birthYear) {
  console.log(2037 - birthYear); //46
  console.log(this); //undefined
};
age(1991);

```

- However, that is only valid for strict mode.
- So if you're not in strict mode, this will actually point to the global object,
  which in case of the browser is the window object.

### Arrow Function:

- arrow functions do not get their own 'this keyword'.
- Instead, if you use 'the this variable' in an arrow function, it will simply be the this keyword of the surrounding function.
- this is called the 'lexical this keyword,' because it simply gets picked up from the outer lexical scope of the arrow function. So never ever forget this very important property of arrow functions.

```javascript
const age1 = () => {
  console.log(this); //Parent Scope.
};
age1();
```

### event listener:

- if a function is called as an event listener, then the this keyword will always point to the DOM element that the handler function is attached to.

---

- 'this' will never point to the function in which we are using it.
- the "this" keyword will never point to the variable environment of the function.

---

<!-- -------------------------------------------------- -->
