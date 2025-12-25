const buttons = document.querySelectorAll(".button");
const body = document.querySelectorAll("body");

buttons.forEach(function (button) {
  //console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);

    /* First Method
    if (e.target.id === "grey") {
      document.body.style.backgroundColor = "grey";
    }
    if (e.target.id === "white") {
      document.body.style.backgroundColor = "white";
    }
    if (e.target.id === "blue") {
      document.body.style.backgroundColor = "blue";
    }
    if (e.target.id === "yellow") {
      document.body.style.backgroundColor = "yellow";
    }
*/

    /* 2nd Method

    const color = e.target.id;
    document.body.style.backgroundColor = color;
*/

    // 3rd Method - Switch Case

    switch (e.target.id) {
      case "grey":
        document.body.style.backgroundColor = "grey";
        break;
      case "white":
        document.body.style.backgroundColor = "white";
        break;
      case "blue":
        document.body.style.backgroundColor = "blue";
        break;
      case "yellow":
        document.body.style.backgroundColor = "yellow";
        break;
    }
  });
});
