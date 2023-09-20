const qiskit = require("@qiskit/algo");

// test that script loaded
console.log("Quantum Coin Flip loaded");

function headsOrTails() {
  qiskit.random().then((rand) => {
    const numberStr = rand.toString();
    const lastDigitStr = numberStr[numberStr.length - 1];
    const lastDigit = parseInt(lastDigitStr, 10);
    const randomNumber = lastDigit % 2 === 0 ? 0 : 1;
    const result = randomNumber === 0 ? "tails" : "heads";

    console.log("⚛️ Random quantum number:", numberStr);
    updateUI(result);
  });
}

function updateUI(result) {
  document.getElementById("coinImage").src = `images/${result}.png`;
  document.getElementById("resultText").textContent = `Result: ${result}`;
}

// window.test = test;
window.headsOrTails = headsOrTails;
