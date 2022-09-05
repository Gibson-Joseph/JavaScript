//Destructuring Objects:
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

const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

//But now what if we wanted the variable names to be different from the property names?

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], startersMenu: starters = [] } = restaurant;
console.log('-->', menu, starters);

///////////////////

//Mutating variable

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//Nested Obj:

const { fri } = openingHours;
console.log(fri);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(open, close);
console.log(o, c);

//////////////////////

restaurant.orderDelivery({
  time: '22:30',
  address: '1/131 middle street',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: '1/131 middle street',
});
