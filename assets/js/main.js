const changeHeaderColor = document.querySelector(".header");
window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 10) {
        changeHeaderColor.classList.add('active');
    } else {
        changeHeaderColor.classList.remove('active');
    }
};

    setInterval('document.querySelector(".line_3-3").innerHTML = "Javascript ";', 2000);
    setInterval('document.querySelector(".line_3-3").innerHTML = "HTML ";', 4000);
    setInterval('document.querySelector(".line_3-3").innerHTML = "CSS ";', 6000);



