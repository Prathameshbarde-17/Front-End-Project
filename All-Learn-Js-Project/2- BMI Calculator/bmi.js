// BMI Calculator
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height || height)) {
    result.innerHTML = "Enter a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight) || weight > 500) {
    result.innerHTML = "Enter a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `BMI is ${bmi}`;
    result.innerHTML = `BMI is ${bmi} <br> ${
      bmi < 18.6
        ? "You are Underweight"
        : bmi < 25
        ? "You are Healthy"
        : bmi < 30
        ? "You are Overweight"
        : "You are Obese"
    }`;
  }
});
