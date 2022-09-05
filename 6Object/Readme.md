# Primitives Vs Objects (Primitive Vs Reference Types)

## Primitives:

Primitive Types

Primitives are like numbers, Strings,
Boolean, Undefined, Null, Symbole, Bigint.

## Object:

Object is Reference Type

Object Literal
Arreys
function
ect...

```javascript
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);
```

Each primitive value will simply be saved into its own piece of memory in the stack.

///////////////////////////

```javascript
const me = {
  name: 'gibson',
  age: 20,
};

const friend = me;
friend.age = 27;
console.log('friend', friend);
console.log('Me ', me);
```

Now we get that both me and my friend have the age of 27.

Now ,when we aare talking about memory and memory management, it's usual to call primitives , primitives types and objects reference types because of the different way in which they are stored in memory.

reference value it is gonna be stored in heep, and then just keeps a refrence to the memory position at which the object is stored in heep.
