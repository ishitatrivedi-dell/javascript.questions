// pop and push:
//  pop() removes the last element of an Array.
//  The pop() method returns the value that was "popped out":

// The push() method adds a new element to an array (at the end):
// The push() method returns the new array length:
// shift will work at the end

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);


// Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.

// The splice() method adds new items to an array.

// The slice() method slices out a piece of an array.
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.splice(2, 0, "Lemon", "Kiwi");
// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:

