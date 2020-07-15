## 비동기 처리 다루기
: 비동기적으로 처리하면 흐름이 멈추지 않기 때문에 동시에 여러 가지 작업을 처리할 수도 있고, 기다리는 과정에서 다른 함수도 호출 가능 ^.^
- setTimeout 함수
: 사용하면 우리가 정한 작업이 백그라운드에서 수행되기 때문에 기존의 코드 흐름을 막지 않고 동시에 다른 작업들을 진행 할 수 있음.
``` js
function work(){
    setTimeout(()=>{
        const start = Date.now();
        for(let i = 0; i< 1000000000; i++){}
            const end = Date.now();
            console.log(end-start + 'ms');
    }, 0);
}

console.log("작업 시작!");
work();
console.log("다음 작업"); // 작업 시작! 다음 작업 508ms 순서로 출력된다.
```
> 0ms 이후에 실행한다는 의미지만 실제로는 4ms 이후에 실행.

- callback 함수
: 함수 타입의 값을 파라미터로 넘겨줘서, 파라미터로 받은 함수를 특정 작업이 끝나고 호출해주는것.
> 만약에 work 함수가 끝난 후 어떤 작업을 처리하고 싶다면?\
~> callback 함수를 파라미터로 전달해준다.
``` js
function work(callback){
    setTimeout(()=>{
        const start = Date.now();
        for(let i = 0; i< 1000000000; i++){}
            const end = Date.now();
            console.log(end-start + 'ms');
            callback();
    }, 0);
}
console.log("작업 시작!");
work(() => {
    console.log("작업이 끝났다9!")
});
console.log("다음 작업"); // 작업 시작! 다음 작업 498ms 작업이 끝났다9! 순서로 출력된다.
```

#### 비동기적으로 처리하게 되는 작업들
- Ajax Web API 요청
: 서버쪽에서 데이터를 받아와야할 경우, 요청 후 서버에서 응답할 때까지 대기해야하기 때문에!
- 파일 읽기
: 서버쪽에서 파일을 읽어야하는 상황에!
- 암호화/복호화
: 바로 처리가 되지 않고, 시간이 어느정도 걸리는 경우가 있기 때문에!
- 작업 예약
: 단순하게 어떤 작업을 몇초 후에 스케줄링(?)해야하는 상황에!

### 1. Promise
: 콜백 함수로 처리할 때 비동기 작업이 많아지면 코드가 쉽게 난잡해지는 단점 보완을 위해 사용.
> 비동기적으로 처리해야하는 일이 많아질수록, 코드의 깊이가 계속 깊어지는 현상이 생기는데 Promise로 방지가능!

#### Promise 만들기
``` js
const myPromise = new Promise((resolve, reject)=>{
        //코드
})
```
> Promise가 성공할 수 도 있고 실패 할 수도 있다.

- 성공시 : resolve를 호출
``` js
const myPromise = new Promsie((resolve, reject)=>{
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

myPromise.then(n=>{
    console.log(n);
});
```
> resolve를 호출할 때 특정 값을 파라미터로  넣어주면, 이 값을 작업이 끝나고 나서 사용 가능.    

: 작업이 끝나고 또 다른 작업을 해야 할 때는 Promise 뒤에 .then(...)을 붙여서 사용!

- 실패시 : reject를 호출
``` js
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(new Error());
    }, 1000);
});

myPromise
    .then(n=>{
        console.log(n);
    })
    .catch(error => {
        console.log(error);
    });
```
: catch를 통해 실패했을시 수행할 작업을 설정가능.

#### Promise를 만드는 함수
``` js
    function increaseAndPrint(n){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                const value = n+1;
                if (value===5){
                    const error = new Error();
                    error.name = "ValueIsFiveError";
                    reject(error);
                    return;
                }
                console.log(value);
                resolve(value);
            },1000);
        });
    }

    increaseAndPrint(0)
        .then(increaseAndPrint)
        /* .then(n=>{
            return increaseAndPrint(n);
        })도 가능 */
        .then(increaseAndPrint)
        .then(increaseAndPrint)
        .then(increaseAndPrint)
        .then(increaseAndPrint)
        .catch(e=>{
            console.error(e);
        });
```
#### Promise의 단점
1. 에러를 잡을 때 몇번째에서 발생했는지 알아내기 어렵다.
2. 특정 조건에 따라 분기를 나누기 어렵다.
3. 특정 값을 공유해가면서 작업을 처리하기도 까다롭다.
> 그래서 이러한 단점을 보완하기 위해 async/await를 사용한다!

### async/await
: Promise를 더욱 쉽게 사용할 수 있게 해준다.
- 함수 선언시 함수 앞부분에 async 키워드 붙여주기
- Promise앞에 await 넣어주면 해당 프로미스가 끝날때까지 기다렸다가 다음 작업 수행 가능.
``` js
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function process(){
    console.log("안녕하세요!");
    await sleep(1000);
    console.log("반갑습니다!);
}

process().then(()=>{
    console.log("작업이 끝났어요!");
});
```
> 함수에서 async 사용하면 해당 함수는 결과값으로 Promise를 반환한다. 그래서 then 사용가능.

#### async 함수에서 에러 발생시킬 때
: throw 사용, 에러 잡아낼 떄는 try/catch 문 사용.
``` js
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function makeError(){
    await sleep(1000);
    const error = new Error();
    throw error;
}

async function process(){
    try{
        await makeError();
    } catch(e){
        console.error(e);
    }
}

process();
```
#### Promise.all
: 여러개의 Promise 동시에 실행
: Promise.all은 등록한 Promise 중 하나라도 실패하면 모든게 실패 한 것으로 간주함.
``` js
function sleep(ms){
    return new Promise(resolve=> setTimeout(resolve,ms));
}

const getDog = async()=>{
    await sleep(1000);
    return "멍멍이";
};

const getRabbbit = async()=>{
    await sleep(500);
    return "토끼";
};

const getTurtle = async() => {
    await sleep(3000);
    return "거북이";
}

async function process(){
    const results = await Promise.all([getDog(), getRabbit(), getTutle()]);
    console.log(results);
}

process(); // ["멍멍이", "토끼", "거북이"]
```
: 배열 비구조화 할당 문법 사용 시 각 결과값을 따로따로 추출해 조회가능!
``` js
async function process(){
    const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(),getTurtle()]);
    console.log(dog);
    console.log(rabbit);
    console.log(turtle);
}

process();
```
#### Promise.race
: 여러개의 Promise를 등록해 실행했을 때 가장 빨리 끝난것 하나만의 결과값을 가져옴.
: 다른 Promise가 성공하기전에 가장 먼저 끝난 Promise가 실패하면 모든게 실패 한 것으로 간주함.
> 가장 먼저 끝난 Promise가 에러를 발생시킬 경우 에러를 잡아낼 수 있지만, 나머지 Promise에서 발생한 에러는 무시된다.
``` js
async function process(){
    cosnt first = await Promise.race([
        getDog(), getRabbit(), getTurtle()
    ]);
    console.log(first);
}

process();
```