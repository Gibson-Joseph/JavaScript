//THE WHILE LOOP:
"use strict";

console.log("----for loop----");
for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weight repetion ${rep}`);
}

////////////////////////////////////////////

console.log("----While loop----");
let rep = 1;
while (rep <= 5) {
  console.log(`WHILE: Lifiting weights repetition ${rep}`);
  rep++;
}

//The While loop is more versatile then the for loop, Which means that it can be used in a larger variety of situationas.

let diece = Math.trunc(Math.random() * 6) + 1;

// console.log(diece);

while (diece !== 6) {
  console.log(`you rolled a ${diece}`);
  diece = Math.trunc(Math.random() * 6) + 1;

  if (diece === 6) console.log("Loop is about to end...");
}

//The while loop does really not have to depend on any counter variable.

// console.log(diece);

