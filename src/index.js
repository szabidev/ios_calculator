// Clock
const clock = document.querySelector(".clock");

// Calculator Display
const display = document.querySelector(".display");

// Calculator Keys
const clearBtn = document.querySelector("[data-clear]");
const operationBtn = document.querySelectorAll("[data-operand]");
const numberBtn = document.querySelectorAll("[data-number]");
const equalsBtn = document.querySelector("[data-equals]");

window.onload = () => {
  clockUpdate();
};

// Create function to clear the display

// Create function that checks what operand is clicked and acts accordingly
// if an operand is clicked clear the display for the new numbers, if an operand
// is clicked a second time, make the calculation
// Don't forget decimal points

// Create function to update the display
function clockUpdate() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  // take out seconds when project is finished
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
  // Using setTimeout to update the static value from today variable
  setTimeout(clockUpdate, 1000);
}

// put 0 before numbers < 10
function checkTime(i) {
  if (i < 10) {
    i = "0" + 1;
  }
  return i;
}
