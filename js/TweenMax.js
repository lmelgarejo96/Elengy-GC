TweenMax.to(".init", 3, {
    delay: 4.6,
    top: "-200vh",
    ease: Expo.easeInOut,
    onComplete: function() {
        document.body.style.overflowY = 'visible';
        document.documentElement.style.overflowY = 'visible';
    }
});

TweenMax.to(".ring", 3, {
    delay: 4.8,
    top: "-500%",
    ease: Expo.easeInOut
});

TweenMax.from(".h3-init", 1, {
    delay: 2.2,
    opacity: 0,
    y: -15,
    ease: Expo.easeInOut
});


TweenMax.from("#video-fondo", 3, {
    delay: 4.3,
    opacity: 0,
    y: 800,
    ease: Expo.easeInOut,
    onComplete: () => {
        if (this.location.hash.length > 0) {
            const link = this.location.pathname + this.location.hash;
            this.location.href = link;
        }
    }
});

TweenMax.from(".nav-link", 3, {
    delay: 5.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});


TweenMax.from(".navbar-brand", 3, {
    delay: 5.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".title-center", 3, {
    delay: 5.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".init", 1, {
    delay: .15,
    opacity: 0,
    y: -10,
    ease: Expo.easeInOut
});

setTimeout(() => {
    const ring = document.getElementById('ring');
    ring.style.display = 'flex'
}, 1500)

let t1 = new TimelineMax();

t1.from(".ringOne", 3, {
    delay: 0.7,
    opacity: 0,
    y: 150,
    ease: Expo.easeInOut
});