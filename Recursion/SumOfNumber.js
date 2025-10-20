
// Sum Of First n Numbers
// let n = 5+4+3+2+1;


function sum(n) {
    if (n == 0) return 0;
    return n + sum(n - 1);
}
console.log(sum(5));



// Sum of All Element in An Array 



let arr = [5,3,2,0,1];
function Sum(n) {
    if (n == 0) {
        return arr[0];
    }
    return arr[n] + Sum(n - 1);
}
console.log(Sum(arr.length - 1));