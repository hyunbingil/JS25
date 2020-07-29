let n = prompt('숫자를 입력해주세요.');
let tree = '';
for (let i=1; i<=n; i++) {
    let star = '';
    for (let j=1; j<=n-i; j++) {
        star += ' ';
    }
    for(let k=1; k<=2*i-1; k++) {
        star += '*';
    }
    tree += star + '\n';
}

console.log(tree);