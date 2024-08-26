function formatConversion(temperature, conversionFunction, unitLabel) {
    if (unitLabel === "C") {
        return `${temperature}°${unitLabel} is ${celsiusToFahrenheit(temperature)}°F`;
    } else if (unitLabel === "F") {
        return `${temperature}°${unitLabel} is ${fahrenheitToCelsius(temperature)}°C`;
    } else {
        return `I don't know the unit`;
    }
}

let celsiusToFahrenheit = temperature => ((temperature * 1.8) + 32).toFixed(2);
let fahrenheitToCelsius = temperature => ((temperature - 32) / 1.8).toFixed(2);

console.log(formatConversion(20, celsiusToFahrenheit, "C"));
console.log(formatConversion(98.6, fahrenheitToCelsius, "F"));
console.log(formatConversion(0, celsiusToFahrenheit, "C"));
console.log(formatConversion(32, fahrenheitToCelsius, "F"));