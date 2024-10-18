let randomNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const result = document.getElementById("result");
const restartButton = document.getElementById("restart");

submitGuess.addEventListener("click", () => {
    const userGuess = Number(guessInput.value);
    if (userGuess < 1 || userGuess > 100) {
        result.textContent = "Por favor, elige un número entre 1 y 100.";
        return;
    }
    
    if (userGuess === randomNumber) {
        result.textContent = "¡Correcto! Has adivinado el número.";
        restartButton.style.display = "inline";
        submitGuess.disabled = true;
    } else if (userGuess < randomNumber) {
        result.textContent = "Demasiado bajo. Intenta de nuevo.";
    } else {
        result.textContent = "Demasiado alto. Intenta de nuevo.";
    }
});

restartButton.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessInput.value = '';
    result.textContent = '';
    restartButton.style.display = "none";
    submitGuess.disabled = false;
});
