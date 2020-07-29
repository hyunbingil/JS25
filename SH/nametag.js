// Name
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".greetings");

const USER_LS = "User",
    SHOWING_CN = "showing";

//handleSubmit의 인자로 event 안넣어주면 작동 안함.

function saveName(text) {
    localStorage.setItem(USER_LS, text);
    // 이 함수 덕분에, 인풋창에 입력한 내 이름이, 새로고침을 하여도 없어지지 않는다. User_LocalStorage
}

function handleSubmit(event) {
    event.preventDefault();
    //   입력창에 엔터쳤을 때 새로고침되며 없어지는걸 방지..?
    // 이게 없으면 입력 form이 enter와 함께 어디로 사라짐.

    const currentValue = input.value;

    // 얘는 input창에 입력-엔터치면, browser에 뜨게 하는 녀석
    paintGreeting(currentValue);

    //   이걸 해줘야, localStorage에 이름이 저장되구나(saveName)
    saveName(currentValue);
}
function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
    // 입력-제출을 했을 때, handleSubmit 함수를 호출
}
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    // 한번 입력하고 엔터누르면, 입력창이 사라지게 하는 장치
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init()
