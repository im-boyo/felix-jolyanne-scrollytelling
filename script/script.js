

let anim = gsap.timeline().to(".scroll-down", {y: "10vmin", ease: "none", yoyo: true, repeat: -1, duration: 3})

anim.play(0);

const body = document.querySelector(".body");

let timerEnd 
function scrollStop(){
    body.classList.remove("is-scrolling");
};

window.addEventListener('scroll', function(){
    clearTimeout(timerEnd);
    body.classList.add("is-scrolling");
    timerEnd = setTimeout(scrollStop, 100);
})

