//1)
const person = {
    name:"john",
    age:35,
    city :"New York"

};
console.log(person)

//2)
const person = {
    name:"john",
    age:35,
    city :"New York"

};
console.log(person.name)

//3)
const car = 
{ brand: 'Toyota', model: 'Corolla' };
Object.defineProperty(car, "year", {value:"2020"});
console.log(car);

//4)
const user = 
{ 
    username: 'john_doe', password: '12345' 

};
     console.log(delete user.password);

//5)
const user = { 
    username: 'ailce', 
    age: '30' 
};

console.log('age' in user);  // true
console.log('email' in user);     // false

//6)
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged);

//7)

//8)
//9)
const obj = { name: 'Alice', age: 30, city: 'New York' };

const propertyCount = Object.keys(obj).length;

console.log(propertyCount); 
// just have to remember the key words for the specific task

//10) 
const obj = { name: 'Alice', age: 30, city: 'New York' };

const keysArray = Obj.keys(obj);

console.log(keysArray); 

//11)
const obj = { name: 'Alice', age: 30, city: 'New York' };

const keysvalues = Obj.values(obj);

console.log(values); 