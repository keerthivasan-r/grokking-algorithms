let input = [1,3,5,7,9,11,15,18];

/**
 * Binary search function
 * @param {*} arr - Input sorted array to search 
 * @param {*} item - the value to find
 */
function binarysearch(arr,item){
    let low = 0;
    let high = arr.length - 1;
    while(low <= high){
        let mid = low + Math.round((high - low) / 2);
        if(arr[mid] == item)
            return mid;
        else if(arr[mid] < item)
            low = mid + 1;
        else 
            high = mid - 1;
    }
    return -1;
}


let index = binarysearch(input,7);
console.log('The element is found at ',index);