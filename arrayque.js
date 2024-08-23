//ARRAY QUESTIONS//


//1)
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
console.log(sumArray(array));

//  2)
function largestNum(a, b, c) {
    // Find the largest number using Math.max
    return Math.max(a, b, c);
}

// Example usage
const result = largestNum(2, 8, 5);
console.log(result); // Output: 8


// 3)
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

// 4)
    const numbers = [5, 3, 8, 1, 2, 7];

numbers.sort((a, b) => a - b);

console.log(numbers); 

//5)
function sortDescending(arr) {
    // Sort the array in descending order
    return arr.sort((a, b) => b - a);
}

// Example usage:
console.log(sortDescending(([5, 2, 9, 1, 5, 6])));

//6)
function reverseArray(arr) {
    return arr.reverse();
}

console.log(reverseArray([[1, 2, 3, 4, 5]])); 

//7)
function containsElementManual(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true; 
        }
    }
    return false; 
}

console.log(containsElementManual([1, 2, 3, 4, 5], 3));

//8)
function findIndexManual(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1; 
}

console.log(findIndexManual([1, 2, 3, 4, 5], 3)); 

//9)
function removeDuplicatesManual(arr) {
    const seen = {}; 
    const result = []; 
    
    for (const item of arr) {
        
        if (!seen[item]) {
            seen[item] = true; 
            result.push(item); 
        }
    }
    
    return result;
}

console.log(removeDuplicatesManual([1, 2, 2, 3, 4, 4, 5])); 
//10)
function intersectArraysManual(arr1, arr2) {
    const result = [];
    
    for (let i = 0; i < arr1.length; i++) {
       
        if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
            result.push(arr1[i]); 
        }
    }
    
    return result;
}

console.log(intersectArraysManual([1, 2, 3, 4], [3, 4, 5, 6])); 
//11)

function unionArraysManual(arr1, arr2) {
    const result = [];
    
    // Add elements from the first array
    for (const item of arr1) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    
    // Add elements from the second array
    for (const item of arr2) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    
    return result;
}

// Example usage:
console.log(unionArraysManual([1, 2, 3], [3, 4, 5])); // Output: [1, 2, 3, 4, 5]

//12)

//13)
function isSortedAscending(arr) {
    // Loop through the array to compare each element with the next one
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // If any element is greater than the next, the array is not sorted
        }
    }
    return true; // If no elements are out of order, the array is sorted
}

// Example usage:
console.log(isSortedAscending([1, 2, 3, 4, 5])); // Output: true

//14)
function differenceArraysManual(arr1, arr2) {
    const result = [];
    
    // Check each element in the first array
    for (const item of arr1) {
        // If the element is not in the second array, add it to the result
        if (!arr2.includes(item)) {
            result.push(item);
        }
    }
    
    return result;
}

// Example usage:
console.log(differenceArraysManual([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [1, 2]

//15)
function rotateArrayManual(arr, k) {
    const n = arr.length;
    if (n === 0) return arr; // Return early if the array is empty

    // Normalize k to be within the array bounds
    k = k % n;
    
    // Create a new array for the result
    const result = [];
    
    // Copy the last k elements to the beginning of the result
    for (let i = n - k; i < n; i++) {
        result.push(arr[i]);
    }
    
    // Copy the first n - k elements to the end of the result
    for (let i = 0; i < n - k; i++) {
        result.push(arr[i]);
    }
    
    return result;
}
console.log(rotateArrayManual([1, 2, 3, 4, 5], 2)); 

//16)
function maxDifference(arr) {
    if (arr.length < 2) {
        // Not enough elements to compute a difference
        throw new Error("Array must have at least two elements.");
    }
    
    let min = arr[0];
    let max = arr[0];
    
    // Traverse the array to find the minimum and maximum values
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    // Return the maximum difference
    return max - min;
}

// Example usage:
console.log(maxDifference([1, 5, 3, 9, 7])); 

//17)
function maxSumPair(arr) {
    if (arr.length < 2) {
        throw new Error("Array must have at least two elements.");
    }

    let first = -Infinity;  // Initialize the largest value
    let second = -Infinity; // Initialize the second largest value

    // Traverse the array to find the largest and second largest elements
    for (const num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    // Check if we have found at least two distinct elements
    if (second === -Infinity) {
        throw new Error("Array must have at least two distinct elements.");
    }

    return [second, first];
}

// Example usage:
console.log(maxSumPair([1, 2, 3, 4, 5])); // Output: [4, 5]

//18)
function findMaxSumPair(arr) {
    if (arr.length < 2) {
        throw new Error("Array must have at least two elements.");
    }

    let maxSum = -Infinity;
    let maxPair = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if (sum > maxSum) {
                maxSum = sum;
                maxPair = [arr[i], arr[j]];
            }
        }
    }

    return maxPair;
}

// Example usage:
console.log(findMaxSumPair([1, 2, 3, 4, 5])); 

//19)
function findMaxSumPair(arr) {
    if (arr.length < 2) {
        throw new Error("Array must have at least two elements.");
    }

    let maxSum = -Infinity;
    let maxPair = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if (sum > maxSum) {
                maxSum = sum;
                maxPair = [arr[i], arr[j]];
            }
        }
    }

    return maxPair;
}

// Example usage:
console.log(findMaxSumPair([1, 2, 3, 4, 5])); // Output: [4, 5]

//20)
function moveZerosToEnd(arr) {
    let nonZeroIndex = 0; // Pointer for the position of the next non-zero element

    // Traverse the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            // Swap the current non-zero element with the element at nonZeroIndex
            let temp = arr[i];
            arr[i] = arr[nonZeroIndex];
            arr[nonZeroIndex] = temp;
            
            // Move the nonZeroIndex forward
            nonZeroIndex++;
        }
    }
    
    return arr;
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
