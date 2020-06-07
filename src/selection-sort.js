

/**
 * 
 * @param {array} input The input array that needs to be sorted O(n^2) = n * n/2 (avg)
 */
function selection_sort(input) {
    const len = input.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (input[min] > input[j]) {
                min = j;
            }
        }
        if (min != i) {
            let temp = input[i];
            input[i] = input[min];
            input[min] = temp;
        }
    }
    return input;
}

// let input = [11,15,18,1,3,5,7,9]; 
// let sorted = selection_sort(input);
// console.log('The sorted array ',sorted);
module.exports = selection_sort;