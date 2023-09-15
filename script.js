// import { algo } from "/node_modules/qiskit/index.js";

function headsOrTails() {
  const rand = Math.floor(Math.random() * 10);
  const numberStr = rand.toString();
  const lastDigitStr = numberStr[numberStr.length - 1];
  const lastDigit = parseInt(lastDigitStr, 10);
  const randomNumber = lastDigit % 2 === 0 ? 0 : 1;
  const result = randomNumber === 0 ? "tails" : "heads";

  updateUI(result);
}

// Display the result on the page
function updateUI(result) {
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Result: ${result}`;

  const resultImage = document.getElementById("resultImage");
  resultImage.src = `images/${result}.png`;
}

function flip() {
  let flipButton = document.getElementById("flipButton");
  flipButton.disabled = true;
  setTimeout(function () {
    flipButton.disabled = false;
  }, 1000);

  let pic = document.getElementById("resultImage");
  pic.src = "images/spinning.png";
  window.setTimeout(headsOrTails, 1000);
}

//---------- Event listeners -----------//

// flip button
const flipButton = document.getElementById("flipButton");
flipButton.addEventListener("click", flip);

// reset button
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => {
  const resultElement = document.getElementById("result");
  resultElement.textContent = "Result: ";
});
