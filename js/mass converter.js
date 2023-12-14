document.addEventListener("DOMContentLoaded", function () {

    var input = document.getElementById('MassInput');
    var result = document.getElementById('MassOutput');
    var inputType = document.getElementById('MassInputType');
    var resultType = document.getElementById('MassOutputType');
    var option_from,option_to;
    
    input.addEventListener("keyup",myMassResult);
    inputType.addEventListener("change",myMassResult);
    resultType.addEventListener("change",myMassResult);
    
    option_from = inputType.value;
    option_to   = resultType.value;
    
    
    function myMassResult(){
    
    var option_from = inputType.value;
    var	option_to = resultType.value;
    
        if(option_from === "ounce" && option_to==="ounce"){
            result.value = input.value
        }else if(option_from === "ounce" && option_to==="pound"){
            result.value = Number(input.value) / 16;
        }else if(option_from === "ounce" && option_to==="kilogram"){
            result.value = Number(input.value) / 35.274
        }else if(option_from === "ounce" && option_to==="gram"){
            result.value = Number(input.value) * 28.35
        }else if(option_from === "ounce" && option_to==="tonne"){
            result.value = Number(input.value) / 35270;
        }
    
      if(option_from === "pound" && option_to==="ounce"){
            result.value = Number(input.value) * 16;
        }else if(option_from === "pound" && option_to==="pound"){
            result.value = input.value
        }else if(option_from === "pound" && option_to==="kilogram"){
            result.value = Number(input.value) / 2.205
        }else if(option_from === "pound" && option_to==="gram"){
            result.value = Number(input.value) * 453.6;
        }else if(option_from === "pound" && option_to==="tonne"){
            result.value = Number(input.value) / 2205;
        }
    
      if(option_from === "kilogram" && option_to==="ounce"){
            result.value = Number(input.value) * 35.274;
        }else if(option_from === "kilogram" && option_to==="pound"){
            result.value = Number(input.value) * 2.205;
        }else if(option_from === "kilogram" && option_to==="kilogram"){
            result.value = input.value
        }else if(option_from === "kilogram" && option_to==="gram"){
            result.value = Number(input.value) * 1000;
        }else if(option_from === "kilogram" && option_to==="tonne"){
            result.value = Number(input.value) / 1000;
        }
    
      if(option_from === "gram" && option_to==="ounce"){
            result.value = Number(input.value) / 28.35;
        }else if(option_from === "gram" && option_to==="pound"){
            result.value = Number(input.value) / 453.6;
        }else if(option_from === "gram" && option_to==="kilogram"){
            result.value = Number(input.value) / 1000;
        }else if(option_from === "gram" && option_to==="gram"){
            result.value = input.value
        }else if(option_from === "gram" && option_to==="tonne"){
            result.value = Number(input.value) / 1e+6;
        }
    
      if(option_from === "tonne" && option_to==="ounce"){
            result.value = Number(input.value) * 35270;
        }else if(option_from === "tonne" && option_to==="pound"){
            result.value = Number(input.value) * 2205;
        }else if(option_from === "tonne" && option_to==="kilogram"){
            result.value = Number(input.value) * 1000;
        }else if(option_from === "tonne" && option_to==="gram"){
            result.value = Number(input.value) * 1e+6;
        }else if(option_from === "tonne" && option_to==="tonne"){
            result.value = input.value
      }
    
    }
})