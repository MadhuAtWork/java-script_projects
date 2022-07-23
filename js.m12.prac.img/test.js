// function OnLoadCompleted(){
//     var obj = document.getElementById("clickimg1");
//     obj.addEventListener("click" , myfunction);
//     function myfunction(){
//     var myobj = document.getElementById("imgdata1").value;
    
//     var testdiv = document.createElement("div")
//     testdiv.style.width="400px";
//     testdiv.style.height="400px";
//     testdiv.style.background="lightyellow";
//     testdiv.innerHTML= myobj;
//  document.getElementById("parentid").appendChild(testdiv);
// }
// }
var test;
function OnLoadCompleted(){
    test = document.getElementById("parentid");
}


function selectImg(event){
    //var container = document.getElementById("parentid");;
    var selectedId = event.target.id;
    var temp  = selectedId.split("_");
    var currentSelectedItem = temp[1];
    console.log(currentSelectedItem);
    test.innerHTML = "";


    var elem = document.createElement("img");
    elem.setAttribute("src", currentSelectedItem + ".jpg");
    elem.setAttribute("height", "768");
    elem.setAttribute("width", "1024");
    elem.setAttribute("alt", "Flower");
    // elem.style.width="600px";
    // elem.style.height="600px";
    // elem.style.alt="alt";
    // elem.style.src=currentSelectedItem + ".jpg";

    test.appendChild(elem);

   // container.append(elem); 

}