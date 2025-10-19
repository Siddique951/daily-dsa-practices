
// function fun(num) {
//     if (num == 0) {
//         return;
//     }
//     console.log(num);
//     num = num - 1;
//     fun(num);
// }

// a = 10
// fun(a)


// Print n-----to-----1 Using Recursion


// function fn(n) {
//     if (n < 1) {
//         return;
//     }
//     console.log(n)
//     fn(--n);
// }
// fn(5)


// Print 1 to n using Recursion

let n = 5;
function fn(x) {
    if (x > n) {
        return;
    }
    console.log(x);
    x = x + 1;
    fn(x);

}

fn(1)




