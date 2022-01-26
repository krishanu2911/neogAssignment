const closingIcon = document.querySelector(".close-icon");
const snackBar = document.querySelector(".snackbar");
closingIcon.addEventListener("click", clickHandler);
function clickHandler() {
    snackBar.style.display = "none";
}

