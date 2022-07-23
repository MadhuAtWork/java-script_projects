//var test = "name:jac,age:20,tec:java";
// console.log(test.substring(0,8))
// console.log(test.substring(9,15))

/*var k = test.split(",")
var t =k[1]
var x = t .split(":")
var y = x [1]
console.log(y);*/



//var test = [1,99,400,500,435];

//var myLeng = test.length;

// for(var i=0; i<myLeng ; i++){

//     console.log(i , "<__________________>" , test[i])

// }

//name : jac
//age:20



// number , string , obj , array , Boolen (true , false 0 , 1 );


// var math = 12;


// var firstCalss = 60;
// var secondClass = 50;
// var toper = 90;

// //top
// //first
// //sec
// //fails


// if(math <35){
//    // console.log("failed");
// }else if(math >=90 ){
//     //console.log("toper") 
// }else if(math >= 50 && math<= 60){
//    // console.log("firstclass");
// }else if(math >=35 && math <= 50){
//    // console.log("secondclass")
// }else{
//     //console.log("failed");
// }


//  ( && , || , <= >= , == , === )



/*var a  = {
    
    name : "name : jack",
    fathername : " father name : devin" ,
    id : 301 ,
    subjects : "telugu,english ,math , scince ,social, hindi" ,
    telugu : "telugu marks: 90",
    hindi : " hindi marks : 85" ,
    english : " english marks : 92" ,
    scince : "scince marks : 88" ,
    math : "math marks : 77" ,
    social : "social marks :88" ,
    total : "total marks :550" ,
    schlnm: "pragathi international School",
}

// console.log(a.name);
// console.log(a.fathername);
// console.log(a.id);
// console.log(a.subjects);
// console.log(a.telugu);
// console.log(a.hindi);
// console.log(a.english);
// console.log(a.scince);
// console.log(a.math);
// console.log(a.social);
// console.log(a.total);
// console.log(a.schlnm);*/





// function addsomething(a,b,per){
//     console.log(per , "---------------" , a+b)
// }

// addsomething(2,4,"srinivas")

// addsomething(5,4,"madhu");





// var testObj  = {
//     name : " jack",
//     fathername : " father name : devin" ,
//     id : 301 ,
//     subjects : "telugu,english ,math , scince ,social, hindi" ,
//     telugu : "telugu marks: 90",
//     hindi : " hindi marks : 85" ,
//     english : " english marks : 92" ,
//     scince : "scince marks : 88" ,
//     math : "math marks : 77" ,
//     social : "social marks :88" ,
//     total : "total marks :550" ,
//     schlnm: "pragathi international School",
// }

// for(var k in testObj){
//     console.log(k , "<----------------------> " , testObj[k])
// }

    //   var marks = 40;
function getResult(myObj){
    
//  for(var x in testObject){
//      console.log (testObject[x])
//  }

if(myObj.id == 99){
    console.log(myObj.name , "_______he is failed !! ")
}else{
    console.log(myObj.name , "_______pass !! ")
}
}
var testObject =  {
    name:"xyz",
    id:"32"
}
var testObjectfive =  {
  name:"abc",
  id:"99"
}
getResult(testObject)
getResult(testObjectfive)

function checkResult() {
    var x = document.getElementById("englidh").value;
    console.log(x)
  }