
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
    // mobile number
    document.getElementById("cvNum").innerHTML = sessionStorage.getItem("number");

})

function restoreInp() {  
    document.getElementById("nameInp").value = sessionStorage.getItem("name");
    document.getElementById("surName").value = sessionStorage.getItem("surName");
    document.getElementById("infoInp").value = sessionStorage.getItem("info");
    document.getElementById("mailInp").value = sessionStorage.getItem("mail");
    document.getElementById("numInp").value = sessionStorage.getItem("number");
}

function restoreCvExp(){
    document.getElementById("cvWork").innerHTML = sessionStorage.getItem("position")
    document.getElementById("cvWork").innerHTML = sessionStorage.getItem("position") + ", " + sessionStorage.getItem("employer")
    document.getElementById("workDate").innerHTML = sessionStorage.getItem("workStartdate")
    document.getElementById("workDate").innerHTML = sessionStorage.getItem("workStartdate") + " - " + sessionStorage.getItem("workDueDate")
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

