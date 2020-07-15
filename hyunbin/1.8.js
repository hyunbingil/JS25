function biggerThanThree(numbers) {
    let real_numbers = [];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > 3) {
            real_numbers.push(numbers[i])
        }
    }
    return real_numbers
}

const numbers = [1,2,3,4,5,6,7];
console.log(biggerThanThree(numbers));