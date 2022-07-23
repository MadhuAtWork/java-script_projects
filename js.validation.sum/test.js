// function validation(){
//     var a = document.getElementById("sum1").value ;
//     var b = document.getElementById("sum2").value ;
//     var c = document.getElementById("sum3").value ;
//     var d = document.getElementById("sum4").value ;
//     var e = document.getElementById("sum5").value ;
//     var f = document.getElementById("sum6").value ;
//     var k=parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e)+parseInt(f);
//     var p =(parseInt(k) /600)*100;
//     var x = document.getElementById("marks");
//      x.innerHTML=k +" ......." +" persentage:"+p;
//     var y = document.getElementById("grade");
//      y.innerHTML=" " ;
//     var z = document.getElementById("status");
//      z.innerHTML=" ";


//      if(k>400 && a>35 && b>35 && c>35 && d>35 && e>35 && f>35 ){
//          z.innerHTML="firstclass";
//      }else if(k<400 && k>=216 && a>35 && b>35 && c>35 && d>35 && e>35 && f>35  ){
//         z.innerHTML=" second class";
//      }else{
//         z.innerHTML=" fail";
//      }


//      if (a>35 && b>35 && c>35 && d>35 && e>35 && f>35){
//          y.innerHTML="pass";
//      }else{
//            y.innerHTML="fail";
//      }


//      if(a=="" || a==undefined || a==null || a<0 || a > 100 ||isNaN(a)){
//          alert("enter telugu valid details")
//      }else   if(b=="" || b==undefined || b==null || b<0 || b>100 ||isNaN(b)){
//         alert("enter english valid details")
//      }else   if(c=="" || c==undefined || c==null || c<0 || c>100 ||isNaN(c)){
//         alert("enter hindi valid details")
//      }else   if(d=="" || d==undefined || d==null || d<0 || d>100 ||isNaN(d)){
//         alert("enter math valid details")
//      }else   if(e=="" || e==undefined || e==null || e<0 || e>100 ||isNaN(e)){
//         alert("enter social valid details")
//      }else   if(f=="" || f==undefined || f==null || f<0 || f>100 ||isNaN(f)){
//         alert("enter scince valid details")
//      }

     
     
//    }


// function resetAll(){
//    document.getElementById("sum1").value = "";
//    document.getElementById("sum2").value = "";
//    document.getElementById("sum3").value = "";
//    document.getElementById("sum4").value = "";
//    document.getElementById("sum5").value = "";
   
// }

function onLoadCompleted(){

   var ratingList = [1,2,3,4,5,6,7,8,9]

   var testDive = document.createElement("div");
   testDive.style.width = "100px";
   testDive.style.height = "50px";
   testDive.style.background = "red";
   testDive.style.color = "white";
   testDive.innerHTML = "my rating->";

// Append to another element:
document.getElementById("container").appendChild(testDive);
}
 


