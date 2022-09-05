//ARRAY OPERATIONS (METHODDS):

// JavaScript has some built in functions that we can basically apply directly on arrays. And these are called methods.

const friends = [`Michael`, `Steaven`, `Peter`];
console.log(friends);

//PUSH()

//the push() method adds elements to the end of an array.
const newLength = friends.push(`Jay`); //<-- Push() is essentially a function. So it's a function that we call and we call that function really attached to the friends array itself. And that's what this dot (.) here stands for.
console.log(friends);

//push() can also return is the length of the new array.

console.log(newLength);

/////////////////////////////////////////

//UNSHIFT():
//the unshift() method adds elements to the beginning of an array.

friends.unshift(`John`); //<-- unshift() method also returns the length of the new array.
console.log(friends);

/////////////////////////////////////////

//POP():

//pop() method which is basically the opposite of push() method.

//pop() method will remove the last element of the array

friends.pop(); //<--we don't need to pass in any argument
console.log(friends);
const poped = friends.pop(); //<-- pop() method also returns something, but this one doesn't return the length of the new array, but instead, it returns the removed element.
console.log(poped);
console.log(friends);

/////////////////////////////////////////

//shift() method will remove the first element of the array.

friends.shift()  //<-- it returns the removed element.

console.log(friends)

/////////////////////////////////////////

console.log(friends.indexOf(`Steaven`))  //<-- this should return the index the index at whic this element is located

console.log(friends.indexOf(`Bob`))  //<-- we will get minus one.

/////////////////////////////////////////

//includes():

//This one is an ES6 method and it's calleed includes. 
//So includes(), instead of returing the index of the element will simply return true if the element in the array and false if it's not.

friends.push(23)
console.log(friends.includes(`Steaven`))
console.log(friends.includes(`Bob`))
console.log(friends.includes(`23`))  //<-- that it does not do type coercion. //false
console.log(friends.includes(23)) //true

//And this method actually uses strict equality for this check.

/////////////////////////////////////////

//So we can use the include method to write conditionals.

if(friends.includes(`Steaven`)){ 
    console.log(`You have a friend called Steaven!`)
}

/////////////////////////////////////////