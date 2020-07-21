function max(...rest) {
    arr = [...rest];
    let max = arr[0]
    for(let i=1; i<arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
}

const result = max(1,2,3,4,10,5,6,7);
console.log(result);