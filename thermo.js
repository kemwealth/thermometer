// Function to update the thermometer dynamically
function updateTemperature() {
    let celsius = parseFloat(document.getElementById("temperatureInput").value);

    // Check if input is valid
    if (isNaN(celsius)) {
        document.getElementById("levelText").textContent = `0°C / 32°F`;
        document.getElementById("thermometerFill").style.height = "0%";
        return;
    }

    // Convert Celsius to Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;

    // Limit temperature range for better visualization (-50°C to 100°C)
    let displayTemp = Math.min(100, Math.max(-50, celsius));

    // Calculate fill height (mapping -50°C to 100°C into 0% to 100%)
    let newHeight = ((displayTemp + 50) / 150) * 100;

    // Update thermometer fill and text
    document.getElementById("thermometerFill").style.height = `${newHeight}%`;
    document.getElementById("levelText").textContent = `${celsius}°C / ${fahrenheit.toFixed(1)}°F`;
}
