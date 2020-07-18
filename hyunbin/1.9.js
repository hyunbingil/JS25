function countBiggerThanTen(numbers) {
    let btt = 0;
    for(let i=0; i<numbers.length; i++) {
        if(numbers[i] > 10) {
            btt += 1
        }
    }
    return btt
}

const count = countBiggerThanTen([1,2,3,5,10,20,30,40,50,60]);
console.log(count);