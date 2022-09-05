//Switch Statement:

//which is an alternative way of awriting a complicated if/else statement,when all we want to do is to compare one value to multiple different options,basically.

//Switch statement is actually does a strict comparison(===)

const day = `sunday`;

switch (day) {
  case `monday`: //day === `mondey` it is strict euality way.
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case `tuesday`:
    console.log(`Preper theory videos`);
    break;
  case `wednesday`:
  case `thursday`:
    console.log(`Write code examples`);
    break;
  case `friday`:
    console.log(`Record videos`);
    break;
  case `saturday`:
  case `sunday`:
    console.log(`Enjoy the weekend :)`);
    break;
  default:
    console.log(`Not a valid day!`);
}

// Without the break, the code simply continues executing.

/////////////////////////////////////////

//Coding Challing :

//Same logic in if else statement:

// const day = `monday`;

// if (day === `monday`) {
//   console.log(`Plan course structure`);
//   console.log(`Go to coding meetup`);
// } else if (day === `tuesday`) {
//   console.log(`Preper theory videos`);
// } else if (day === `wednesday` || day === `thursday`) {
//   console.log(`Write code examples`);
// } else if (day === `friday`) {
//   console.log(`Record videos`);
// } else if (day === `saturday` || day === `sunday`) {
//   console.log(`Enjoy the weekend :)`);
// } else {
//   console.log(`Not a valid day!`);
// }

/////////////////////////////////////////
