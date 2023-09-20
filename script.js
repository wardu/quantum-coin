//---------- Event listeners -----------//

// flip button
const flipButton = document.getElementById("flipButton");
flipButton.addEventListener("click", flip);

// reset button
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => {
  resultText.textContent = "Result: ";
});

function flip() {
  flipButton.disabled = true;
  setTimeout(function () {
    flipButton.disabled = false;
  }, 1000);

  coinImage.src = "images/spinning.png";
  window.setTimeout(headsOrTails, 1000);
}
