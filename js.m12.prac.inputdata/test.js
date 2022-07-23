function btndata(){
    var obj = document.getElementById("dtinput").value;
    var colorCode = document.getElementById("clorbtn").value;
    var fontsizecode = document.getElementById("selectid").value;
    var fontweightcode = document.getElementById("weightbtn").value;
    var fontstylecode = document.getElementById("stylebtn").value;
    
    // console.log(fontweightcode)
// console.log(colorCode)
    var testdiv = document.createElement("div");
    testdiv.style.widfontsizecodeth="400px";
    testdiv.style.heught="20px";
    testdiv.style.background="lightblue";
    testdiv.style.margin="10px";
    testdiv.style.fontSize =fontsizecode;
    testdiv.style.fontStyle = fontstylecode;
    testdiv.style.fontWeight =fontweightcode;
    testdiv.style.color =colorCode;
    

    testdiv.innerHTML=obj;
    if(obj == ""){
        alert("plz enter text")
    }else{
         document.getElementById("inputdata").append(testdiv);

    }
}

