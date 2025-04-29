gsap.set(".slidesm", { scale: 3 });

function homePageAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });
  tl.to(".videodiv", {
    "--clip": "0%",
    ease: Power2,
  });
  tl.to(
    ".slidesm",
    {
      scale: 1.1,
      ease: Power2,
    },
    0
  );
  tl.to(
    ".lft",
    {
      xPercent: -10,
      stagger: 0.03,
      ease: Power4,
    },
    "a"
  );
  tl.to(
    ".rgt",
    {
      xPercent: 10,
      stagger: 0.03,
      ease: Power4,
    },
    "a"
  );
}
homePageAnimation();

function realPageAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
    xPercent: -200,
    ease: Power4,
  });
}
realPageAnimation();

function teamAnimation() {
  document.querySelectorAll(".listelem").forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        duration: 0.5,
        ease: Power4,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
      });
    });
    elem.addEventListener("mouseenter", function () {
      gsap.to(this.querySelector(".bluelayer"), {
        height: "100%",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(this.querySelector(".bluelayer"), {
        height: "0%",
      });
    });
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        duration: 0.5,
        ease: Power4,
      });
    });
  });
}
teamAnimation();

function paraAnimation() {
  var clutter = "";
  document
    .querySelector(".textpara")
    .textContent.split("")
    .forEach(function (e) {
      if (e == "") clutter += `<span>&nbsp;</span>`;
      clutter += `<span>${e}</span>`;
    });
  document.querySelector(".textpara").innerHTML = clutter;
  gsap.set(".textpara span", { opacity: 0.1 });
  gsap.to(".textpara span", {
    scrollTrigger: {
      trigger: ".para",
      start: "top 60%",
      end: "bottom 90%",
      scrub: 1,
    },
    opacity: 1,
    stagger: 0.03,
    ease: Power4,
  });
}
paraAnimation();
function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}
loco();
function capsulesAnimation() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 71%",
      end: "bottom bottom",
      scrub: 1,
    },
    y: 0,
    ease: Power4,
  });
}
capsulesAnimation();

document.querySelectorAll("section").forEach(function (e) {
  ScrollTrigger.create({
    trigger: e,
    start: "top 50%",
    end: "bottom 50%",
    onEnter: function () {
      document.body.setAttribute("theme", e.dataset.color);
    },
    onEnterBack: function () {
      document.body.setAttribute("theme", e.dataset.color);
    },
  });
});
