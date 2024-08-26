function generateRandomNumber() {
    const minValue = parseInt(document.getElementById('min-value').value);
    const maxValue = parseInt(document.getElementById('max-value').value);

    if (isNaN(minValue) || isNaN(maxValue)) {
        alert("Please enter valid numbers for both fields.");
        return;
    }

    if (minValue > maxValue) {
        alert("Minimum value should not be greater than maximum value.");
        return;
    }

    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    document.getElementById('result').innerText = `Random Number: ${randomNumber}`;
}
