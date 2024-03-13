gsap.registerPlugin(Observer);

let headerImg = document.querySelector(".animated-element");
let headerWindow = document.querySelector(".header-window");

let x = 0;
let y = 0;

function move(e) {
  let imgWidth = headerImg.getBoundingClientRect().width;
  let windowWidth = headerWindow.getBoundingClientRect().width;

  if (windowWidth - imgWidth < e.x - 50) {
    x = windowWidth - imgWidth;
    gsap.set(headerImg, { x: x, z: 0});
  } else {
    gsap.set(headerImg, { x: e.x - 50 });
  }
  if (e.x < 50) {
    x = 0;
    gsap.set(headerImg, { x: x });
  }
}

Observer.create({
  target: window,
  ignore: ["NAV", "LI", "A", "UL"],
  onMove: (e) => move(e),
  onClick: (e) => move(e),
});

Observer.create({
  target: window,
  type: "wheel",
  onDown: (e) => moveDown(e),
});

gsap.to(".animated-element", {
  x: '100',
  y: `1000`,
  width: "100%",
  height: "100%",
  pin: true,
  scrollTrigger: {
    trigger: ".header-window",
    start: "top",
    end: "bottom",
    scrub: true,
    toggleActions: "play none none reverse",
    scale: 1,
  },
});
