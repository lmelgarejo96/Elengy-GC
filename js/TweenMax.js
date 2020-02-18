/* TweenMax.to(".loading-screen", 4, {
    delay: 6.6,
    top: "-110%",
    ease: Expo.easeInOut
}); */



TweenMax.to(".init", 4, {
    delay: 6.6,
    top: "-200vh",
    ease: Expo.easeInOut
});

TweenMax.to(".ring", 4, {
    delay: 7,
    top: "-500%",
    ease: Expo.easeInOut
});

TweenMax.from(".nav-link", 4, {
    delay: 7.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});


TweenMax.from(".navbar-brand", 4, {
    delay: 7.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".title-center", 4, {
    delay: 7.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".h3-init", 3, {
    delay: 3,
    opacity: 0,
    y: -15,
    ease: Expo.easeInOut
});

setTimeout(() => {
    const ring = document.getElementById('ring');
    ring.style.display = 'flex'
}, 1500)

var t1 = new TimelineMax();

t1.from(".ringOne", 4, {
    delay: 0.4,
    opacity: 0,
    y: 150,
    ease: Expo.easeInOut
}).from(".ringTwo", 4, {
    delay: 0.9,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, "-=5");


setTimeout(() => {
    document.body.style.overflowY = 'visible';
    document.documentElement.style.overflowY = 'visible';;
}, 8600);