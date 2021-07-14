
          
    

function matchpass(){  
var firstpassword=document.f1.password1.value;  
var secondpassword=document.f1.password2.value;  
  
if(firstpassword===secondpassword){  
    window.open("resetcredentialinfo.html");
}  
else{  
alert("password must be same!");  
return false;  
}  
}  