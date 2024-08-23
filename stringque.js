// STRING QUESTIONS
//1)
function reverseString(str){
    let reversed='hello';
    for(let i=str.length-1; i>= 0; i--){
        reversed += str[i];
    }
console.log(reversed);
}
reverseString('hello')

//2)
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

//3)
function countvowel(b){
    let count=0;
    for(i=0;i<=b.length;i++){
        if(b[i] =="a" || b[i] =="e" || b[i] =="i" || b[i] =="o" || b[i] =="u")
            count++;
        }
    }
    console.log("hello")

// 4)

//5)
function numberOfWords(str) {
    let count = 0;
    let check = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ' && !check) {
            count++;
            check = true;
        } else if (str[i] === ' ') {
            check = false;
        }
    }

    return count;
}

const str = "Welcome to the Geeksforgeeks";
console.log("Word count:", numberOfWords(str));
https://www.geeksforgeeks.org/javascript-program-to-count-words-of-a-string/
//6)
//7)
function replaceSpaces(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result += '-';
        } else {
            result += str[i];
        }
    }
    return result;
}
console.log(replaceSpaces("Hello World"));  
//8)
function toTitleCaseMethod3(str) {
    let result = '';
    let capitalize = true;               // Flag to determine when to capitalize

    for (const char of str) {
        if (char === ' ') {
            result += char;              // Keep spaces as they are
            capitalize = true;           // Set flag to capitalize next character
        } else if (capitalize) {
            result += char.toUpperCase(); // Capitalize the current character
            capitalize = false;          // Reset flag
        } else {
            result += char.toLowerCase(); // Append lowercase character
        }
    }
    return result;
}

// Example usage:
console.log(toTitleCaseMethod3("this is a test string"));  // Output: "This Is A Test String"
// chatgpt
//9)
function isNumeric(str) {
    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the character is not a digit
        if (str.charAt(i) < '0' || str.charAt(i) > '9') {
            return false;  // Return false if any character is not a digit
        }
    }
    return true;  // Return true if all characters are digits
}

// Example usage:
console.log(isNumeric("123456"));  // Output: true
console.log(isNumeric("123a56"));  // Output: false
console.log(isNumeric(""));        // Output: true (an empty string contains no non-digit characters)

//10)
function removeDuplicates(str) {
    let seen = {};         // Object to keep track of seen characters
    let result = '';       // String to build the result with unique characters

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);  // Get the current character

        if (!seen[char]) {        // Check if the character has not been seen before
            seen[char] = true;    // Mark the character as seen
            result += char;       // Append the character to the result string
        }
    }

    return result;  // Return the final string with duplicates removed
}
// Example usage:
console.log(removeDuplicates("aabbcc"));    // Output: "abc"
console.log(removeDuplicates("hello"));     // Output: "helo"
console.log(removeDuplicates("abcde"));     // Output: "abcde" (no duplicates)


//11)
function findLongestWord(str) {
    // Split the string into an array of words
    const words = str.split(' ');

    let longestWord = '';  // Variable to store the longest word

    // Iterate through each word in the array
    for (let i = 0; i < words.length; i++) {
        let word = words[i];  // Get the current word

        // Check if the current word is longer than the longest word found so far
        if (word.length > longestWord.length) {
            longestWord = word;  // Update the longest word
        }
    }

    return longestWord;  // Return the longest word found
}

// Example usage:
console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));  // Output: "jumps"
console.log(findLongestWord("A short test"));                                  // Output: "short"
console.log(findLongestWord(""));                                              // Output: "" (empty string)

//12)
function capitalizeFirstLetterOfEachWord(str) {
    let result = '';          // String to build the final result
    let capitalize = true;   // Flag to determine when to capitalize

    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);  // Get the current character

        if (char === ' ') {
            result += char;      // Append the space to the result
            capitalize = true;   // Set the flag to capitalize the next character
        } else if (capitalize) {
            result += char.toUpperCase(); // Capitalize the current character
            capitalize = false;  // Reset the flag after capitalizing
        } else {
            result += char.toLowerCase(); // Append the character in lowercase
        }
    }

    return result;  // Return the final string with capitalized words
}

// Example usage:
console.log(capitalizeFirstLetterOfEachWord("the quick brown fox"));  // Output: "The Quick Brown Fox"
console.log(capitalizeFirstLetterOfEachWord("hello world"));          // Output: "Hello World"
console.log(capitalizeFirstLetterOfEachWord("a quick brown fox"));   // Output: "A Quick Brown Fox"

//13)
function repeatString(str, n) {
    let result = '';  // Initialize an empty string to build the repeated result

    // Loop to concatenate the string `n` times
    for (let i = 0; i < n; i++) {
        result += str;  // Append the string to the result
    }

    return result;  // Return the final repeated string
}

// Example usage:
console.log(repeatString("hello", 3));  // Output: "helloh

 //14)
// 15)
// 16)
function truncateString(str, length) {
    // Check if the string needs truncation
    if (str.length > length) {
        // Truncate the string to the specified length and add "..."
        return str.slice(0, length) + '...';
    } else {
        // Return the original string if it doesn't need truncation
        return str;
    }
}
// 17)
//18)
//19)
//20)