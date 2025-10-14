var reverseString = function (s) {
    let len = s.length;
    let helfofLen = Math.floor(len / 2);

    for (let i = 0; i < helfofLen; i++) {
        // Swapping s[i] , s[len-1-i]
        let temp = s[i];
        s[i] = s[len - 1 - i];
        s[len - 1 - i] = temp;
    }
};