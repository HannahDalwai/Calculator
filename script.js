let sum = "";

function addToSum(operator){
    sum = sum + operator;
    console.log(sum);
    document.getElementById("output").innertext = sum;
}

function evaluateSum(){
    sum = eval(sum);
    document.getElementById("output").innertext = sum;
}

function clearSum(){
sum = "";
document.getElementById("output").innertext = sum;
}

function deleteChar(){
    sum = sum.slice(0, -1);
    document.getElementById("output").innertext = sum;
}
