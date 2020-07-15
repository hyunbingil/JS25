function max() {
    let numberList = [];

    for (let i = 0; i < arguments.length; i++){
        numberList.push(arguments[i]);
    }

    for (let j = 0; j < numberList.length; j++){
        
        if (numberList[j] > numberList[j+1]){
            maxNum = numberList[j];
        }
    }

    return maxNum;
};

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);