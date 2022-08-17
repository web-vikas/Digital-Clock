const hrs = document.querySelector("#hrs");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

window.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    let dateTime = new Date();
    let hr = dateTime.getHours();
    if (hr > 12) hr = hr - 12;
    let current_minutes = dateTime.getMinutes();
    let current_seconds = dateTime.getSeconds();
    hrs.textContent = hr;
    minutes.textContent = current_minutes;
    seconds.textContent = current_seconds;
  }, 1000);
});
