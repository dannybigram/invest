var menu = document.querySelector(".menu");
var about = document.querySelector(".aboutuslink");
var close = document.querySelector(".close");
menu.addEventListener("click", function(){
    about.style.height = "30px";
    menu.style.display = "none"
    close.style.display = "block"
});
close.addEventListener("click", function(){
    about.style.height = "0";
    menu.style.display = "block"
    close.style.display = "none"
});
var button = document.querySelector(".buttonwallet");

button.addEventListener("click", function(){
    var copyText = document.querySelector("#myInput");
    copyText.select();
    document.execCommand("copy");
});