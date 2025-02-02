//Costanti
let iFrame = document.getElementById("contentIFrame");
let btn1 = document.getElementById("m-upper-1");
let btn2 = document.getElementById("m-upper-2");
let btn3 = document.getElementById("m-upper-3");
let btn4 = document.getElementById("m-bottom-1");
let btn5 = document.getElementById("m-bottom-2");

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
}