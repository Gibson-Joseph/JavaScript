//LOOPING BACKWARDS AND LOOPS IN LOOPS

const gibson = [
  "Gibson",
  "Joseph",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
  true,
];
console.log(gibson);

//Looping Backwards:
console.log("-----Looping Backwards-----");
for (i = gibson.length - 1; i >= 0; i--) {
  console.log(i, gibson[i]);
}

////////////////////////////////////////////

//LOOPS IN LOOPS:
console.log(`-----LOOPS IN LOOPS-----`);

for (let exercice = 1; exercice < 4; exercice++) {
  console.log(`----Startin Exercise ${exercice}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercice} Lifting weight repetition ${rep}`);
  }
}

////////////////////////////////////////////
