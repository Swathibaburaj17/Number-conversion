
function Binaryconversion()
    {

var first=document.getElementById("field1").value;

     var result= (parseInt(first,2).toString(8));
    var result1=(parseInt(first,2).toString(16));
   var result2=(parseInt(first,2).toString(10));
   if(!isNaN(result))
   {
       document.getElementById("ans1").value=result;
       document.getElementById("ans2").value=result1;
       document.getElementById("ans3").value=result2;
   }
}

 function Octalconversion()
 {
    var first = document.getElementById("field1").value;
  
    var result=( parseInt(first,8).toString(2));
    var result1 =  ( parseInt(first,8).toString(10));
    var result2 = (parseInt(first,8).toString(16));
    if(!isNaN(result))
   {
       document.getElementById("ans4").value=result;
       document.getElementById("ans5").value=result1;
       document.getElementById("ans6").value=result2;
   }

   }
 function Hexadecimalconversion()
{
    var first = document.getElementById("field1").value;
   // console.log(parseInt(first,2).toString(16));
   var result= (parseInt(first,16).toString(2));
  var result1= (parseInt(first,16).toString(8));
   var result2=(parseInt(first,16).toString(10));
   if(!isNaN(result))
   {
       document.getElementById("ans7").value=result;
       document.getElementById("ans8").value=result1;
       document.getElementById("ans9").value=result2;
   }

}
function Decimalconversion()
    {

var first=document.getElementById("field1").value;

     var result= (parseInt(first,10).toString(8));
    var result1=(parseInt(first,10).toString(16));
   var result2=(parseInt(first,10).toString(2));
   if(!isNaN(result))
   {
       document.getElementById("ans10").value=result;
       document.getElementById("ans11").value=result1;
       document.getElementById("ans12").value=result2;
   }
}

                

    
   
