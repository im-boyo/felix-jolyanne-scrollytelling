gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

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


/* ----- Chapitre 1 ------ */

const animCh1 = gsap
.timeline({
  scrollTrigger: {
    markers: true,
    start: "center center",
    end: "bottom top",
    toggleActions: "restart complete reverse reset",
    trigger: "#chapitre-1",
    pin: true,
  }
})
.fromTo("#chapitre-1 .poisson", {x: "-20vw", opacity: 0}, {x: "0vw", opacity: 1, duration: 3, border: "5px solid green"})
.fromTo("#chapitre-1 .billy1", {x: "-20vw", opacity: 0}, {x: "20vw", opacity: 1, duration: 3, border: "5px solid green"})
.fromTo("#chapitre-1 .poisson", {x: "0vw", opacity: 1}, {x: "40vw", opacity: 0, duration: 3, border: "5px solid green"}, "<1")




/* ----- Chapitre 2 ------ */

const animCh2 = gsap.timeline({
    scrollTrigger: {
      markers: true,
      start: "center center",
      end: "bottom top",
      toggleActions: "restart complete reverse reset",
      trigger: "#chapitre-2",
      pin: true,
      }
  })
.fromTo(".bulles1", {y: "30vh", opacity: "0%"}, {y: "0vh", opacity: "100%", duration: 3, border: "5px solid green"})





/* ----- Chapitre 3 ------ */

const animCh3 = gsap.timeline({
    scrollTrigger: {
      markers: true,
      start: "center center",
      end: "bottom top",
      toggleActions: "restart complete reverse reset",
      trigger: "#chapitre-3",
      pin: true,
      }
  })
.fromTo(".bulles2", {y: "10vh", opacity: "0%"}, {y: "0vh", opacity: "100%", duration: 3, border: "5px solid green"})
.fromTo("#chapitre-3 .lola1", {x: "10vw", opacity: "0%"}, {x: "0%", opacity: "100%", duration: 2, border: "5px solid green"}, "<1")






/* ----- Chapitre 4 ------ */

const animCh4 = gsap.timeline({
    scrollTrigger: {
      markers: true,
      start: "center center",
      end: "bottom top",
      toggleActions: "restart complete reverse reset",
      trigger: "#chapitre-4",
      pin: true,
      }
  })
.from(".poisson-groupe", {x: "103vw", duration: 5, repeat: -1, ease: "none", border: "5px solid green"})
.from(".billynage", {x: "-100vw", duration: 10, border: "5px solid green"}, "<3")
.from(".lolanage", {x: "-100vw", duration: 10, border: "5px solid green"}, "<")





/* ----- Chapitre 5 ------ */

gsap.to(".grotte", {
  scrollTrigger: {
    scrub: true,
    markers: true,
    trigger: "#chapitre-5"
  },
  y: "-300",
  ease: "none"
})

gsap.to(".sableP", {
  scrollTrigger: {
    scrub: true,
    markers: true,
  },
  y: "900",
  ease: "none"
})

gsap.to(".alguesavant", {
  scrollTrigger: {
    scrub: true,
    markers: true,
    trigger: "#chapitre-5"
  },
  x: "2500",
  y: "600",
  ease: "none"
})

gsap.to(".alguesarriere", {
  scrollTrigger: {
    scrub: true,
    markers: true,
    trigger: "#chapitre-5"
  },
  x: "-1900",
  y: "600",
  ease: "none"
})

gsap.to(".meduses", {
  scrollTrigger: {
    scrub: true,
    markers: true,
    trigger: "#chapitre-5"
  },
  y: "-900",
  ease: "none"
})




/* ----- Chapitre 6 ------ */

const animCh6 = gsap.timeline({
    scrollTrigger: {
      markers: true,
      start: "center center",
      end: "bottom top",
      toggleActions: "restart complete reverse reset",
      trigger: "#chapitre-6",
      pin: true,
      scrub: true
      }
  })
.fromTo("#chapitre-6 .billy2", {x: "-10vw", opacity: "0%"}, {x: "0vw", opacity: "100%", duration: 3, border: "5px solid green"})
.fromTo(".p6-1", {opacity: 0}, {opacity: 1, border: "5px solid green"}, "<")
.fromTo("#chapitre-6 .lola2", {x: "-10vw", opacity: "0%"}, {x: "0vw", opacity: "100%", duration: 3, border: "5px solid green"}, "<")
.fromTo("#chapitre-6 .medaillon", {x: "-10vw", opacity: "0%"}, {x: "0vw", opacity: "100%", duration: 3, border: "5px solid green"}, "<")
.fromTo("#chapitre-6 .poisson-blue-queue", {x: "10%", opacity: "0%"}, {x: "0%", opacity: "100%", duration: 3, border: "5px solid green"}, "<2")
.fromTo("#chapitre-6 .poisson-blue-corps", {x: "10%", opacity: "0%"}, {x: "0%", opacity: "100%", duration: 3, border: "5px solid green"}, "<")
.fromTo("#chapitre-6 .billy2", {opacity: "100%", duration: 3, border: "5px solid green"}, {opacity: "0%"}, "<7")
.fromTo(".p6-1", {opacity: 1}, {opacity: 0}, "<")
.fromTo("#chapitre-6 .lola2", {opacity: "100%", duration: 3, border: "5px solid green"}, {opacity: "0%"}, "<")
.to("#chapitre-6 .poisson-blue-corps", {opacity: 0}, "<")
.to("#chapitre-6 .poisson-blue-queue", {opacity: 0}, "<")
.to("#chapitre-6 .medaillon", {opacity: 0}, "<")
.fromTo(".billymains", {x: "-10vw", opacity: "0%"}, {x: "0vw", opacity: "100%", duration: 3, border: "5px solid green"})
.fromTo(".p6-2", {opacity: 0}, {opacity: 1}, "<")
.fromTo(".medaillon2", {x: "-10vw", opacity: "0%"}, {x: "0vw", opacity: "100%", duration: 3, border: "5px solid green"}, "<")
.fromTo([".poisson-blue-queue2",".poisson-blue-corps2"], {x: "10vw", opacity: "0%"}, {x: "0vw", opacity: "100%", duration: 3, border: "5px solid green"})






/* ----- Chapitre 7 ------ */

const animCh7 = gsap.timeline({
    scrollTrigger: {
      markers: true,
      start: "center center",
      end: "bottom top",
      toggleActions: "restart complete reverse reset",
      trigger: "#chapitre-7",
      pin: true,
    }
  })
.fromTo(["#chapitre-7 .billy2", "#chapitre-7 .lola1", "#chapitre-7 .poisson-blue-queue", "#chapitre-7 .poisson-blue-corps"], {opacity: "0%", border: "5px solid green"}, {opacity: "100%", duration: 3})
.from(["#chapitre-7 .billy2", "#chapitre-7 .lola1", "#chapitre-7 .poisson-blue-queue", "#chapitre-7 .poisson-blue-corps"], {y: "-10vh", rotation: "20deg", yoyo: true, repeat: -1, ease: "none", duration: 3}, "<")
