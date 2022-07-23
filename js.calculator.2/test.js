//   var oneinput =document.getElementById("oneid").value;
//   var twoinput =document.getElementById("twoid").value;
//   var threeinput =document.getElementById("threeid").value;
//   var fourinput =document.getElementById("fourid").value;
//   var fiveinput =document.getElementById("fiveid").value;
//   var sixinput =document.getElementById("sixid").value;
//   var seveninput =document.getElementById("sevenid").value;
//   var eightinput =document.getElementById("eightid").value;
//   var nineinput =document.getElementById("nineid").value;
//   var zeroinput =document.getElementById("zeroid").value;
//   var addinput =document.getElementById("addid").value;
//   var minusinput =document.getElementById("minusid").value;
//   var multipayinput =document.getElementById("multipayid").value;
//   var divideinput =document.getElementById("divideid").value;
//   var percentageinput =document.getElementById("persentageid").value;


var test;
function OnLoadCompleted(){
test = document.getElementById("parentid");

}

function clickload(event){
    var x = event ;
test.innerHTML += x;
 
}
function btnclear(){
    test.innerHTML="";
}
function submitid(){
    var num1 = [1,2,3,4,5,6,7,8,9,0];
    var num2 = [1,2,3,4,5,6,7,8,9,0];
    var oper = ['+','-','*','/','%'] ;


if(oper == '+'){
test.innerHTML =parseInt('num1+num2');
}else if(oper == '*'){
test.innerHTML =parseInt( num1*num2);
}else if(oper == '/'){
    test.innerHTML = parseInt(num1/num2);
}else if(oper = '-'){
    test.innerHTML = parseInt(num1-num2);
 }else if(oper== '%'){
     test.innerHTML=parseInt(num1%num2);
 }else {
     test.innerHTML= num1;
 }

}
