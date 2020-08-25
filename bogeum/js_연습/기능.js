function zoomIn(event) {
    event.target.style.width = "500px";
    event.target.style.height = "336px";
    event.target.style.transition = "all 0.5s";
}

function zoomOut(event) {
    event.target.style.width = "400px";
    event.target.style.height = "280px";
    event.target.style.transition = "all 0.5s";
}

// 모달창
let modal = document.getElementById('myModal');
 
let btn = document.getElementById("first");

let span = document.getElementsByClassName("close")[0];                                          

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
        modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


