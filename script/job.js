import navbar from "/Components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()


let flag = 0;
function controller(x) {
    flag = flag + x;
    slidShow(flag);
}

slidShow(flag)
function slidShow(num) {
    let slides = document.getElementsByClassName("slid");

    if (num == slides.length) {
        flag = 0;
        num = 0;
    }
    if (num < 0) {
        flag = slides.length - 1;
        num = slides.length - 1;
    }
    for (let y of slides) {
        y.style.display = "none";
    }

    slides[num].style.display = "block";
}
