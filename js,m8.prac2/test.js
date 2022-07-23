function validateForm(){
    var usertest = document.getElementById("userN").value ;
    var pswTest = document.getElementById("psw") .value ;

    var showStatus = document.getElementById("status");  
    showStatus.innerHTML = "";


    if(usertest == "" || usertest == undefined || usertest == null){
        alert("HELLOO !!!!")
        showStatus.innerHTML = "username missing !!!!";
    }else if(pswTest == "" || pswTest == undefined || pswTest == null){
        alert("missing password")
        showStatus.innerHTML = "password missing !!!!";
    }else{
        showStatus.innerHTML = "login succses !!!!";
    }
}




