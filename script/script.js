

let anim = gsap.timeline().to(".scroll-down", {y: "10vmin", ease: "none", yoyo: true, repeat: -1, duration: 3})

anim.play(0);

const body = document.querySelector(".sprite-body");
const timerEnd = function(){
    body.classList.remove("is-scrolling");
};
let timer = setTimeout(timerEnd, 100);
const aaa = document.querySelector(".sheet")

aaa.addEventListener('click', function(){
    body.classList.add("is-scrolling");
    timer;
})

clearTimeout(timer);