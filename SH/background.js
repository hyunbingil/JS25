// const album = document.getElementsByClassName("album");
// const IMG_NUMBER = 3;
// function paintImage(imgNumber) {
//     var image = document.getElementById('abc');
//     if (image.src.match(1)) {
//         image.src = 'C:/Users/User/Downloads/2.jpg'
//     } else {
//         image.src = 'C:/Users/User/Downloads/1.jpg'
//     }
//     // image.src = `C:/Users/User/Downloads/${imgNumber + 1}.jpg`;
//     // // 파일 이름 영어로 하여, 숙제
//     // // 사진을 여러개 뜨게 해보기, 액자처럼(미술관)
//     // // 현빈쓰 말한대로 settime줘서 사진 자동으로 바꿔보기
//     // image.classList.add("bgImage"); // 목록에 문자열 추가..? 왜 추가해? bgImage 왜 필요?
//     // album.append(image); //append는 문자열을 삽입할 수 있는데, appendChild는 문자열은 못넣는다고 한다

// } //appendChild: 말그대로 child를 append한다, 어디에? album라는 부모(?노드에)
// function getRandom() {
//     const number = Math.floor(Math.random() * IMG_NUMBER);
//     return number;
// }
// function init() {
//     const randomNumber = getRandom();
//     paintImage(randomNumber);
// }
// init();

// 1.
// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Hy';
//     let age = 21;
// }
// sayHi()

// 2,
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}

// setTimeout(() => alert('안녕하세요.'), 1000); // 1초 후 얼럿

var ducks = ["첫째 오리", "둘째 오리", "셋째 오리", "넷째 오리", "다섯째 오리"]
var delaySec = 1000;

/* 1: IIFE를 적용하지 않은 일반적인 코드 */
for (i in ducks) {
    setTimeout(() => {
        console.log(ducks[i])
    }, i == 0 ? 0 : delaySec)
}

/* 2: IIFE를 적용한 코드 */
//즉시 실행 함수로 setTimeout을 감싸줬다.function(i) {} (i)
for (i in ducks) {
    (function (i) {
        setTimeout(() => {
            console.log(i)
        }, i * delaySec)
    })(i);
}


// for (var i = 1; i < 6; i++) {
//     (function (i) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * delaySec)
//     })(i);
// }