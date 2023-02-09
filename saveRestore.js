document.addEventListener("DOMContentLoaded", () => {
    // name session
    document.getElementById("nameInp").value = sessionStorage.getItem("name");
    document.getElementById("cvName").innerHTML = sessionStorage.getItem("name");

    // surname session
    document.getElementById("surName").value = sessionStorage.getItem("surName");
    document.getElementById("cvSurName").innerHTML = sessionStorage.getItem("surName");
    
    // photo session
    document.getElementById("updatedPic").setAttribute("src",sessionStorage.getItem("image"));
    
    if ("image" in sessionStorage){
        document.getElementById("updatedPic").style.display = "block";
    }
   
    // info session
    document.getElementById("infoInp").value = sessionStorage.getItem("info");
    document.getElementById("cvUserInfo").innerHTML = sessionStorage.getItem("info");

    if("info" in sessionStorage){
        document.getElementById("infoHead").style.display = "block"
        document.getElementById("hrCvInfo").style.display = "block"
    }

    // mail
    document.getElementById("mailInp").value = sessionStorage.getItem("mail");
    document.getElementById("cvMail").innerHTML = sessionStorage.getItem("mail");

    // mobile number
    document.getElementById("numInp").value = sessionStorage.getItem("number");
    document.getElementById("cvNum").innerHTML = sessionStorage.getItem("number");
})
