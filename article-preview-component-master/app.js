var a;
function shareMenu()
{
 if(a==1)  {
     document.getElementById("share-id").style.display="none";
     return a=0;
 }
 else {
     document.getElementById("share-id").style.display="inline";
     return a=1;
 }
}