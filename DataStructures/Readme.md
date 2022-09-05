# Destructuring Arrays:

Destructuring is an ESX feature and it's basically a way of unpacking values from an array or an object into separate variables.

in other words destructuring is break a complex data structure down in to smaller data like a variable.

```javascript
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
```

So this here is destructuring this array here from the right side.
And of cource this looks like an array, but it's really not. It's just the destructuring assignment. so whenever JavaScript sees this here on the left side of the equal sign, it knowns that it should do destructuring.

```javascript
console.log(arr);
```

# Destructuring Object:

We use the curly braces {} to destructure.
so to destructure objects we use the curly braces. Because this is also how we create object.
Then all we have to do is to provide the variable names that exactly the property names that we want to retrieve from the object.
