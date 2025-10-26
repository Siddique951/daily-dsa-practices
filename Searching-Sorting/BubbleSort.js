
// Ex:-

let arr = [5, 4, 9, 15, 7, 1, 0];

function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {

        let isswapped = false;

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                isswapped = true;
            }
        }

        if (!isswapped) break;
    }

    return arr;
}



let result = bubbleSort(arr);
console.log(result);