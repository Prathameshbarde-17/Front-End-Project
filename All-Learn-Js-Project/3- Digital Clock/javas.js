// JavaScript: clock logic goes here
// Example steps you'll need to implement:
// 1. Select elements: document.getElementById('hours') etc.
// 2. Create a function to get the current time and format hours/minutes/seconds.
// 3. Set the textContent of the elements.
// 4. Use setInterval or requestAnimationFrame to update every second.

// --- YOUR JS STARTS BELOW ---

setInterval(function () {
  const date = new Date();
  hours.textContent = date.getHours();
  minutes.textContent = date.getMinutes();
  seconds.textContent = date.getSeconds();
}, 1000);
