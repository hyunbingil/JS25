const left = document.querySelector("#left");
const right = document.querySelector("#right");

// array 정의
let img_number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let new_img_number = [];
let select = [];

// 1. 맨 처음 이미지 띄워주기
function FirstpaintLeftImage(imgNumber){
    const image = new Image();
    // console.log(`left 이미지 번호는 ${imgNumber}`);
    image.src = `./img/${imgNumber}.png`;
    image.classList.add("left_img");
    left.appendChild(image);
}

function FirstpaintRightImage(imgNumber){
    const image = new Image();
    // console.log(`right 이미지 번호는 ${imgNumber}`);
    image.src = `./img/${imgNumber}.png`;
    image.classList.add("right_img");
    right.appendChild(image);
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
}

console.log(img_number)
init();
console.log(img_number)

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
        alert(`결승진출 끝`);
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
        alert(`결승진출 끝`);
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
}