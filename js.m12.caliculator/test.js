
var test;
function OnLoadCompleted(){
test = document.getElementById("parentid");

}

function clickload(event){
  var newinput =event;
test.innerHTML+=newinput;

}

function btnclear(){
    test.innerHTML="";
}

function submitid(){
  var output = eval(test);
    test.innerHTML=parseInt(output);
    // console.log(test);
}

