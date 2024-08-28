let temp = 17;

function convertToFarenheit(temp){
tempFar= (temp * (9/5)+32);
console.log(tempFar)
}

function convertToCelsius(temp){
    tempCel= (temp - 32) * (5/9);
    console.log(tempCel)
}

convertToCelsius(temp);
convertToFarenheit(temp);