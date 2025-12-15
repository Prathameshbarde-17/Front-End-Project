let button = document.getElementById("btn-1");

button.addEventListener("click", animateonce);

function animateonce() {
  button.classList.add("animationjs");

  setTimeout(() => {
    button.style.backgroundColor = "#A155B9";
    button.classList.remove("animationjs");
  });
}
