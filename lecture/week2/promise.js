// 기능을 정상적으로 수행하여 인자를 전달하는 resolve 콜백함수
// 문제 발생시 호출하게 될 reject 콜백함수

// 1. Producer
// when new Promise is created, the executor(callback func) runs automatically
const promise = new Promise((resolve, reject) => {
    console.log('doin something');
    setTimeout(() => {
        resolve('LIM');
        // reject(new Error('no network')) // Error는 js에서 제공하는 클래스, erorr가 발생한 이유를 써준다.
    }, 2000); // 2초 동안 다른 일 하고 있다가 실행되는 부분
});

// 2. Consumer, then, catch, finally
// switch문 break안한 것 처럼 then하고 나서 catch로 넘어가고 finally 넘어가고 이런거...
promise//
    .then(value => { //위의 resolve의 파라미터가 들어오게 된다 value로.
        console.log(value);
    }) // then은 호출된후 똑같은 Promise를 return하기에 catch가 작동할 수 있는 것
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally'); // 성공하든 실패하든 일단 수행되는. 어떤 기능을 마지막으로 꼭 수행하고 싶을 때 사용한다.
    });

// 3. Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000); //1을 인자로 넣었다
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));