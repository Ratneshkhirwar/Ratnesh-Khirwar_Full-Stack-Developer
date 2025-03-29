const textReveal = new SplitType("#text-Reveal");
const button = document.getElementById("menuButton");
let canClick = true;
let menuRevealed = false;
const tl = gsap.timeline();
const screenwidth = screen.width;

const splitText = new SplitType(".textAnimationNav", {
  charClass: "nav-char",
});

const splitTextTwo = new SplitType(".textAnimationNavTwo", {
  charClass: "nav-char-two",
});

const lenis = new Lenis({
  easing: (t) => t,
  smooth: true,
  direction: "vertical",
  smoothTouch: false,
});

function loader() {
  window.onload = function () {
    const tl = gsap.timeline();

    tl.to("#loadText", {
      y: -100,
      opacity: 0,
      duration: 0.8,
      delay: 1,
    })
      .to("#elem", {
        height: "100vh",
        duration: 0.8,
      })
      .to("#lastDiv", {
        height: "100vh",
        duration: 0.7,
        delay: -0.5,
      })
      .to("#elem", {
        display: "none",
      })
      .to("#loader", {
        background: "transparent",
        duration: 0,
      })
      .to("#main-body", {
        display: "block",
      })
      .to("#lastDiv", {
        height: "0vh",
        duration: 0.5,
        top: 0,
        delay: -0.3,
      })
      .to("#fsDiv", {
        display: "none",
      })
      .from(".char", {
        y: "100%",
        stagger: 0.05,
        duration: 1,
      })
      .from("#homePara", {
        opacity: 0,
        duration: 0.5,
      });
  };
}

function menuReveal() {
  gsap.to(".nav", {
    y: menuRevealed ? "-100%" : "0",
    duration: 1,
    delay: 0.5,
  });

  gsap.to(".non-menu", {
    filter: menuRevealed ? "blur(0px)" : "blur(5px)",
  });

  if (!menuRevealed) {
    gsap.from(".nav-char", {
      y: "100%",
      stagger: 0.04,
      duration: 0.5,
      delay: 1,
    });

    gsap.from(".nav-char-two", {
      y: "100%",
      stagger: 0.04,
      duration: 0.7,
      delay: 1,
    });
  } else {
    gsap.to(".nav-char", {
      y: "0",
      duration: 0,
    });

    gsap.to(".nav-char-two", {
      y: "0",
      duration: 0,
    });
  }

  menuRevealed = !menuRevealed;
}

function menuFunction() {
  menuReveal();
}

function renderProjects(pressedOption) {
  let arr = [];

  if (pressedOption == 1) {
    arr = [
      '<a href="./resume.html" target="_blank"><div class="project-div"><img src="https://t4.ftcdn.net/jpg/08/18/66/53/360_F_818665310_ZvCod22IitSWxJCpThiyeutGsvbvntsa.jpg" alt=""></div></a>',
      '<a href="./food.html" target="_blank"><div class="project-div"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCagRLYkLeTBEd0qc-6FLb6lnyxJXaBw_Fw&s" alt=""></div></a>',
      '<a href="./ui.html" target="_blank"><div class="project-div"><img src="https://static.vecteezy.com/system/resources/thumbnails/019/507/947/small_2x/shop-sale-shopping-bag-logo-design-symbo-vector.jpg" alt=""></div></a>',
    ];
  } else if (pressedOption == 2) {
    arr = [
      '<a href="./keyboard.html" target="_blank"><div class="project-div"><img src="./assest/keyboardlogo.png" alt=""></div></a>',
      '<a href="./music.html" target="_blank"><div class="project-div"><img src="./assest/MusicPlayerLogo.png" alt=""></div></a>',
      '<a href="./game.html" target="_blank"><div class="project-div"><img src="https://static.vecteezy.com/system/resources/previews/017/068/883/non_2x/dark-ninja-mascot-logo-for-team-esport-gaming-vector.jpg" alt=""></div></a>',
      '<a href="./addcont.html" target="_blank"><div class="project-div"><img src="https://as2.ftcdn.net/jpg/01/67/05/73/1000_F_167057364_WzO8CLrIGZpvOkekxkusuHC9vrzApyvB.jpg" alt=""></div></a>',
      '<a href="./calculator.html" target="_blank"><div class="project-div"><img src="https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/512/Calculator_512.png" alt=""></div></a>',
    ];
  } else if (pressedOption == 3) {
    arr = [
      '<a href="./burger.html" target="_blank"><div class="project-div"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1200px-Burger_King_2020.svg.png" alt=""></div></a>',
      '<a href="./bootstrap.html" target="_blank"><div class="project-div"><img src="https://www.mpbirlacement.com/wp-content/uploads/2023/06/888-jpg.webp" alt=""></div></a>',
    ];
  } else {
    arr = [
      '<a href="https://ratnesh-khirwar.netlify.app/" target="_blank"><div class="project-div"><img src="https://img.freepik.com/premium-vector/quiz-logo-quiz-time-label-with-question-mark_349999-2051.jpg" alt=""></div></a>',
      '<a href="http://profound-pudding-b3daa0.netlify.app/" target="_blank"><div class="project-div"><img src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/19/fa/ae/19faaec4-5190-7ffd-0846-678e1146ac92/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/1200x630wa.png" alt=""></div></a>',
    ];
  }

  arr = arr.join(" ");

  document.getElementById("rightCont").innerHTML = arr;
}

