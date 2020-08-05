
const body = document.querySelector("body");
const IMG_NUMBER = 3;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `C:/Users/User/Downloads/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage"); // 목록에 문자열 추가..? 왜 추가해? bgImage 왜 필요?
    body.appendChild(image); //append는 문자열을 삽입할 수 있는데, appendChild는 문자열은 못넣는다고 한다
} //appendChild: 말그대로 child를 append한다, 어디에? body라는 부모(?노드에)

function getRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}
init();
