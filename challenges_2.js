/*
Write a function that takes a string and a character as argument and returns the number 
of times the character occurs in the string
/* 
Test 1: 
  Input: findFreq('How many times does the character occur in this sentence?','m') 
  Output: 2 
 
Test 2: 
  Input: findFreq('How many times does the character occur in this sentence?','h') 
  Output: 4 
*/
console.log("****Challenge2****");
console.log("****problem1****");

function findFreq(str, char) {
    str = str.toLowerCase();
    // TODO write code here
    let count = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] == char) {
            count = count + 1
        }

    }
    return count;
}
console.log(findFreq("sSowjanyaoooO", 's'));

console.log("****problem2****");
/*Write a function that takes an array as argument. It should return true if all elements in 
the array are equal and false otherwise
/* 
Test 1: 
  Input: areAllEqual(['test', 'test', 'test']) 
  Output: true 
 
Test 2: 
  Input: areAllEqual([1,1,1,2]) 
  Output: false */
function areAllEqual(arr) {
    // TODO write code here 
    let count = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i++]) {
            count = count + 1


        }

    }
    if (count === arr.length - 1) {
        return true
    } else {
        return false
    }
}
console.log(areAllEqual([1, 1, 1, 2]));
console.log("****problem3****");

function subArray(arr, n) {
    // TODO write code here
    return arr.slice(-n)
}
console.log(subArray([1, 2, 3, 4, 5], 6));

/* 
Test 1: 
  Input: subArray([1, 2, 3, 4, 5], 2) 
  Output: [ 4, 5 ] 
 
Test 2: 
  Input: subArray([1, 2, 3], 6) 
  Output: [ 1, 2, 3 ] */