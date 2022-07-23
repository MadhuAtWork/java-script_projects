var users = [{
    "name": "jack",
    "age": 40
},
{
    "name": "devin",
    "age": 35
},
{
    "name": "devid",
    "age": 30
},
{
    "name": "kim",
    "age": 40
}
]
function OnLoadCompleted(){
var obj = document.getElementById("btnid") ;
obj.addEventListener("click", myFunction);
function myFunction(){
    var testdiv = document.createElement("div")
    testdiv.style.width="400px";
    testdiv.style.height="50px";
    testdiv.style.background="lightblue";
    testdiv.style.margin="10px";
    // testdiv.innerHTML="...";
    for(k in users){
    var myobj = users[k];
    testdiv.innerHTML=JSON.stringify(myobj);
    document.getElementById("container").appendChild(testdiv);
}

}

}
