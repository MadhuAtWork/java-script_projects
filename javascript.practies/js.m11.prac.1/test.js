
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

function OnLoadCompleted() {
    for (k in users) {
        var textdiv = document.createElement("div");
        textdiv.style.width = "400px";
        textdiv.style.height = "50px";
        textdiv.style.background = "red";
        textdiv.style.color = "white";
        textdiv.style.margin = "10px";
        var myobj = users[k];
        textdiv.innerHTML = JSON.stringify(myobj);
        document.getElementById("uerinput").appendChild(textdiv);
    }
}

function addlistbtn() {
    // for (t in users) {
    var testdiv = document.createElement("div");
    testdiv.style.width = "400px";
    testdiv.style.height = "50px";
    testdiv.style.background = "blue";
    testdiv.style.color = "white";
    testdiv.style.margin = "10px";
    
    for (t in users) {
        var obj = users[t];
         testdiv.innerHTML=JSON.stringify(obj);
    document.getElementById("uerinput").appendChild(testdiv);
    }
}
