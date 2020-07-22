function biggerThanThree(numbers) {
    let numbersList = [];
    
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > 3) {
            numbersList.push(numbers[i]);
        } 
    }
    
    return numbersList;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers));