const batteryElement = document.getElementsByClassName("battery")[0];

let battery = 100;

const batteryInterval = setInterval(() => {
  if (battery > 0) {
    battery -= 1;
  }

  batteryElement.textContent = `${battery}%`;

  if (battery === 0) {
    blockClock();
  }
}, 1000); //1000ms = 1s
