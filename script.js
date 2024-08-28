let temp = 17;

function convertToFarenheit(temp){
let tempFar= (temp * (9/5)+32);
console.log(tempFar.toFixed(1))
}

function convertToCelsius(temp){
    let tempCel= (temp - 32) * (5/9);
    console.log(tempCel.toFixed(1))
}

convertToCelsius(temp);
convertToFarenheit(temp);