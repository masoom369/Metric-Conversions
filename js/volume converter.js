document.addEventListener("DOMContentLoaded", function () {

    var input = document.getElementById('VolumeInput');
    var result = document.getElementById('VolumeOutput');
    var inputType = document.getElementById('VolumeInputType');
    var resultType = document.getElementById('VolumeOutputType');
    var option_from,option_to;
    
    input.addEventListener("keyup",myVolumeResult);
    inputType.addEventListener("change",myVolumeResult);
    resultType.addEventListener("change",myVolumeResult);
    
    option_from = inputType.value;
    option_to   = resultType.value;
    
    
    function myVolumeResult(){
    
    var	option_from = inputType.value;
    var	option_to = resultType.value;
    
        if(option_from === "fluid ounce" && option_to==="fluid ounce"){
            result.value = input.value
        }else if(option_from === "fluid ounce" && option_to==="us gallon"){
            result.value = Number(input.value) / 128;
        }else if(option_from === "fluid ounce" && option_to==="milliliter"){
            result.value = Number(input.value) * 20.574;
        }else if(option_from === "fluid ounce" && option_to==="liter"){
            result.value = Number(input.value) / 33.814;
        }else if(option_from === "fluid ounce" && option_to==="cubic meter"){
            result.value = Number(input.value) / 264.2;
        }else if(option_from === "fluid ounce" && option_to==="cubic foot"){
            result.value = Number(input.value) / 7.48;
        }else if(option_from === "fluid ounce" && option_to==="cubic yard"){
            result.value = Number(input.value) / 202;
        }
    
      if(option_from === "us gallon" && option_to==="fluid ounce"){
            result.value = Number(input.value) * 128;
        }else if(option_from === "us gallon" && option_to==="us gallon"){
            result.value = input.value
        }else if(option_from === "us gallon" && option_to==="milliliter"){
            result.value = Number(input.value) * 3785;
        }else if(option_from === "us gallon" && option_to==="liter"){
            result.value = Number(input.value) * 3.785;
        }else if(option_from === "us gallon" && option_to==="cubic meter"){
            result.value = Number(input.value) / 264.2;
        }else if(option_from === "us gallon" && option_to==="cubic foot"){
            result.value = Number(input.value) / 7.48;
        }else if(option_from === "us gallon" && option_to==="cubic yard"){
            result.value = Number(input.value) / 202;
        }
    
      if(option_from === "milliliter" && option_to==="fluid ounce"){
            result.value = Number(input.value) / 29.574;
        }else if(option_from === "milliliter" && option_to==="us gallon"){
            result.value = Number(input.value) / 3785;
        }else if(option_from === "milliliter" && option_to==="milliliter"){
            result.value = input.value
        }else if(option_from === "milliliter" && option_to==="liter"){
            result.value = Number(input.value) / 1000;
        }else if(option_from === "milliliter" && option_to==="cubic meter"){
            result.value = Number(input.value) / 1e+6;
        }else if(option_from === "milliliter" && option_to==="cubic foot"){
            result.value = Number(input.value) / 28320;
        }else if(option_from === "milliliter" && option_to==="cubic yard"){
            result.value = Number(input.value) / 764600;
        }
    
      if(option_from === "liter" && option_to==="fluid ounce"){
            result.value = Number(input.value) * 33.814;
        }else if(option_from === "liter" && option_to==="us gallon"){
            result.value = Number(input.value) / 3.785;
        }else if(option_from === "liter" && option_to==="milliliter"){
            result.value = Number(input.value) * 1000;
        }else if(option_from === "liter" && option_to==="liter"){
            result.value = input.value
        }else if(option_from === "liter" && option_to==="cubic meter"){
            result.value = Number(input.value) / 1000;
        }else if(option_from === "liter" && option_to==="cubic foot"){
            result.value = Number(input.value) / 28.317;
        }else if(option_from === "liter" && option_to==="cubic yard"){
            result.value = Number(input.value) / 764.6;
        }
    
      if(option_from === "cubic meter" && option_to==="fluid ounce"){
            result.value = Number(input.value) * 33810;
        }else if(option_from === "cubic meter" && option_to==="us gallon"){
            result.value = Number(input.value) * 264.2;
        }else if(option_from === "cubic meter" && option_to==="milliliter"){
            result.value = Number(input.value) * 1e+6;
        }else if(option_from === "cubic meter" && option_to==="liter"){
            result.value = Number(input.value) * 1000;
        }else if(option_from === "cubic meter" && option_to==="cubic meter"){
            result.value = input.value
        }else if(option_from === "cubic meter" && option_to==="cubic foot"){
            result.value = Number(input.value) * 35.315;
        }else if(option_from === "cubic meter" && option_to==="cubic yard"){
            result.value = Number(input.value) * 1.308;
        }
    
      if(option_from === "cubic foot" && option_to==="fluid ounce"){
            result.value = Number(input.value) * 957.5;
        }else if(option_from === "cubic foot" && option_to==="us gallon"){
            result.value = Number(input.value) * 7.481;
        }else if(option_from === "cubic foot" && option_to==="milliliter"){
            result.value = Number(input.value) * 28320;
        }else if(option_from === "cubic foot" && option_to==="liter"){
            result.value = Number(input.value) * 28.317;
        }else if(option_from === "cubic foot" && option_to==="cubic meter"){
            result.value = Number(input.value) / 35.315;
        }else if(option_from === "cubic foot" && option_to==="cubic foot"){
            result.value = input.value
        }else if(option_from === "cubic foot" && option_to==="cubic yard"){
            result.value = Number(input.value) / 27;
        }
    
      if(option_from === "cubic yard" && option_to==="fluid ounce"){
            result.value = Number(input.value) * 25850;
        }else if(option_from === "cubic yard" && option_to==="us gallon"){
            result.value = Number(input.value) * 202
        }else if(option_from === "cubic yard" && option_to==="milliliter"){
            result.value = Number(input.value) * 764600;
        }else if(option_from === "cubic yard" && option_to==="liter"){
            result.value = Number(input.value) * 764.6;
        }else if(option_from === "cubic yard" && option_to==="cubic meter"){
            result.value = Number(input.value) / 1.308;
        }else if(option_from === "cubic yard" && option_to==="cubic foot"){
            result.value = Number(input.value) * 27
        }else if(option_from === "cubic yard" && option_to==="cubic yard"){
            result.value = input.value
        }
    
    }
})