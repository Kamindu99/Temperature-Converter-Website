function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerHTML = (valNum - 32) / 1.8;
}

function temperatureConverterCtoF(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFahrenheit").innerHTML = (valNum * 1.8) + 32;
}

function toggleConversion(conversionType) {
  if (conversionType === 'celsius') {
    document.getElementById('celsiusDiv').style.display = 'block';
    document.getElementById('fahrenheitDiv').style.display = 'none';
    document.getElementById('inputFahrenheit').value = '';
    document.getElementById("outputCelcius").innerHTML = '';
  } else if (conversionType === 'fahrenheit') {
    document.getElementById('celsiusDiv').style.display = 'none';
    document.getElementById('fahrenheitDiv').style.display = 'block';
    document.getElementById('inputCelsius').value = '';
    document.getElementById("outputFahrenheit").innerHTML = '';
  }
}
