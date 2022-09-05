//DestructuringArrays:

const restaurant = {
  name: 'GIbson',
  location: 'Karisal patti,Tirunelveli, india',
  categories: ['vegetarian', 'non-Vegetarian', 'Italian'],
  startesMenu: ['Garlic Bread', 'Focaccia', 'Bruschetta'],
  mainMenu: ['Pizza', 'Paste', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    // [this.startesMenu[starterIndex], this.mainMenu[mainIndex]];
    return [this.startesMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//////////////////////

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching Variables:

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log('main', main, 'secondary', secondary);

[main, secondary] = [secondary, main];
console.log('main', main, 'secondary', secondary);

//Recive 2 return value from a function

console.log('Function -->', restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

//////////////////
//Nested destructuring :

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values:
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); //<-- r is undefined
