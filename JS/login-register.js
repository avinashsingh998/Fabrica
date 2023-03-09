var usernamePattern = /^([a-zA-Z0-9\.])+$/;
var emailPattern = /^([a-zA-Z0-9\.\_\-])+\@+([a-zA-Z0-9\-])+\.+([a-zA-Z0-9]{2,9})+$/;

function validateLogin(){
    var uname = document.getElementById("uname");
    var pass = document.getElementById("pass");

    var flag = true;
    if(!usernamePattern.test(uname.value) || uname.value.length<5 || uname.value.length>12){
        uname.value = "";
        flag = false;
        uname.className = "invalidInput";
        uname.placeholder = "Invalid Username";
        
    }

    if(pass.value.length<6 || pass.value.length>20){
        pass.value = "";
        flag = false;
        pass.className = "invalidInput";
        pass.placeholder = "Password length must be between 6 to 20.";
        
    }

    if(flag) {
        if(uname.value == "user1" && pass.value == 'password'){
            window.parent.location.href = "index.html";
        }
        else{
            alert("Either Username or password is incorrect.");
        }
    }

    
    
}



function validateRegister(){
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var pass =  document.getElementById("pass");
    var vpass = document.getElementById("vpass");

    var contNo = document.getElementById("contNo");

    var gendMsg = document.getElementById("gender");
    var gender = document.getElementsByName("g");
    
    var address = document.getElementById("address");
    var alertAdd = document.getElementById("alertAdd");

    var flag = true;

    if(!usernamePattern.test(fname.value) || fname.value.length<2){
        fname.value = "";
        flag = false;
        fname.className = "invalidInput";
        fname.placeholder = "Invalid First name";
    }
    
    if(!usernamePattern.test(lname.value) || lname.value.length<2){
        lname.value = "";
        flag = false;
        lname.className = "invalidInput";
        lname.placeholder = "Invalid Last name";
    }
    
    if(!emailPattern.test(email.value) ){
        email.value = "";
        flag = false;
        email.className = "invalidInput";
        email.placeholder = "Invalid email Id";
    }

    if(pass.value.length<6 || pass.value.length>20){
        pass.value = "";
        flag = false;
        pass.className = "invalidInput";
        pass.placeholder = "Password length must be between 6 to 20.";
        
    }

    if(vpass.value != pass.value){
        vpass.value = "";
        pass.value = "";
        flag = false;
        vpass.className = "invalidInput";
        pass.className = "invalidInput";
        pass.placeholder = "Password Mismatched";
        vpass.placeholder = "Password Mismatched";
        
        
    }

    var contNo1 = contNo.value.split(" ");
    if(contNo1.length!=2 || (contNo1[1].length!=10 || isNaN(contNo1[1]) || contNo1[0] != '+91')){
        contNo.value = "";
        flag = false;
        contNo.className = "invalidInput";
        contNo.placeholder = "Invalid contact number";

    }
    

    if(!gender[0].checked && !gender[1].checked){
        flag = false;
        gendMsg.innerHTML = "Select a gender first";
    }

    if(address.value == "" || /^([\ ])+$/.test(address.value)){
        flag = false;
        alertAdd.innerHTML = "Address field is required.";
    }

    if(flag){
        alert("Submitted successfully...");
    }
    
    
}


function resetResister(){
    document.getElementById("fname").className = "";
    document.getElementById("lname").className = "";
    document.getElementById("email").className = "";
     document.getElementById("pass").className = "";
     document.getElementById("vpass").className = "";
     document.getElementById("contNo").className = "";
     document.getElementById("gender").innerHTML = "";
     document.getElementById("alertAdd").innerHTML = "";


    document.getElementById("fname").placeholder = "e.g. Ketan"
    document.getElementById("lname").placeholder = "e.g. Jindal"
    document.getElementById("email").placeholder = "e.g. ketan.jindal@netsmartz.net"
     document.getElementById("pass").placeholder = "Enter strong password"
     document.getElementById("vpass").placeholder = "Confirm password"
     document.getElementById("contNo").placeholder = "+91 _ _ _ _ _  _ _ _ _ _";
     document.getElementById("contNo").value = "+91 ";
        


}