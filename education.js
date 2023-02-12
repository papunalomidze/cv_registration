let study = document.getElementById("study");
study.oninput = studyShow;

function studyShow(){
    
    document.getElementById("cvStudy").innerHTML = study.value;
    sessionStorage.setItem("study", study.value);
    let val = sessionStorage.getItem("study")
    document.getElementById("eduHead").style.display = "block"
    valTwoChar(val, "studyError", "study")
}

let degreedate = document.getElementById("degreedate");
degreedate.oninput = degreeDateShow;

function degreeDateShow(){
    document.getElementById("cvStudyDate").innerHTML = degreedate.value;
    sessionStorage.setItem("degDate", degreedate.value);
    document.getElementById("eduHead").style.display = "block"
    validDate(sessionStorage.getItem("degDate"), "degDateError", "degreedate")
}

let workDescription = document.getElementById("degreeDescription");
degreeDescription.oninput = degDescriptionShow;

function degDescriptionShow(){
    document.getElementById("degreeDescriptionCv").innerHTML = degreeDescription.value;
    sessionStorage.setItem("degDescription", degreeDescription.value);
    document.getElementById("eduHead").style.display = "block"
    let val = sessionStorage.getItem("degDescription")
    valArea(val, "degDescriptionError", "degreeDescription")
}


// back btn
let backbtn = document.getElementById("backPage");
backbtn.onclick = backPage;

function backPage(){
    window.location.replace("experience.html");
}

let submitCv = document.getElementById("submit");
submitCv.onclick = finalCv;

function finalCv(){
    validEdu()
    if(validEdu()){
        window.location.replace("final.html");
    }
}



document.addEventListener("DOMContentLoaded", () => {
    restoreCvExp()
    restoreCvDeg()
    restoreInpEdu()
})