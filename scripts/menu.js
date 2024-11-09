//Costanti
let iFrame = document.getElementById("contentIFrame");
let btn1 = document.getElementById("m-upper-1");
let btn2 = document.getElementById("m-upper-2");
let btn3 = document.getElementById("m-upper-3");
let btn4 = document.getElementById("m-bottom-1");
let btn5 = document.getElementById("m-bottom-2");

btn1.addEventListener("click", function(){
    iFrame.src="pages/home.html"
})

btn4.addEventListener("click", function(){
    iFrame.src="pages/settings.html"
})
btn5.addEventListener("click", function(){
    iFrame.src="pages/login.html"
})