const slides = document.querySelectorAll(".slide");
const left = document.getElementById("arrow-left");
const right = document.getElementById("arrow-right");

let current = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

left.addEventListener("click", () => {
  current--;
  if (current < 0) current = slides.length - 1;
  showSlide(current);
});

right.addEventListener("click", () => {
  current++;
  if (current >= slides.length) current = 0;
  showSlide(current);
});

setInterval(() => {
  current++;
  if (current >= slides.length) current = 0;
  showSlide(current);
}, 4000);
