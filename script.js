function getHistory() {
    return document.getElementById("history-value").innerHTML
}
function printHistory(num) {
    document.getElementById("history-value").innerHTML=num;

}
function getoutput() {
    return document.getElementById("output-value").innerHTML;
}

function printoutput(num) {
    if(num=="") {
        document.getElementById(output-value).innerHTML=num;
    }
    else{
        document.getElementById("output-value").innerHTML=getFormattedNumber(num);
    }
}
function getFormattedNumber(num) {
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;
}


var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++) {
    operator[i].addEventListener('click',function() {
        if(this.id=="clear") {
            printHistory("");
            printoutput("");
        }
    })
}
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,''));
}

var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++) {
    number[i].addEventListener('click',function() {
        var output=reverseNumberFormat(getoutput());
        if(output!=NaN) {
            output=output+this.id;
            printoutput(output)
        }
    })
}