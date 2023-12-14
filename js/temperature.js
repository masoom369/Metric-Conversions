document.addEventListener("DOMContentLoaded", function () {

    var input = document.getElementById('TemperatureInput');
    var result = document.getElementById('TemperatureOutput');
    var inputType = document.getElementById('TemperatureInputType');
    var resultType = document.getElementById('TemperatureOutputType');
    
    input.addEventListener("keyup",myTemperatureResult);
    inputType.addEventListener("change",myTemperatureResult);
    resultType.addEventListener("change",myTemperatureResult);
    
    option_from = inputType.value;
    option_to = resultType.value;
    
    function myTemperatureResult() {
        var option_from = inputType.value;
        var option_to = resultType.value;

        if (option_from === "fahrenheit" && option_to === "fahrenheit") {
            result.value = input.value;
        } else if (option_from === "fahrenheit" && option_to === "celsius") {
            result.value = Number(input.value - 32) * 5/9;
        }
    
        if (option_from === "celsius" && option_to === "fahrenheit") {
            result.value = Number(input.value * 9/5) + 32;
        } else if (option_from === "celsius" && option_to === "celsius") {
            result.value = input.value;
        }
    }
    });