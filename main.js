// Time
var time1 = [28.10,25.54,19.65,17.63,15.32,14.46]
var time2 = [40.11,31.44,26.56,21.69,19.76,17.73]
var time3 = [42.32,36.31,28.56,26.49,22.62,19.94]

// Mass
var mass = [0.05,0.1,0.15,0.2,0.25,0.3]

// Volume
var volume = 0.005

// Diameter of Nozzle
var diameter = 0.008

// Density
var density = 998.23

// Cross-sectional Area Function
function circularCrossSectionalArea(value,type){
    let result;
    if (type == "radius"){
        let calc = Math.PI * (value * value)
        result = calc.toPrecision(4)
    }
    else if(type == 'diameter'){
        let calc = Math.PI * ((value * value)/4) 
        result = calc.toPrecision(4)
    }
    return result
}

function volumetricFlowRate(volume,time){
    let result = [];

    for(let i = 0 ; i < time.length ; i++){
        let calc = volume / time[i]
        result[i] = calc.toFixed(5)
    }
    
    return result
}
