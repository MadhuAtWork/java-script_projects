function validation(){
    var x = document.getElementById("user").value;
    var y = document.getElementById("pswd").value;
    var z = document.getElementById("status");
     z.innerHTML=" ";

        if(x == ""|| x == undefined  ||  x == null){
            z.innerHTML = "enter user name";
        }else if(y == ""|| y == undefined  ||  y == null){
            z.innerHTML = "enter password";
        }else {
            z.innerHTML ="login success";
        }
}