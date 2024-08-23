// beginner friendly questions
// 1)
console.log("hello world");
// no help

// 2)
function sum(a,b){
    sum(3+5);
}
console.log(3+5);

//no help

// 3)
function largestNum(a,b,c){
    findlargest(2,8,5); // it will print 2,8,5 not the largest 
}
console.log(2,8,5)
// the above code is not correct

//javascript
function largestNum(a, b, c) {
    // Find the largest number using Math.max
    return Math.max(a, b, c);
}

// Example usage
const result = largestNum(2, 8, 5);
console.log(result); // Output: 8

// with th help of chatgpt to get idea about the error in the code

// 4)
let numb=4;
if (numb%2 ==0){
    console.log("numb is even")
}else{
    console.log("numb is odd");
}
// no help

// 5)
let i=5;
for(;i>0;i--){

}
// m-2 //
function factorial(x) {
    let result = x; // Initialize result with x
    do {
        x--; // Decrement x first
        if (x > 1) { // Multiply only if x > 1
            result *= x;
        }
    } while (x > 1); // Continue while x is greater than 1

    return result; // Return the calculated factorial
}

console.log(factorial(5)); // Output: 120
// help of chatgpt

// 6)
function reverseString(str){
    let reversed='hello';
    for(let i=str.length-1; i>= 0; i--){
        reversed += str[i];
    }
console.log(reversed);
}
reverseString('hello') // this step needs to be done after declaration of function

// mistake was, function was not called after the decalaration, help of sir and chatgpt.

// 7)
function checkString(str){
    let palindrone="";

    for (let i=str.length-1; i>0 ; i++) { // i>=0 , i--
        palindrone +=str[i]   
    }
    if(str.length-1 == str){             // if (str === palindrone)
        console.log('true');
    } 
    else {
        console.log("false")
    }
}
checkString(madam);   // checkstring('madam');
// few issues with the code 

// new code
function checkString(str) {
    let palindrome = '';
    
    // Reverse the string
    for (let i = str.length - 1; i >= 0; i--) {
        palindrome += str[i];
    }
    
    // Check if the reversed string is equal to the original string
    if (str === palindrome) {
        console.log('true');
    } else {
        console.log('false');
    }
}

// Example usage
checkString('madam'); // Output: true
// with the help of chatgpt to correct the code

// 8)
function smallestNumb=[array];{
    if (arraylength === 0){
        console.log("array is empty")
    }
    let min = array[0];
    for(let i=1; i<= array.length; i++){
        if(array[1]< min ){
            min = array[i];
        }
    }
    return min;
    }
    cconsole.log(smallestNumb([3, 1, 4, 1, 5]));
// chatgpt

// 9) 
function array=[arr];{function bubbleSort(arr) { 
    for (let i = 0; i < arr.length; i++) { 
      for (let j = 0; j < arr.length - i - 1; j++) { 
        if (arr[j] > arr[j + 1]) { 
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
        } 
      } 
    } 
    return arr; 
  } 
}

// 10)

//11)
function array =[a,b,c,d,e]{
    sumarray=[a+b+c+d+e];
}console.log(sumarray) // this is mot the correct way

// new code
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Example usage
const array = [1, 2, 3, 4, 5];
console.log(sumArray(array)); // Output: 15
// chatgpt only for the correct way to write the code

//12)
function fbn(n){
    let number1 = 0;
    let number2 = 1
     for(i=0; i<n ; i++){
    let nextnumber = number1 + number2;
    number1 = number2;
    number2 = nextnumber;
   
    }
}
fbn(5);
// new code
function fbn(n) {
    let number1 = 0;
    let number2 = 1;
    
    for (let i = 0; i < n; i++) {
        let fbno = number1;
        console.log(fbno);
        let nextNumber = number1 + number2;
        number1 = number2;
        number2 = nextNumber;
    }
}
// chatgpt for confirmation

// 13)
function checkPrime(num){
    let res = true;
    if(num<=1){
        res = false;
    }

    for(let i=2; i*i<=num; i++){
        if(num%i===0){
            res = false;
            break;
        }
    }
    if(res){
        console.log(num, " is a prime number.");
    }
    else{
        console.log(num, " is not a prime number.");
    }
}
checkPrime(7);
// https://www.geeksforgeeks.org/check-a-number-is-prime-or-not-using-javascript/

// 14)
function countvowel(b){
    let count=0;
    for(i=0;i<=b.length;i++){
        if(b[i] =="a" || b[i] =="e" || b[i] =="i" || b[i] =="o" || b[i] =="u")
            count++;
        }
    }
    console.log("hello")
// 15)
const array[1,2,3,4,5];
    let index=index.of(3);
console.log(index);

 // 16)
 let array=[1, 2, 2, 3, 4, 4, 5];
 let obj=[];
 for(i=0; i<=array.length; i++){
    if(obj[array[i]]){
        obj[array[i]]=arr[i];
    }
 } console.log(obj);
 //https://youtu.be/ufASxVaIST0

 // 17)

 //18)

 //19)
 function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript

//20)

//21)
function generateRandom(min = 0, max = 100) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

console.log(generateRandom());
https://www.educative.io/answers/how-to-generate-a-random-number-between-a-range-in-javascript
//22)
//23)
function celToFahren(tem) {
    let fahrenheit = tem * 9 / 5 + 32;
    console.log(tem + " Celsius = " + fahrenheit + " Fahrenheit");
}

celToFahren(37);

//24)
function removeElement(arr, element) {
    return arr.filter(item => item !== element);
}

// Example usage:
const myArray = [1, 2, 3, 4, 2, 5, 2];
const newArray = removeElement(myArray, 2);
console.log(newArray); // Output: [1, 3, 4, 5]
// chatgpt