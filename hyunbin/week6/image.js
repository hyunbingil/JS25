const left = document.querySelector("#left");
const right = document.querySelector("#right");
const leftName = document.querySelector("#left_name");
const rightName = document.querySelector("#right_name");
const modal = document.querySelector(".modal-wrapper");
const winnerName = document.querySelector(".winner_name");
// array 정의
let img_number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let img_name = ['잭슨', '쭈니', '미애', '비앙카',
                '애플', '뽀야미','시베리아', '사이다',
                '모니카', '피터', '나탈리', '솔미',
                '대장', '패치', '차둘', '부케'];
let new_img_number = [];
let select = [];

// 1. 맨 처음 이미지 띄워주기
function FirstpaintLeftImage(imgNumber){
    const image = new Image();
    image.src = `./img/${imgNumber}.png`;
    image.classList.add("left_img");
    left.appendChild(image);
}

function FirstpaintRightImage(imgNumber){
    const image = new Image();
    image.src = `./img/${imgNumber}.png`;
    image.classList.add("right_img");
    right.appendChild(image);
}

function paintLeftName(imgNumber){
    leftName.innerText = img_name[imgNumber-1];
}

function paintRightName(imgNumber){
    rightName.innerText = img_name[imgNumber-1];
}

function getRandom() {
    let number = img_number[Math.floor(Math.random() * img_number.length)];
    return number;
}

// 처음 화면 띄워주기
function init() {
    const leftRandomNumber = getRandom();
    img_number.splice(img_number.indexOf(leftRandomNumber), 1);
    const RightRandomNumber = getRandom();
    img_number.splice(img_number.indexOf(RightRandomNumber), 1);
    select = [];
    select.push(leftRandomNumber);
    select.push(RightRandomNumber);

    FirstpaintLeftImage(leftRandomNumber);
    FirstpaintRightImage(RightRandomNumber);
    paintLeftName(leftRandomNumber);
    paintRightName(RightRandomNumber);
}

init();


function changeLeftImage(imgNumber){
    let img = document.querySelector(".left_img");
    img.src = `./img/${imgNumber}.png`;
}

function changeRightImage(imgNumber){
    let img = document.querySelector(".right_img");
    img.src = `./img/${imgNumber}.png`;
}

function storeNewLeft(){
    new_img_number.push(select[0]);
    console.log(new_img_number);
    if ((img_number.length == 0) && (new_img_number.length == 1)) {
        let img = document.querySelector(".winner");
        img.src = `./img/${new_img_number[0]}.png`;
        winnerName.innerText = img_name[new_img_number[0]-1];
        modal.style.display = "flex";
    }
    else if (img_number.length == 0) {
        img_number = new_img_number;
        new_img_number = [];
        console.log(`img_number=${img_number}`)
        console.log(`new_img_number=${new_img_number}`)
        alert(`${img_number.length}강 시작!`);
        changeInit();
    } 
    else {
        changeInit();
    }
}

function storeNewRight(){  
    new_img_number.push(select[1]);
    console.log(new_img_number);
    if ((img_number.length == 0) && (new_img_number.length == 1)) {
        let img = document.querySelector(".winner");
        img.src = `./img/${new_img_number[0]}.png`;
        winnerName.innerText = img_name[new_img_number[0]-1];
        modal.style.display = "flex";
    }
    else if (img_number.length == 0) {
        img_number = new_img_number;
        new_img_number = [];
        console.log(`img_number=${img_number}`)
        console.log(`new_img_number=${new_img_number}`)
        alert(`${img_number.length}강 시작!`);
        changeInit();
    } 
    else {
        changeInit();
    }
}

function changeInit() {
    console.log(img_number)
    const leftRandomNumber = getRandom();
    img_number.splice(img_number.indexOf(leftRandomNumber), 1);
    const rightRandomNumber = getRandom();
    img_number.splice(img_number.indexOf(rightRandomNumber), 1);

    select = [];
    select.push(leftRandomNumber);
    select.push(rightRandomNumber);

    changeLeftImage(leftRandomNumber);
    changeRightImage(rightRandomNumber);
    paintLeftName(leftRandomNumber);
    paintRightName(rightRandomNumber);
}