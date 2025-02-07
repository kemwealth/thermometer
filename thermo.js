// script.js
let currentTemp = 0; // Initial temperature
const thermometerFill = document.getElementById("thermometerFill");
const levelText = document.getElementById("levelText");

function updateTemperature() {
    if (currentTemp < 100) {
        currentTemp += 5; // Increase the temperature by 5°C
    }

    // Update the fill height based on the temperature
    const newHeight = (currentTemp / 100) * 100; // Height is based on temperature

    // Update the thermometer fill and temperature level
    thermometerFill.style.height = `${newHeight}%`;
    levelText.textContent = `${currentTemp}°C`;
}
