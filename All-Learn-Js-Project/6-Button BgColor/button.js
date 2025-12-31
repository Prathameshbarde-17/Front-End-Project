//Random Color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let Color = "#";
  for (let i = 0; i < 6; i++) {
    Color = Color + hex[Math.floor(Math.random() * 16)];
  }
  return Color;
};

let intervalId;

const startChangeColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
  }
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangeColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangeColor);

document.querySelector("#stop").addEventListener("click", stopChangeColor);
