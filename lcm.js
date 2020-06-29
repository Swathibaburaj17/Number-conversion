function lcm()
{
   var n1= document.getElementById("n1").value;
   var n2= document.getElementById("n2").value;
   var min,lcm=1;
   min=n1<n2 ? n1:n2;
   for(var i=min;i<n1*n2;i++)
   {
if(i%n1==0 && i%n2==0)
    {
    lcm=i;
    break;
          }
          
     }
     console.log(+i);
     if(!isNaN(i))
     {
         document.getElementById("ans13").value=i;
     }
    
}