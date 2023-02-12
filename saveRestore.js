
document.addEventListener("DOMContentLoaded", () => {
    // name session
    document.getElementById("cvName").innerHTML = sessionStorage.getItem("name");
    // surname session
    document.getElementById("cvSurName").innerHTML = sessionStorage.getItem("surName");
    // photo session
    document.getElementById("updatedPic").setAttribute("src",sessionStorage.getItem("image"));
    if ("image" in sessionStorage){
        document.getElementById("updatedPic").style.display = "block";
    }
    // info session
    document.getElementById("cvUserInfo").innerHTML = sessionStorage.getItem("info");
    if("info" in sessionStorage){
        document.getElementById("infoHead").style.display = "block"
        document.getElementById("hrCvInfo").style.display = "block"
    }
    // mail
    document.getElementById("cvMail").innerHTML = sessionStorage.getItem("mail");
    if(sessionStorage.getItem("mail") == null){
        document.getElementById("mailIcon").innerHTML = ' '
    }else{
        document.getElementById("mailIcon").innerHTML = ' <img src="pictures\\Vector.png" ></img>'
    }

    // mobile number
    document.getElementById("cvNum").innerHTML = numFormat(sessionStorage.getItem("number"));
    if(sessionStorage.getItem("number") == null){
        document.getElementById("numIcon").innerHTML = ' '
    }else{
        document.getElementById("numIcon").innerHTML = '<img src="pictures\\vectorphone.png" ></img>'
    }
    numFormat(sessionStorage.getItem("number"))
    function numFormat(phone) {
    
        phone = phone.replace(/\+[^\d]/g, "");
        return  phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5");
    }

})

function restoreInp() {  
    document.getElementById("nameInp").value = sessionStorage.getItem("name");
    document.getElementById("surName").value = sessionStorage.getItem("surName");
    document.getElementById("infoInp").value = sessionStorage.getItem("info");
    document.getElementById("mailInp").value = sessionStorage.getItem("mail");
    document.getElementById("numInp").value = sessionStorage.getItem("number");
}

function restoreCvExp(){
    if(sessionStorage.getItem("position") != null){
        document.getElementById("cvWork").innerHTML = sessionStorage.getItem("position")
    }

    if(sessionStorage.getItem("position") + ", " + sessionStorage.getItem("employer") != null, null){
        document.getElementById("cvWork").innerHTML = sessionStorage.getItem("position") + ", " + sessionStorage.getItem("employer")
    }

    if(sessionStorage.getItem("workStartdate") != null){
        document.getElementById("workDate").innerHTML = sessionStorage.getItem("workStartdate")
    }
    
    if(sessionStorage.getItem("workStartdate") != null){
        document.getElementById("workDate").innerHTML = sessionStorage.getItem("workStartdate") + " - " + sessionStorage.getItem("workDueDate")
    }
    document.getElementById("workDescription").innerHTML = sessionStorage.getItem("workDescription")
    document.getElementById("expHead").style.display = "block"
}

function restoreInpExp(){
    document.getElementById("wPosition").value = sessionStorage.getItem("position")
    document.getElementById("employer").value = sessionStorage.getItem("employer")
    document.getElementById("workStartDate").value = sessionStorage.getItem("workStartdate")
    document.getElementById("workDuedate").value = sessionStorage.getItem("workDueDate")
    document.getElementById("WDescription").value = sessionStorage.getItem("workDescription")
}

function restoreCvDeg(){
    document.getElementById("cvStudy").innerHTML = sessionStorage.getItem("study");
    document.getElementById("cvStudyDate").innerHTML = sessionStorage.getItem("degDate");
    document.getElementById("degreeDescriptionCv").innerHTML = sessionStorage.getItem("degDescription");
    document.getElementById("eduHead").style.display = "block"
}

function restoreInpEdu(){
    document.getElementById("study").value = sessionStorage.getItem("study");
    document.getElementById("degreedate").value = sessionStorage.getItem("degDate");
    document.getElementById("degreeDescription").value = sessionStorage.getItem("degDescription");

}