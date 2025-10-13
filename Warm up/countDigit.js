
// // While Loop
// function countDigit(n) {             
// let count = 0;                                 

//     while (n > 0) {
//         n = Math.floor(n / 10);
//         count++;
//     }
//     return count;
// }

// let n = 2589765;
// let result = countDigit(n);
// console.log(result);

// ----------------------------------------------------------------------------------

// function countDigit(n) {          
//     if(n==0) return 1;   //yh tb hoga jb n = 0 hoga  (corner cases) when interviewr ask the question 
// let count = 0;                                 

//     while (n > 0) {
//         n = Math.floor(n / 10);
//         count++;
//     }
//     return count;
// }

// let n = 0;
// let result = countDigit(n);
// console.log(result);

// ----------------------------------------------------------------

// one more corner case

function countDigit(n) {             
let count = 0;     

n = Math.abs(n); // converting negative number to positive 

    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

let n = -297;
let result = countDigit(n);
console.log(result);



// For Loop

// function countDigit(n) {
//     let count = 0;
//     for (let i = n; i > 0; i = Math.floor(i / 10)) {
//         count++;
//     }
//     return count;
// }

// let num = 259;
// let result = countDigit(num);
// console.log(result);

