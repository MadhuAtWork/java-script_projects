
function addtoList(){
    var ennumber = document.getElementById("adharno").value;
    var endate = document.getElementById("date").value;
    var testdiv = document.createElement("div");
    testdiv.style.width="200px";
    testdiv.style.height="60px";
    testdiv.style.margin="10px";
    testdiv.style.background="red";
    testdiv.style.color="white";
    testdiv.innerHTML=ennumber + ":" + endate;
    document.getElementById("vaccine").appendChild(testdiv);

}

var studentData = [
    {
         "id":1,
         "marks":90,
         "name":"math"
    },
    {
         "id":2,
         "marks":50,
         "name":"reading"
    },
    {
         "id":3,
         "marks":30,
         "name":"english"
    },
    {
         "id":4,
         "marks":20,
         "name":"science"
    },
    {
         "id":5,
         "marks":10,
         "name":"social studies"
    }
 ]