document.addEventListener("DOMContentLoaded", function () {

    var input = document.getElementById('LengthInput');
    var result = document.getElementById('LengthOutput');
    var inputType = document.getElementById('LengthInputType');
    var resultType = document.getElementById('LengthOutputType');
    var option_from,option_to;
    
    input.addEventListener("keyup",myLengthResult);
    inputType.addEventListener("change",myLengthResult);
    resultType.addEventListener("change",myLengthResult);
    
    option_from = inputType.value;
    option_to   = resultType.value;
    
    
    function myLengthResult(){
    
    var	option_from = inputType.value;
    var	option_to = resultType.value;
    
        if(option_from === "meter" && option_to==="kilometer"){
            result.value = Number(input.value) / 1000;
        }else if(option_from === "meter" && option_to==="millimeter"){
            result.value = Number(input.value) * 1000;
        }else if(option_from === "meter" && option_to==="meter"){
            result.value = input.value
        }else if(option_from === "meter" && option_to==="yard"){
            result.value = Number(input.value) * 1.094;
        }else if(option_from === "meter" && option_to==="foot"){
            result.value = Number(input.value) * 3.281;
        }else if(option_from === "meter" && option_to==="inch"){
            result.value = Number(input.value) * 39.37;
        }else if(option_from === "meter" && option_to==="mile"){
            result.value = Number(input.value) / 1609;
        }
    
    
        if(option_from === "mile" && option_to==="kilometer"){
            result.value = Number(input.value) * 1.609;
        }else if(option_from === "mile" && option_to==="millimeter"){
            result.value = Number(input.value) * 1.609e+6;
        }else if(option_from === "mile" && option_to==="meter"){
            result.value = Number(input.value) * 1609;
        }else if(option_from === "mile" && option_to==="yard"){
            result.value = Number(input.value) * 1760;
        }else if(option_from === "mile" && option_to==="foot"){
            result.value = Number(input.value) * 5280;
        }else if(option_from === "mile" && option_to==="inch"){
            result.value = Number(input.value) * 63360;
        }else if(option_from === "mile" && option_to==="mile"){
            result.value = input.value
        }
    
    
        if(option_from === "foot" && option_to==="kilometer"){
            result.value = Number(input.value) / 3281;
        }else if(option_from === "foot" && option_to==="millimeter"){
            result.value = Number(input.value) * 304.8;
        }else if(option_from === "foot" && option_to==="meter"){
            result.value = Number(input.value) / 3.281
        }else if(option_from === "foot" && option_to==="yard"){
            result.value = Number(input.value) / 3;
        }else if(option_from === "foot" && option_to==="foot"){
            result.value = input.value
        }else if(option_from === "foot" && option_to==="inch"){
            result.value = Number(input.value) * 12;
        }else if(option_from === "foot" && option_to==="mile"){
            result.value = Number(input.value) / 5280;
        }
    
    
        if(option_from === "yard" && option_to==="kilometer"){
            result.value = Number(input.value) / 1094;
        }else if(option_from === "yard" && option_to==="millimeter"){
            result.value = Number(input.value) * 914.4;
        }else if(option_from === "yard" && option_to==="meter"){
            result.value = Number(input.value) / 1.094; 
        }else if(option_from === "yard" && option_to==="yard"){
            result.value = input.value
        }else if(option_from === "yard" && option_to==="foot"){		
            result.value = Number(input.value) * 3;
        }else if(option_from === "yard" && option_to==="inch"){
            result.value = Number(input.value) * 36;
        }else if(option_from === "yard" && option_to==="mile"){
            result.value = Number(input.value) / 1760;
        }
    
    
        if(option_from === "inch" && option_to==="kilometer"){
            result.value = Number(input.value) / 39370;
        }else if(option_from === "inch" && option_to==="millimeter"){
            result.value = Number(input.value) * 25.4;
        }else if(option_from === "inch" && option_to==="meter"){
            result.value = Number(input.value) / 39.37;
        }else if(option_from === "inch" && option_to==="yard"){
            result.value = Number(input.value) / 36;
        }else if(option_from === "inch" && option_to==="foot"){
            result.value = Number(input.value) / 12;
        }else if(option_from === "inch" && option_to==="inch"){
            result.value = input.value
        }else if(option_from === "inch" && option_to==="mile"){
            result.value = Number(input.value) / 63360;
        }
    
    
        if(option_from === "kilometer" && option_to==="kilometer"){
            result.value = input.value
        }else if(option_from === "kilometer" && option_to==="millimeter"){
            result.value = Number(input.value) * 1e+6;
        }else if(option_from === "kilometer" && option_to==="meter"){
            result.value = Number(input.value) * 1000;
        }else if(option_from === "kilometer" && option_to==="yard"){
            result.value = Number(input.value) * 1094;
        }else if(option_from === "kilometer" && option_to==="foot"){
            result.value = Number(input.value) * 3281;
        }else if(option_from === "kilometer" && option_to==="inch"){
            result.value = Number(input.value) * 39370;
        }else if(option_from === "kilometer" && option_to==="mile"){
            result.value = Number(input.value) / 1.609;
        }
    
    
        if(option_from === "millimeter" && option_to==="kilometer"){
            result.value = Number(input.value) / 1e+6;
        }else if(option_from === "millimeter" && option_to==="millimeter"){
            result.value = input.value
        }else if(option_from === "millimeter" && option_to==="meter"){
            result.value = Number(input.value) / 1000;
        }else if(option_from === "millimeter" && option_to==="yard"){
            result.value = Number(input.value) / 914.4;
        }else if(option_from === "millimeter" && option_to==="foot"){
            result.value = Number(input.value) / 304.8;
        }else if(option_from === "millimeter" && option_to==="inch"){
            result.value = Number(input.value) / 25.4;
        }else if(option_from === "millimeter" && option_to==="mile"){
            result.value = Number(input.value) / 1.609e+6;
        }
        
    }
})