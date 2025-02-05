//Costanti
let iFrame = document.getElementById("contentIFrame");
let btn1 = document.getElementById("m-upper-1");
let btn2 = document.getElementById("m-upper-2");
let btn3 = document.getElementById("m-upper-3");
let btn4 = document.getElementById("m-bottom-1");
let btn5 = document.getElementById("m-bottom-2");

const menuNav = document.getElementById("side-menu")
const menuBtn = document.getElementById("menu-btn")
const iframe = document.getElementById("contentIFrame");

btn1.addEventListener("click", function(){
    iFrame.src="pages/home.html"

    removeClassFromAll("m-option-selected");
    btn1.classList.add("m-option-selected")
})

btn4.addEventListener("click", function(){
    iFrame.src="pages/settings.html"

    removeClassFromAll("m-option-selected");
    btn4.classList.add("m-option-selected")
})
btn5.addEventListener("click", function(){
    iFrame.src="pages/login.html"

    removeClassFromAll("m-option-selected");
    btn5.classList.add("m-option-selected")
})

function removeClassFromAll(className) {
    document.querySelectorAll(`.${className}`).forEach(element => {
        element.classList.remove(className);
    });
    menuNav.classList.remove("menu-visible");
    iframe.classList.remove("body-opa")
}

menuBtn.addEventListener("click", () => {
    menuNav.classList.toggle("menu-visible")
    iframe.classList.toggle("body-opa")
})
