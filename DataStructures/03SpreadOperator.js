//Spread Operator:

const restaurant = {
  name: 'GIbson',
  location: 'Karisal patti,Tirunelveli, india',
  categories: ['vegetarian', 'non-Vegetarian', 'Italian'],
  startersMenu: ['Garlic Bread', 'Focaccia', 'Bruschetta'],
  mainMenu: ['Pizza', 'Paste', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.startersMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '20:00',
  }) {
    console.log(
      `order Recevied ${this.startersMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delevered to ${address} at ${time}`
    );
  },
};

//spread operator expand an array intio all its element.
//So basically unpacking all the array element at one.

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

console.log(badNewArr);

//now, since ES6, do it in a much better way using the spread operator.
//so with the spread operator, it's gonna work like this.

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

//so what the spread operator does is to basically take all the values out of this arr array.

const newMenu = [...restaurant.mainMenu, 'Biriyani'];
console.log('new Menu -->', newMenu);

/////////////////
//copy array:
const mainMenu = [...restaurant.mainMenu];
console.log(mainMenu);
console.log('--------------------');
//join two or more arrays:
const menu = [...mainMenu, ...restaurant.startersMenu];
console.log('menu --->', menu);
