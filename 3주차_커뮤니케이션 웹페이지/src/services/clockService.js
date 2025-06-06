const clockElement = document.getElementsByClassName("clock")[0];
const main = document.getElementsByClassName("mobile_phone")[0];

const updateClock = () => {
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
};

updateClock();

setInterval(updateClock, 60000);

const blockClock = () => {
  clockElement.style.visibility = "hidden";
  main.style.background = "black";
};
