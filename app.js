let input ="";

function ShowValue(btn){
    input = input + btn.value;
    document.getElementById("result").innerHTML = input;
}

function quickMath(){
    document.getElementById("result").innerHTML = eval(input);
}
function Reset(btn){
    document.getElementById("result").innerHTML = "0";
    input = "";
}
function Rem1(btn){
    input = input.replace(input.slice(-1), "");
    document.getElementById("result").innerHTML = input;
    if (input === ""){
        document.getElementById("result").innerHTML = "0"
    } 
}