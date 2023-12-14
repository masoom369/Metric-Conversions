document.addEventListener("DOMContentLoaded", function () {

    var input = document.getElementById('AreaInput');
    var result = document.getElementById('AreaOutput');
    var inputType = document.getElementById('AreaInputType');
    var resultType = document.getElementById('AreaOutputType');
    var option_from,option_to;
    
    input.addEventListener("keyup",myAreaResult);
    inputType.addEventListener("change",myAreaResult);
    resultType.addEventListener("change",myAreaResult);
    
    option_from = inputType.value;
    option_to   = resultType.value;
    
    
    function myAreaResult(){
    
    var	option_from = inputType.value;
    var	option_to = resultType.value;
    
        if(option_from === "square-kilometer" && option_to==="square-kilometer"){
            result.value = input.value
        }else if(option_from === "square-kilometer" && option_to==="square-millimeter"){
            result.value = Number(input.value) * 1e+12;
        }else if(option_from === "square-kilometer" && option_to==="square-meter"){
            result.value = Number(input.value) * 1e+6;
        }else if(option_from === "square-kilometer" && option_to==="square-yard"){
            result.value = Number(input.value) * 1.196e+6;
        }else if(option_from === "square-kilometer" && option_to==="square-foot"){
            result.value = Number(input.value) * 1.076e+7;
        }else if(option_from === "square-kilometer" && option_to==="square-inch"){
            result.value = Number(input.value) * 1.55e+9;
        }else if(option_from === "square-kilometer" && option_to==="square-mile"){
            result.value = Number(input.value) / 2.59;
        }else if(option_from === "square-kilometer" && option_to==="acre"){
            result.value = Number(input.value) * 247.1;
        }else if(option_from === "square-kilometer" && option_to==="hectare"){
            result.value = Number(input.value) * 100;
      }
    
      if(option_from === "square-meter" && option_to==="square-kilometer"){
            result.value = Number(input.value) / 1e+6;
        }else if(option_from === "square-meter" && option_to==="square-millimeter"){
            result.value = Number(input.value) * 1e+6;
        }else if(option_from === "square-meters" && option_to==="square-meter"){
            result.value = input.value
        }else if(option_from === "square-meter" && option_to==="square-yard"){
            result.value = Number(input.value) * 1.196;
        }else if(option_from === "square-meter" && option_to==="square-foot"){
            result.value = Number(input.value) * 10.764;
        }else if(option_from === "square-meter" && option_to==="square-inche"){
            result.value = Number(input.value) * 1550;
        }else if(option_from === "square-meter" && option_to==="square-mile"){
            result.value = Number(input.value) / 2.59e+6;
        }else if(option_from === "square-meter" && option_to==="acre"){
            result.value = Number(input.value) / 4047;
      }else if(option_from === "square-meter" && option_to==="hectare"){
            result.value = Number(input.value) / 10000;
      }
    
      if(option_from === "square-millimeter" && option_to==="square-kilometer"){
            result.value = Number(input.value) / 1e+12;
        }else if(option_from === "square-millimeter" && option_to==="square-millimeter"){
            result.value = input.value
        }else if(option_from === "square-millimeter" && option_to==="square-meter"){
            result.value = Number(input.value) / 1e+6
        }else if(option_from === "square-millimeter" && option_to==="square-yard"){
            result.value = Number(input.value) / 836100;
        }else if(option_from === "square-millimeter" && option_to==="square-foot"){
            result.value = Number(input.value) / 92900;
        }else if(option_from === "square-millimeter" && option_to==="square-inch"){
            result.value = Number(input.value) / 645.2;
        }else if(option_from === "square-millimeter" && option_to==="square-mile"){
            result.value = Number(input.value) / 2.59e+12;
        }else if(option_from === "square-millimeter" && option_to==="acre"){
            result.value = Number(input.value) / 4.047e+9;
      }else if(option_from === "square-millimeter" && option_to==="hectare"){
            result.value = Number(input.value) / 1e+10;
      }
    
      if(option_from === "square-yard" && option_to==="square-kilometer"){
            result.value = Number(input.value) / 1.196e+6;
        }else if(option_from === "square-yard" && option_to==="square-millimeter"){
            result.value = Number(input.value) * 836100;
        }else if(option_from === "square-yard" && option_to==="square-meter"){
            result.value = Number(input.value) / 1.196;
        }else if(option_from === "square-yard" && option_to==="square-yard"){
            result.value = input.value
        }else if(option_from === "square-yard" && option_to==="square-foot"){
            result.value = Number(input.value) * 9;
        }else if(option_from === "square-yard" && option_to==="square-inoo"){
            result.value = Number(input.value) * 1296;
        }else if(option_from === "square-yard" && option_to==="square-mile"){
            result.value = Number(input.value) / 3.098e+6;
        }else if(option_from === "square-yard" && option_to==="acre"){
            result.value = Number(input.value) / 4840;
      }else if(option_from === "square-yard" && option_to==="hectare"){
            result.value = Number(input.value) / 11960;
      }
    
      if(option_from === "square-foot" && option_to==="square-kilometer"){
            result.value = Number(input.value) / 1.076e+7;
        }else if(option_from === "square-foot" && option_to==="square-millimeter"){
            result.value = Number(input.value) * 92900;
        }else if(option_from === "square-foot" && option_to==="square-meter"){
            result.value = Number(input.value) / 10.764;
        }else if(option_from === "square-foot" && option_to==="square-yard"){
            result.value = Number(input.value) / 9;
        }else if(option_from === "square-foot" && option_to==="square-foot"){
            result.value = input.value
        }else if(option_from === "square-foot" && option_to==="square-inch"){
            result.value = Number(input.value) * 144;
        }else if(option_from === "square-foot" && option_to==="square-mile"){
            result.value = Number(input.value) / 2.788e+7;
        }else if(option_from === "square-foot" && option_to==="acre"){
            result.value = Number(input.value) / 43560;
      }else if(option_from === "square-foot" && option_to==="hectare"){
            result.value = Number(input.value) / 107600;
      }
    
      if(option_from === "square-inch" && option_to==="square-kilometer"){
            result.value = Number(input.value) / 1.55e+9;
        }else if(option_from === "square-inch" && option_to==="square-millimeter"){
            result.value = Number(input.value) * 645.2;
        }else if(option_from === "square-inch" && option_to==="square-meter"){
            result.value = Number(input.value) / 1550;
        }else if(option_from === "square-inch" && option_to==="square-yard"){
            result.value = Number(input.value) / 1296;
        }else if(option_from === "square-inch" && option_to==="square-foot"){
            result.value = Number(input.value) / 144;
        }else if(option_from === "square-inch" && option_to==="square-inch"){
            result.value = input.value
        }else if(option_from === "square-inch" && option_to==="square-mile"){
            result.value = Number(input.value) / 4.014e+9;
        }else if(option_from === "square-inch" && option_to==="acre"){
            result.value = Number(input.value) / 6.273e+6;
      }else if(option_from === "square-inch" && option_to==="hectare"){
            result.value = Number(input.value) / 1.55e+7;
      }
    
      if(option_from === "acre" && option_to==="square-kilometer"){
            result.value = Number(input.value) / 247.1;
        }else if(option_from === "acre" && option_to==="square-millimeter"){
            result.value = Number(input.value) * 4.047e+9;
        }else if(option_from === "acre" && option_to==="square-meter"){
            result.value = Number(input.value) * 4047
        }else if(option_from === "acre" && option_to==="square-yard"){
            result.value = Number(input.value) * 4840;
        }else if(option_from === "acre" && option_to==="square-foot"){
            result.value = Number(input.value) * 43560;
        }else if(option_from === "acre" && option_to==="square-inche"){
            result.value = Number(input.value) * 6.273e+6;
        }else if(option_from === "acre" && option_to==="square-mile"){
            result.value = Number(input.value) / 640;
        }else if(option_from === "acre" && option_to==="acre"){
            result.value = input.value
      }else if(option_from === "acre" && option_to==="hectare"){
            result.value = Number(input.value) / 2.471;
      }
    
      if(option_from === "hectare" && option_to==="square-kilometer"){
            result.value = Number(input.value) / 100;
        }else if(option_from === "hectare" && option_to==="square-millimeter"){
            result.value = Number(input.value) * 1e+10;
        }else if(option_from === "hectare" && option_to==="square-meter"){
            result.value = Number(input.value) * 10000
        }else if(option_from === "hectare" && option_to==="square-yard"){
            result.value = Number(input.value) * 11960;
        }else if(option_from === "hectare" && option_to==="square-foot"){
            result.value = Number(input.value) * 107600;
        }else if(option_from === "hectare" && option_to==="square-inch"){
            result.value = Number(input.value) * 1.55e+7;
        }else if(option_from === "hectare" && option_to==="square-mile"){
            result.value = Number(input.value) / 259;
        }else if(option_from === "hectare" && option_to==="acre"){
            result.value = Number(input.value) * 2.471;
      }else if(option_from === "hectare" && option_to==="hectare"){
            result.value = input.value
      }
    
    }
})

