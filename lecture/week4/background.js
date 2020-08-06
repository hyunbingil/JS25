const body = document.querySelector("body");
const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `${imgNumber+1}.jpg`;
    image.classList.add('backgroundImage')
    body.prepend(image);// inserts a set of Node objects or DOMString objects before the first child of the ParentNode.
}

function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    // floor : 내림
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();