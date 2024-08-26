function formatConversion(temperature, conversionFunction, unitLabel) {
    let result = unitLabel === "C" ? `${temperature}°${unitLabel} is ${celsiusToFahrenheit(temperature)}°F` : `${temperature}°${unitLabel} is ${fahrenheitToCelsius(temperature)}°C`;
    return result;
}

let celsiusToFahrenheit = temperature => ((temperature * 1.8) + 32).toFixed(2);
let fahrenheitToCelsius = temperature => ((temperature - 32) / 1.8).toFixed(2);

console.log(formatConversion(20, celsiusToFahrenheit, "C"));
console.log(formatConversion(98.6, fahrenheitToCelsius, "F"));
console.log(formatConversion(0, celsiusToFahrenheit, "C"));
console.log(formatConversion(32, fahrenheitToCelsius, "F"));