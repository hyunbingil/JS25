const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    // Date에서 정의된 내용을 바탕으로 새로운 date가 생성된다.
    const minutes = date.getMinutes(); // .찍어서 사용하면 메소드라고 했당..!
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

}
function init(){
    getTime();
    setInterval(getTime, 1000); // 주기적인 실행 1초마다(1000ms)
}

init()