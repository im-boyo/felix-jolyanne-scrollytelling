

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

//Animations GSAP

const animCh2 = gsap.timeline()
.fromTo(".bulles1", {y: "30vh", opacity: "0%"}, {y: "0vh", opacity: "100%", duration: 3})

const animCh3 = gsap.timeline()
.fromTo(".bulles2", {y: "10vh", opacity: "0%"}, {y: "0vh", opacity: "100%", duration: 3})
.fromTo("#chapitre-3 .lola1", {x: "10vw", opacity: "0%"}, {x: "0%", opacity: "100%", duration: 2}, "<1")

const animCh4 = gsap.timeline()
.from(".poisson-groupe", {x: "160vw", duration: 30})
.from(".billynage", {x: "-100vw", duration: 10}, "<3")
.from(".lolanage", {x: "-100vw", duration: 10}, "<")

const animCh6 = gsap.timeline()
.fromTo("#chapitre-6 .billy2", {x: "-10vw", opacity: "0%"}, {x: "0vw", opacity: "100%", duration: 3})
.fromTo(".p6-1", {opacity: 0}, {opacity: 1}, "<")
.fromTo("#chapitre-6 .lola2", {x: "-10vw", opacity: "0%"}, {x: "0vw", opacity: "100%", duration: 3}, "<")
.fromTo("#chapitre-6 .medaillon", {x: "-10vw", opacity: "0%"}, {x: "0vw", opacity: "100%", duration: 3}, "<")
.fromTo("#chapitre-6 .poisson-blue-queue", {x: "10%", opacity: "0%"}, {x: "0%", opacity: "100%", duration: 3}, "<2")
.fromTo("#chapitre-6 .poisson-blue-corps", {x: "10%", opacity: "0%"}, {x: "0%", opacity: "100%", duration: 3}, "<")
.fromTo("#chapitre-6 .billy2", {opacity: "100%", duration: 3}, {opacity: "0%"})
.fromTo(".p6-1", {opacity: 1}, {opacity: 0}, "<")
.fromTo("#chapitre-6 .lola2", {opacity: "100%", duration: 3}, {opacity: "0%"}, "<")
.to("#chapitre-6 .poisson-blue-corps", {opacity: 0}, "<")
.to("#chapitre-6 .poisson-blue-queue", {opacity: 0}, "<")
.to("#chapitre-6 .medaillon", {opacity: 0}, "<")
.fromTo(".billymains", {x: "-10vw", opacity: "0%"}, {x: "0vw", opacity: "100%", duration: 3})
.fromTo(".p6-2", {opacity: 0}, {opacity: 1}, "<")
.fromTo(".medaillon2", {x: "-10vw", opacity: "0%"}, {x: "0vw", opacity: "100%", duration: 3}, "<")
.fromTo([".poisson-blue-queue2",".poisson-blue-corps2"], {x: "10vw", opacity: "0%"}, {x: "0vw", opacity: "100%", duration: 3})


const animCh7 = gsap.timeline()
.fromTo(["#chapitre-7 .billy2", "#chapitre-7 .lola1", "#chapitre-7 .poisson-blue-queue", "#chapitre-7 .poisson-blue-corps"], {opacity: "0%"}, {opacity: "100%", duration: 3})
.from(["#chapitre-7 .billy2", "#chapitre-7 .lola1", "#chapitre-7 .poisson-blue-queue", "#chapitre-7 .poisson-blue-corps"], {y: "-10vh", rotation: "20deg", yoyo: true, repeat: -1, ease: "none", duration: 3}, "<")
