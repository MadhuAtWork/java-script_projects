
 
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
        "name":"socialstudies"
   }
]


 function databtn(){

   var dtinput = document.getElementById("inputdata").value;
    
   var testdiv = document.createElement("div");
     testdiv.style.width="400px";
     testdiv.style.height="80px";
     testdiv.style.margin="20px";
     testdiv.style.background="red";
     testdiv.style.color="white";

     testdiv.innerHTML= "invalid";

     for(var k in studentData){

      if(dtinput == studentData[k].name){
         var obj = studentData[k];
         testdiv.innerHTML = JSON.stringify(obj);
      }

     }

     document.getElementById("parentid").appendChild(testdiv);
   
//      for(i=0 ;i<1 ; i++){
// //      for(var k in studentData){
// //  var myobj = studentData[k];
    
     

//    //   testdiv.innerHTML= ;
//    var result =  JSON.stringify(studentData);
//      if( dtinput == "math" ){
       

//      }else if(dtinput == "reading"){
//         testdiv.innerHTML=result[1];
        
//      }else if(dtinput == "english"){
//         testdiv.innerHTML=result[2];

//      }else if(dtinput == "science"){
//         testdiv.innerHTML=result[3];

//      }else if(dtinput == "socialstudies"){
//         testdiv.innerHTML=result[4];

//      }else{
//         testdiv.innerHTML="invalid";
//      }
    
//      }

 }