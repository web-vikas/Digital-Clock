const hrs = document.querySelector("#hrs");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

window.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let current_minutes = dateTime.getMinutes();
    let current_seconds = dateTime.getSeconds();
    if (hr > 12) {
      hr = hr - 12;
    }
    if (hr < 10) hr = "0" + hr;
    if (current_seconds < 10) current_seconds = "0" + current_seconds;
    if (current_minutes < 10) current_minutes = "0" + current_minutes;
    hrs.textContent = hr;
    minutes.textContent = current_minutes;
    seconds.textContent = current_seconds;
  }, 1000);
});
