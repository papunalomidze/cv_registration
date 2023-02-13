let study = document.getElementById("study");
study.oninput = studyShow;

function studyShow(){
    
    document.getElementById("cvStudy").innerHTML = study.value
    sessionStorage.setItem("study", study.value);
    let val = sessionStorage.getItem("study")
    document.getElementById("eduHead").style.display ="block"
    valTwoChar(val, "studyError", "study")
}

let degree = document.getElementById("degree");
degree.onchange = degreeShow;

function degreeShow(){
    document.getElementById("cvDegree").innerHTML = ", " +  degree.value;
    sessionStorage.setItem("degree", degree.value);
    console.log()
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

// const api_select = 'https://resume.redberryinternship.ge/api/degrees'
// async function getchoice(){
//     const responce = await (fetch(api_select));
//     const coices = await responce.json()
//     console.log(coices)
// }

// // getchoice()
// document.getElementById("degree")

// console.log(document.getElementById("degree").value)