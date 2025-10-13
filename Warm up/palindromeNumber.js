

function palindromnumber(x){
let rev = 0;
let xcopy = x;
while (x > 0) {
    let rem = x % 10;;
    rev = (10 * rev) + rem;
    x = Math.floor(x / 10);
}

if (rev === xcopy) {
    return true;
}
else {
    return false;
}
}

console.log(palindromnumber(-121));