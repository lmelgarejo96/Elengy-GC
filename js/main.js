window.onload = function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
};

var enlacesHeader = document.querySelectorAll(".navbar-collapse")[0];
var semaforo = false;

document.querySelectorAll(".navbar-toggler")[0].addEventListener("click", function() {
    let nav_btn = document.getElementById("icon-navbar");
    const classesnav = document.getElementById('menu').classList;
    if (!semaforo) {
        nav_btn.style.color = "rgb(255, 255, 255)";
        nav_btn.classList.remove('fa-bars');
        nav_btn.classList.add('fa-close')
        semaforo = true;
    } else {
        color = "rgb(255, 255, 255)";
        classesnav.forEach((item) => {
            if (item === 'dark-navbar') {
                color = "rgb(255, 255, 255)";
            }
        })
        nav_btn.classList.remove('fa-close')
        nav_btn.classList.add('fa-bars');
        nav_btn.style.color = color;
        semaforo = false;
    }
    enlacesHeader.classList.toggle("menudos");
});