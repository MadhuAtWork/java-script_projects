function onLoadCompleted(){
    // var ratinglist = [1,2,3,4,5,6,7,8,9];
  

    // var k = ratinglist.length;
    // for(var i=0; i<k ; i++){
    //     var testDiv = document.createElement("div");
    //     testDiv.style.width="200px";
    //     testDiv.style.height="50px";
    //     testDiv.style.margin="50px";
    //     testDiv.style.background ="blue";
    //     testDiv.style.color="white";
    //     testDiv.style.fontSize="20px";
    //     testDiv.innerHTML="customer->" + i;
    //     document.getElementById("container").appendChild(testDiv);
    // }
    

    // var customers = [{name:"cus-1" , id:001},{name:"cus-2" , id:003},{name:"cus-3" , id:99},{name:"cus-4" , id:005}]
    //  for(var x in customers){
    //     var obj = customers[x];
    //      var testdiv = document.createElement("div");
    //      testdiv.style.width="400px";
    //      testdiv.style.height="50px";
    //      testdiv.style.background="red";
    //      testdiv.style.color="white";
    //      testdiv.style.margin="20px";
    //      testdiv.innerHTML=obj.name+"..."+obj.id;
    //      document.getElementById("container").appendChild(testdiv);

    //  }

    
    var customers = [{name:"cus-1" , id:001},{name:"cus-2" , id:003},{name:"cus-3" , id:99},{name:"cus-4" , id:005}]
     for(var x in customers){
        var obj = customers[x];
         var testdiv = document.createElement("div");
         testdiv.style.width="400px";
         testdiv.style.height="50px";
         testdiv.style.background="red";
         testdiv.style.color="white";
         testdiv.style.margin="20px";
         //testdiv.innerHTML=obj.name+"..."+obj.id;
         if(obj.id==99){
            testdiv.innerHTML="notvalid";
         }else{
             testdiv.innerHTML=obj.name+"..."+obj.id;
         }
         document.getElementById("container").appendChild(testdiv);
     

  
    }
}