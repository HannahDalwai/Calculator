let sum = "";
function addToSum(Operator){
    sum = sum + operator;
    console.log(sum);
    document.getElementById("output").innertext = sum;
}
function evaluateSum(){
    sum = eval(sum)
    document.getElementById("output").innertext = sum;
}
function clearSum(){

}