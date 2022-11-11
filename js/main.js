AOS.init();
Splitting();
const mainswiper = new Swiper("#main-visual", {
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: "#main-visual .btn-next",
    prevEl: "#main-visual .btn-prev",
  },
  on: {
    slideChange: function () {
      gsap.set("#main-visual .word", { opacity: 0, x: -100 });
      gsap.set("#main-visual img", { opacity: 0, y: -200 });
      gsap.set("#main-visual .img-box", { opacity: 0, y: 100 });
    },
    slideChangeTransitionEnd: function () {
      gsap.to("#main-visual .swiper-slide-active .word", { opacity: 1, x: 0, ease: "power3", duration: 1.2, stagger: { each: 0.3 } });
      gsap.to("#main-visual .swiper-slide-active img", { opacity: 1, y: 0, ease: "power3", duration: 2, stagger: { each: 0.3 } });
      gsap.to("#main-visual .swiper-slide-active .img-box", { opacity: 1, y: 0, ease: "power3", duration: 2 });
    },
  },
});

const reviewswiper = new Swiper("#review .review-slide", {
  loop: true,
  navigation: {
    nextEl: "#review .btn-next",
    prevEl: "#review .btn-prev",
  },
});

const educationswiper = new Swiper("#education .container", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  navigation: {
    prevEl: "#education .btn-prev",
    nextEl: "#education .btn-next",
  },
});

const brandingswiper = new Swiper("#branding .branding-slide", {
  loop: true,
  navigation: {
    prevEl: "#branding .btn-prev",
    nextEl: "#branding .btn-next",
  },
});

function makeCircle(txt, r = 250, d = 1) {
  const circleTxt = document.querySelector(txt);
  const circleType = new CircleType(circleTxt);
  circleType.radius(r).dir(d);
}

makeCircle("#test .propensity");
makeCircle("#test .personal");

const record = {
  customer: 551,
  project: 208,
  visitor: 135272,
};
console.log($(window).scrollTop());
let isEnd = true;
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 2300 && isEnd) {
    //console.log("color");
    countNum();
    isEnd = false;
  }
});

function countNum() {
  console.log("itcolor");
  gsap.from(record, {
    customer: 0,
    project: 0,
    visitor: 0,
    duration: 2,
    //onComplete: function () {},
    onUpdate: function () {
      $(".num01").text(Math.round(record.customer));
      $(".num02").text(Math.round(record.project));
      $(".num03").text(Math.round(record.visitor));
    },
  });
}
