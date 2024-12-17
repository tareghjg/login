function validate(){

    var userName = document.getElementById("username").value;  
    
    var email = document.getElementById("email").value;
    
    var password = document.getElementById("password").value;
    
    var confirmPassword = document.getElementById("confirmpassword").value;
    
    var ERORR= document.getElementById("ERORR");
    
    ERORR.setAttribute("class","alert alert-danger text center")

        if( email=="" && userName=="" && password==""&& confirmPassword==""){

           
            ERORR.innerHTML ="please Insert Valid Data";
            return false;

        }
        else if(userName.length<5|| userName.length>15){
            ERORR.innerHTML ="ENTER 5-15 CHAR";
            return false;
        }

        else if(email.indexOf("@",1)==-1 || email.indexOf(".com")==-1 ){
           ERORR.innerHTML="ENTER VAILD EMAIL"
           return false;
        }
else if(password.length<8){
    ERORR.innerHTML="Enter Strong password"
    return false;
}
else if(confirmPassword !=password){
    ERORR.innerHTML="Enter Confirm password"
    return false;
}


}


   
    
