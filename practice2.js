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
// async function pickFruits() {
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
// }
// pickFruits().then(console.log);

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
pickOnlyOne().then(console.log)