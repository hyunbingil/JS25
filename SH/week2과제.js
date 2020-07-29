//10번
var input = prompt('숫자');
let result = '';
for (let i = 1; i < input; i++) {
    let line = '';
    for (let j = 1; j <= input - i; j++) {
        line += ' ';
    }
    for (let k = 1; k <= (2 * (i) - 1); k++) {
        line += '*';
    }
    result += line + '\n';
}
console.log(result);


//29번
let word = prompt('input alphabet');
if (word == word.toUpperCase()) {
    alert('YES');
} else {
    alert('NO');
}