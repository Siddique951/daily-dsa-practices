
// function secondLargestNumber(arr) {
//     let largest = -Infinity;
//     let secondLargest = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             secondLargest = largest
//             largest = arr[i];
//         }
//         else if (arr[i] > secondLargest && arr[i] != largest) {
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest;

// }

// let arr = [3, 6, 2, 56, 89, 7, 5, 89, 32];
// let result = secondLargestNumber(arr);
// console.log(result)




function secondLargestNumber(arr) {
    if(arr.length < 2) {
        return null; // Not enough elements to find the second largest
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;

}

let arr = [3, 6, 2, 56, 89, 7, 5, 89, 32];
let result = secondLargestNumber(arr);
console.log(result)