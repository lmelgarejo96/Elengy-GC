/* JQUERY */
/* const wrapper = document.getElementById('wrapper');
let nav_btn = document.getElementById("icon-navbar"); */
$(window).scroll(function(e) {
    let desplazamiento = $(window).scrollTop();
    if (desplazamiento > 400) {
        $('#menu').addClass('dark-navbar');
        $('#contacto').addClass('dark-navbar');
        $('#fondo-blanco').addClass('dark-navbar');
        /* nav_btn.style.color = "rgb(255, 255, 255)"; */
    } else {
        $('#menu').removeClass('dark-navbar');
        $('#contacto').removeClass('dark-navbar');
        $('#fondo-blanco').removeClass('dark-navbar');
        /* nav_btn.style.color = "rgb(0, 0, 0)"; */
    }
});