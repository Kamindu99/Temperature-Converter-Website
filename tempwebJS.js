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

// Length Conversion

function lengthConverterMtoCm(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputcentimeter").innerHTML = `${((valNum) * 100).toFixed(2)} cm` ;
}

function lengthConverterCmtoM(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputmeter").innerHTML = `${((valNum) / 100).toFixed(2)} m` ;
}

function toggleConversionLength(conversionType) {
  if (conversionType === 'meter') {
    document.getElementById('meterDiv').style.display = 'block';
    document.getElementById('centimeterDiv').style.display = 'none';
    document.getElementById('inputcentimeter').value = '';
    document.getElementById("outputmeter").innerHTML = '';
  } else if (conversionType === 'centimeter') {
    document.getElementById('meterDiv').style.display = 'none';
    document.getElementById('centimeterDiv').style.display = 'block';
    document.getElementById('inputmeter').value = '';
    document.getElementById("outputcentimeter").innerHTML = '';
  }
}

// Weight Conversion

function weightConverterKgtoG(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputgram").innerHTML = `${((valNum) * 1000).toFixed(2)} g` ;
}

function weightConverterGtoKg(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputkilogram").innerHTML = `${((valNum) / 1000).toFixed(2)} kg` ;
}

function toggleConversionWeight(conversionType) {
  if (conversionType === 'gram') {
    document.getElementById('gramDiv').style.display = 'block';
    document.getElementById('kilogramDiv').style.display = 'none';
    document.getElementById('inputkilogram').value = '';
    document.getElementById("outputgram").innerHTML = '';
  } else if (conversionType === 'kilogram') {
    document.getElementById('gramDiv').style.display = 'none';
    document.getElementById('kilogramDiv').style.display = 'block';
    document.getElementById('inputgram').value = '';
    document.getElementById("outputkilogram").innerHTML = '';
  }
}

