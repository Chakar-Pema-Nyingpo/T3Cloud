// const numbers = [12, 44, 9.8473, 30, -12, 57382, 1, 0.3422]
// function findLargestNumber(arr) {
//     let largestNumber = arr[0]; // Assume the first element is the largest

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largestNumber) {
//             largestNumber = arr[i];
//         }
//     }

//     return largestNumber;
// }

// const largestNumber = findLargestNumber(numbers);

// console.log("The largest number is: " + largestNumber);

// const numbers = [12, 44, 9.8473, 30, -12, 57382, 1, 0.3422];
// let largestNumber = numbers[0]; // Initialize largest to the first element of the array
// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] > largestNumber) {
//     largestNumber = numbers[i];
//   }
// }
// console.log("The largest number in the array is:", +largestNumber);

// const numbers = [12, 434, 54, 323453];
// let largestNumber = numbers[0];
// let smallestNumber = numbers[0];

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] < smallestNumber) {
//         smallestNumber = numbers[i];
//     }
//     if (numbers[i] > largestNumber) {
//         largestNumber = numbers[i];
//     }
// }

// console.log("The smallest number is " + smallestNumber);
// console.log("The largest number is " + largestNumber);

// const number = [40,11,12,15,9,10,50];
// let canDividBy5 = []

// for (var i =0; i< number.length; i++) {
//     if (number[i] % 5 === 0) {
//         canDividBy5.push(number[i])
        
//     }
// }
// console.log(canDividBy5)

// function addBinary(binA, binB) {

// }

// const a = [1, 0, 1, 1, 0, 1]
// const b = [0, 1, 1, 0, 0, 0]

// let addition = [];
// for (var i =0; i
// // addBinary(a, b) === [1, 0, 0, 0, 1, 0, 1]


function addBinary(binA, binB) {
    const result = [];
    let carry = 0;

    for (let i = binA.length - 1, j = binB.length - 1; i >= 0 || j >= 0 || carry > 0; i--, j--) {
        const bitA = i >= 0 ? binA[i] : 0;
        const bitB = j >= 0 ? binB[j] : 0;

        const sum = bitA + bitB + carry;
        result.unshift(sum % 2);
        carry = Math.floor(sum / 2);
    }

    return result;
}

const a = [1, 0, 1, 1, 0, 1];
const b = [0, 1, 1, 0, 0, 0];

const sum = addBinary(a, b);

console.log("Binary Sum:", sum);
