function validate(){
    var emailPattern = /^([a-zA-Z0-9\.\_\-])+\@+([a-zA-Z0-9\-])+\.+([a-zA-Z0-9]{2,9})+$/;
    
    var email = document.getElementById("email");
    var mobNo = document.getElementById("mob");
    var subject = document.getElementById("cont-sub");

    var flag = true;

    if(!emailPattern.test(email.value)){
        email.className = "invalidInput";
        email.value = "";
        email.placeholder = "Invalid email Id.";
        flag = false;
    }

    if(isNaN(mobNo.value) || mobNo.value.length != 10){
        mobNo.className = "invalidInput";
        flag = false;
        mobNo.value = "";
        mobNo.placeholder = "Enter valid contact number."
    }

    if(subject.value.length==0 || /^([\ ])+$/.test(subject)){
        subject.value = "";
        flag = false;
        subject.className = "invalidInput";
        subject.placeholder = "Enter a subject first...";
    }

    if(flag){
        document.getElementById("custAlert-cont").innerHTML = "Your query has been recorded, We will contact you soon. <br> <strong> Thanks! </strong>";
        document.getElementById("cont-main").style.webkitFilter = "blur(2px)";  
        $("#custAlert").fadeIn(300);
    }


}

function custreset(){
    var email = document.getElementById("email");
    var mobNo = document.getElementById("mob");
    var subject = document.getElementById("cont-sub");

    email.className  = "";
    mobNo.className  = "";
    subject.className  = "";

    
    email.placeholder  = "e.g. ranbir.singh@netsmartz.net";
    mobNo.placeholder  = "Enter 10 digit contact number...";
    subject.placeholder  = "e.g. Product related questions";

    
    

}




document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    hide();
  }
});


function hide(){
    document.getElementById("cont-main").style.webkitFilter = "none";        document.getElementById("custAlert").style.display = "block";

    document.getElementById("custAlert").style.display = "none";

}
