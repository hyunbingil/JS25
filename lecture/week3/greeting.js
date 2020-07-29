const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings")

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text); // 로컬스토리지에 (이름) 저장하기 (키, 값)
}    
function handleSubmit(event){
    event.preventDefault(); // event 기본 동작 막기
    const currentValue = input.value; // event에서 받아온 값 넣기
    paintGreeting(currentValue); // 함수 호출
    saveName(currentValue); // 함수 호출
}

function askForName(){
    form.classList.add(SHOWING_CN); // form 보여주기
    form.addEventListener("submit", handleSubmit);//이벤트
}    

function paintGreeting(text){
    form.classList.remove(SHOWING_CN); // form 지우기
    greeting.classList.add(SHOWING_CN); // greeting 보여주기
    greeting.innerText = `Hello ${text}`;// greeting에 이 text보여주기
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS); // 로컬스토리지에서 가져오기
    if(currentUser === null){
        askForName(); // 없으면 물어보기
    }
    else {
        paintGreeting(currentUser); // 있으면 화면에 띄워주기
    }
}    

function init(){
    loadName();
}

init();