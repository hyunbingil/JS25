
const toDoform = document.querySelector(".js-toDoForm");
const toDoInput = toDoform.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];
let newID = 0;

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // localstorage엔 string만 저장할수있기에 JSON으로 바꿔준다
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentElement;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id); //10진수 반환 메서드
    });

    toDos = cleanToDos;
    saveToDos();
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    newID += 1;
    li.id = newID;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newID
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    // 왜 필요한거?

    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

// 1
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS); //get

    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        // stringfy 되기 이전의 데이터 형으로 되돌린다parse => 이 경우에는 array
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit);
}

init();