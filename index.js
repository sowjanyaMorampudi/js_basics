// TODO destructure the array so that 2 variables apple and peach hold values at indexes 0 and 2 in the array
console.log("****problem1****")
const numbersArray = ['apple', 'orange', 'peach'];
const [apple, orange, peach] = numbersArray;
console.log(apple);
console.log(peach);
console.log("*******");

// TODO destructure the object to extract name and age of the person

const person = {
    name: 'abcde',
    age: 10,
    gender: 'm'
};
const { name, age } = person;
console.log(name);
console.log(age);

console.log("****problem2****");

// TODO combine below arrays into one array array3 
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array3);
// array3 should be [1,2,3,4,5,6] 


// TODO combine below objects into one personDetails object 
const basicDetails = {
    name: 'abcde',
    age: 10,
    gender: 'm'
};

const educationDetails = {
    degree: 'xyz',
    college: 'anc',
}
const personDetails = {...basicDetails, ...educationDetails }
console.log(personDetails);

console.log("****problem3****");
/* Test 1:  
    Input: numArray = [1,5,7,9] 
    Output: 9 
*/
//javascript function using arrays to find the largest number
numArray = [1, 5, 7, 9]

function largestNumber(numArray) {
    largest = numArray[0];
    for (let i = 0; i <= numArray.length; i++) {
        if (largest < numArray[i]) {
            largest = numArray[i]
        }

    }
    return largest;
}
const max = largestNumber(numArray);
console.log(max);

//javascript function to return updated salaries of employees by given percentage
console.log("****problem4****");
//const employeesArray = [100, 500, 700, 400]
//const percent = 10

function updateSalaries(employeesArray, percent) {

    // TODO complete this
    let result = []
    for (let i = 0; i < employeesArray.length; i++) {
        let temp = employeesArray[i] * (percent / 100) + employeesArray[i]
        result.push(temp)
    }
    return result;

}
console.log(updateSalaries([100, 200, 300, 400], 10));
/* Test 1:  
    Input: employeesArray = [100,500,700,400], percent = 10 
    Output: [110, 550, 770, 440]
    */
/*using map
function updateSalaries(employeesArray, percent) {
    let result = employeesArray.map((item) => {
        return item + item * percent / 100


    });
    return result;
}
console.log(updateSalaries([100, 200, 300, 400], 10));
*/




/*
//using foreach
function updateSalaries(employeesArray,percent){
var newArray = []
employeesArray.forEach((item) => {
    result = item + item * percent / 100


    newArray.push(result)
})
return newArray;
}
console.log(newArray);
*/