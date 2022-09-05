//FUNCTION CALLING OTHER FUNCTION:

function cutFruitPieces(fruit) {
  //<-- other function
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  //<-- one Function
  const applePieces = cutFruitPieces(apples); //<-- function Calling other function
  const orangePieces = cutFruitPieces(oranges); //<-- function Calling other function

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of ornge `;
  return juice;
}

console.log(fruitProcessor(2, 3));

/////////////////////////////////////////
