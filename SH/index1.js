// let value = 1;
// // var은 이제 안쓴대요.

// const a = 1; // 이건 이제 다시 할당해도 안 변해


// // null vs undefined: 둘이 달라

// for (i = 1; i < 10; i++) {
//     console.log(i)
// }

// for (i = 1; i < 10; ++i) {
//     console.log(i)
// }

// // js에선 논리연산자 영어로 안쓴다, 기호로 쓴다

// // 1) 두 값이 일치하는지 확인
// // ===
// // ==은 타입 검사까지는 하지 않는다. (자료형 검사X, int(1) != str(1))


// // function add(a, b) {
// //     return a * b;
// // }

// // 화살표 함수 (this 자체가 없다)
// const add = (a, b) => {
//     return a + b
// }

// console.log('화살표함수', add(1, 2))


// // 객체 비구조화 할당
// const ironMan = {
//     name: '토니 스타크',
//     actor: '로버트 다우니 주니어',
//     alias: '아이언맨'
// };

// function print(hero) {
//     const { alias, name, actor } = hero; //객체에서 값들을 추출해 새로운 상수로 선언
//     const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`;
// }

// console.log(print(ironMan))

// /// getter, setter 함수


// const doggy = {
//     name: '멍멍이',
//     sound: '멍멍',
//     age: 2
// };

// console.log(Object.entries(doggy)); // [Array[2], Array[2], Array[2]]

// // 프로토타입
// // 같은 객체 생성자 함수를 사용할 경우, 
// // 특정 함수 또는 값을 재사용 할 수 있음
// let a = 2;
// (a = 2) ? console.log('ice') : console.log('coffee')

// // 구조화, 비구조화 할당
// // 호이스팅


function biggerThanThree(numbers) {
    let answer = [];
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > 3) {
            answer.push(numbers[i]);
        }
    }
    return answer
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
// const sliced = numbers.slice(3,)
// console.log(sliced)
console.log(biggerThanThree(numbers));



////////////////////////////////////////////
function max(...rest) {
    let answer = []

    return 0;
}
const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);
