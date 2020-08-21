const closeModal = document.querySelector(".close-button");

closeModal.onclick = () => {
    modal.style.display = "none";
    history.go(0);
};