function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '🍎'
}
async function getBanana() {
    await delay(500);
    return '🍌'
}

function pickAllFruits2() {
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join('+'));
} // 가장 늦게 출력돼. 비동기니까
// console.log(pickAllFruits())
pickAllFruits2().then(console.log)
console.log('apple')
console.log('ipad')

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
// race: 뒤에 나오는 친구들 중에 더 빨리 나오는 친구먼저 출력한다. banana -> apple
pickOnlyOne().then(console.log)