// Scroll Animations
gsap.to("#home", {
  background: "#101010",
  scrollTrigger: {
    trigger: "#home",
    scroller: "body",
    scrub: 1,
    start: "3% top",
  },
});

gsap.to(".char", {
  opacity: 0,
  stagger: 0.05,
  scrollTrigger: {
    trigger: "#home",
    scroller: "body",
    scrub: true,
    start: "10% top",
    end: "39.81% top",
  },
});

let textAnimationtl = new gsap.timeline({
  scrollTrigger: {
    trigger: ".section-one",
    scroller: "body",
    start: "960px top",
    end: "960px top",
  },
});

gsap.to(".projects-parallax", {
  background: "#6f4bff",
  scrollTrigger: {
    trigger: "#sectionTwo",
    scroller: "body",
    start: "35% top",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".cards-div", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#sectionTwo",
    scroller: "body",
    start: "37% top",
    end: "39% top",
    scrub: true,
  },
});

gsap.from("#head-projects", {
  x: "-100%",
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#sectionTwo",
    scroller: "body",
    start: "33% top",
  },
});

let animations = []; // Store animations to remove them later

function initAnimations() {
  animations.forEach((anim) => anim.scrollTrigger?.kill());
  animations = []; // Clear the array

  if (window.innerWidth >= 1023) {
    animations.push(
      gsap.to(".card", {
        x: "-90%",
        scrollTrigger: {
          trigger: "#sectionTwo",
          scroller: "body",
          start: "41% top",
          end: "47% top",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      })
    );

    animations.push(
      gsap.to(".cards-div", {
        marginTop: "400px",
        scrollTrigger: {
          trigger: "#sectionTwo",
          scroller: "body",
          start: "41% top",
          end: "47% top",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      })
    );
  }
}

initAnimations();

window.addEventListener("resize", () => {
  ScrollTrigger.refresh(); // Refresh GSAP animations
  initAnimations();
});

gsap.from(".section-four .head", {
  opacity: 0,
  duration: 0.7,
  scrollTrigger: {
    trigger: "#sectionTwo",
    scroller: "body",
    start: "50% top",
    toggleActions: "play none none reverse",
  },
});

gsap.to(".section-four .head", {
  y: "25%",
  scrollTrigger: {
    trigger: "#sectionTwo",
    scroller: "body",
    start: "53% top",
    end: "60% top",
    scrub: true,
    toggleActions: "play none none reverse",
  },
});

gsap.to(".section-four .one", {
  y: "-40%",
  scrollTrigger: {
    trigger: "#sectionTwo",
    scroller: "body",
    start: "53% top",
    end: "60% top",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
});

gsap.to(".section-four .two", {
  y: "-110%",
  scrollTrigger: {
    trigger: "#sectionTwo",
    scroller: "body",
    start: "55% top",
    end: "68% top",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
loader();
renderProjects(1);
