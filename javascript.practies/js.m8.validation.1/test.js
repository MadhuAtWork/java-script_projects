function validation(){
    var x = document.getElementById("user").value ;
    var y = document.getElementById("pswd").value ;
    if(x =="" || x == undefined || x == null){
        alert("plz enter user name")
    }else if(y == "" || y == undefined || y == null){
        alert("plz enter password")
    }else{
       alert("login success")
    }
}