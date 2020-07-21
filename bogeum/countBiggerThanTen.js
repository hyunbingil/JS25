function countBiggerThanTen(numbers) {
    let cnt = 0;

    numbers.forEach(num => {
        if (num > 10){
            cnt ++;
        }
    });

    return cnt;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);