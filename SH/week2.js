// var input = prompt('입력');
// if ((input % 3) === 0) {
//     alert('짝')
// } else {
//     alert(input)
// };


// var input = prompt('입력');
// alert(`안녕하세요. 저는 ${input}입니다.`)


// var input = prompt('입력');
// if (input >= 150) {
//     alert('YES')
// } else {
//     alert('NO')
// }



const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
    const current = parseInt(number.innerText, 10); // 10진수로 바꿔준다는 뜻, innerText는 그냥 str, parseInt로 int형 변환
    number.innerText = current + 1;
};

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
};
// page 넘어가는 것 없이 페이지 변환을 줄 수 있다.




const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");
open.onclick = () => {
    modal.style.display = "flex";
};
close.onclick = () => {
    modal.style.display = "none";
};