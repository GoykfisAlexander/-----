
const c = document.getElementById("c");
const ctx = c.getContext("2d");
const div = document.getElementById("div");
const coding = new Audio("coding.mp3");
const laugh = new Audio("laugh.mp3");

c.height = window.innerHeight;
c.width = window.innerWidth;
alpha = 0.04;
color = "#0f0";
gradient = ctx.createRadialGradient(
  c.width / 2,
  c.height / 2,
  c.width / 3,
  c.width / 2,
  c.height / 2,
  c.width / 16
);
gradient.addColorStop(1, "green");
gradient.addColorStop(0.5, "blue");
gradient.addColorStop(0, "red");

let matrix =
  "ァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギ\
  ジヂビピウゥクスツABCDEFGHIJKLMNOPQRSTUVWXYZ12345678\
  9@#$%^&*()*&^%アヌフムユュルグズブヅプエェケセテネヘメ\
  レヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
let font_size = 10;
let drops = [];
for (x = 0; x < c.width / font_size; x++) drops[x] = 0;

function draw() {
  ctx.fillStyle = `rgba(0, 0, 0,${alpha})`;
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = color;
  for (i = 0; i < drops.length; i++) {
    ctx.fillText(matrix[Math.floor(Math.random() * matrix.length)], i * font_size, drops[i] * font_size);
    if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
  //чисто от меня
  // if (c.width !== window.innerWidth) {
  //   c.height = window.innerHeight;
  //   c.width = window.innerWidth;
  //   for (x = 0; x < c.width / font_size; x++) drops[x] = 100;
  //   div.style.display = "none";
  //   gradient = ctx.createRadialGradient(
  //     c.width / 2,
  //     c.height / 2,
  //     c.width / 2,
  //     c.width / 2,
  //     c.height / 2,
  //     c.width / 10
  //   );
  //   color = "#0f0";
  //   setTimeout(trueProgrammer, 4000);
  // }
}
start = false;
document.body.addEventListener("click", () => {
  if (start === false) {
    start=true
    coding.play();
    setInterval(draw, 30);
    setTimeout(trueProgrammer, 5000);

    function trueProgrammer() {
      div.style.display = "flex";
      setTimeout(() => {
        alpha = 0.005;
        laugh.play();
      }, 2500);
      setTimeout(() => {
        color = gradient;
      }, 5000);
    }
    
  }
});
