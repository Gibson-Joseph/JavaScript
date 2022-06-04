// The Conditional (TERNARY) Operator:

// the conditional operator allows us to write something similar to an if/else statement but all in one line.

const age = 19;
age >= 18
  ? console.log(`I Like to drink Wine`)
  : console.log(`I Like to drink Water`);
// After the condition, we use a question mark. And then here we write essentially or if block.

//That is essentilly writting an if/else statement all in one line. But instead of using a statement, we use this conditional operator. And the conditional operator is also called the Ternary Operator.

//this Operator has three parts, (1)the condition, (2) the if part, (3) and then the else part.

//The operator always produces a value.So in other words an operator is an expression.

//ternary operator really useful to basically conditionally declare variables.
const drink = age >= 18 ? `Wine` : `Water`;
//This whole operator here is now an expression. And an expression produce a value.
console.log(drink);

//When we want to declare a variable  



