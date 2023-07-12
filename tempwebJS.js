// Temperature Conversion
function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerHTML = `${((valNum - 32) / 1.8).toFixed(2)} C` ;
}

function temperatureConverterCtoF(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFahrenheit").innerHTML = `${((valNum * 1.8) + 32).toFixed(2)} F` ;
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

// Currency Conversion

function currencyConverterRtoD(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputdoller").innerHTML = `$ ${((valNum) / 320).toFixed(2)}` ;
}

function currencyConverterDtoR(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputrupees").innerHTML = `Rs. ${((valNum) * 320).toFixed(2)}` ;
}

function toggleConversionCurr(conversionType) {
  if (conversionType === 'doller') {
    document.getElementById('dollerDiv').style.display = 'block';
    document.getElementById('rupeesDiv').style.display = 'none';
    document.getElementById('inputrupees').value = '';
    document.getElementById("outputdoller").innerHTML = '';
  } else if (conversionType === 'rupees') {
    document.getElementById('dollerDiv').style.display = 'none';
    document.getElementById('rupeesDiv').style.display = 'block';
    document.getElementById('inputdoller').value = '';
    document.getElementById("outputrupees").innerHTML = '';
  }
}


