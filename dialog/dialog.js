const mainDialog = document.querySelectorAll(".dialog-main");
const dialogDiv = document.querySelector(".dialog");
const openDia = document.querySelectorAll(".open-dialog");
const itemsOfDia = document.querySelector(".items");
mainDialog[0].addEventListener("click", clickHandler);
 function clickHandler(event) {
    //  console.log(event.target.closest(".dialog"));
    if(event.target.closest(".dialog")) return;

    mainDialog[0].classList.remove("open");
}
mainDialog[2].addEventListener("click", clickHandler2);
 function clickHandler2(event) {
    //  console.log(event.target.closest(".dialog"));
    if(event.target.closest(".dialog")) return;
    mainDialog[2].classList.remove("open");
}
mainDialog[1].addEventListener("click", clickHandler1);
 function clickHandler1(event) {
    //  console.log(event.target.closest(".dialog"));
    if(event.target.closest(".dialog")) return;
    mainDialog[1].classList.remove("open");
}
openDia[1].addEventListener("click", openClickHandler);
function openClickHandler(){
    mainDialog[1].classList.add("open");
    console.log("hello")
}
openDia[0].addEventListener("click", defaulDia);
function defaulDia() {
    mainDialog[0].classList.add("open");
    console.log("first")
    
}
openDia[2].addEventListener("click", stacked);
function stacked() {
    mainDialog[2].classList.add("open");
    console.log("thrid")
    
}
function name(params) {
    console.log("hello");
}