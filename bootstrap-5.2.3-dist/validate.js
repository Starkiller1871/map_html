function val(){
    var fname=f1.fname.value;
    var lname=f1.lname.value;
    var regname=/^[A-Z][a-z]{3,19}/
    

    if(fname=="")
    {
        document.getElementById("fe").innerHTML="Enter first name";
        return false;
    }
    else{
        document.getElementById("fe").innerHTML="";
    }
    if(!fname.match(regname))
    {
        document.getElementById("fe").innerHTML="First name is invalid";
        document.getElementById("fe").style.color="red";
        return false;
    }
    else{
        document.getElementById("fe").innerHTML="";
        document.getElementById("fe").style.color="black";
    }

    if(lname=="")
    {
        document.getElementById("ff").innerHTML="Enter last name";
        return false;
    }
    else{
        document.getElementById("ff").innerHTML="";
    }

    if(!lname.match(regname))
    {
        document.getElementById("ff").innerHTML="Last name is invalid";
        document.getElementById("ff").style.color="red";
        return false;
    }
    else{
        document.getElementById("ff").innerHTML="";
        document.getElementById("ff").style.color="black";
    }

}