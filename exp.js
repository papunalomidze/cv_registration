let wPosition1 = document.getElementById("wPosition");
wPosition1.oninput = wPositionShow;

function wPositionShow(){
    document.getElementById("cvWork").innerHTML = wPosition1.value + ", " + employer.value;
    sessionStorage.setItem("position", wPosition1.value);
    let val = sessionStorage.getItem("position")
    document.getElementById("expHead").style.display = "block"
    document.getElementById("cvWork").style.display = "block"
    valTwoChar(sessionStorage.getItem("position"), "posError", "wPosition")
   
}

let employer = document.getElementById("employer");
employer.oninput = employerShow;

function employerShow(){
    document.getElementById("cvWork").innerHTML = wPosition1.value + ", " + employer.value;
    sessionStorage.setItem("employer", employer.value);
    document.getElementById("expHead").style.display = "block"
    document.getElementById("cvWork").style.display = "block"
    valTwoChar(sessionStorage.getItem("employer"), "emplError", "employer")
}

// work dates
let workStartDate = document.getElementById("workStartDate");
workStartDate.oninput = workSDShow;

function workSDShow(){
    document.getElementById("workDate").innerHTML = workStartDate.value +" - "+ workDueDate.value;
    sessionStorage.setItem("workStartdate", workStartDate.value);
    document.getElementById("expHead").style.display = "block"
    validDate(sessionStorage.getItem("workStartdate"), "sDateError", "workStartDate")
}

let workDueDate = document.getElementById("workDuedate");
workDueDate.oninput = workDueDateShow;

function workDueDateShow(){
    document.getElementById("workDate").innerHTML = workStartDate.value +" - "+ workDueDate.value;
    sessionStorage.setItem("workDueDate", workDueDate.value);
    document.getElementById("expHead").style.display = "block"
    validDate(sessionStorage.getItem("workDueDate"), "dDateError", "workDuedate")
}

// work description
let workDescription = document.getElementById("WDescription");
workDescription.oninput = workDescShow;

function workDescShow(){
    document.getElementById("workDescription").innerHTML = workDescription.value;
    sessionStorage.setItem("workDescription", workDescription.value);
    document.getElementById("expHead").style.display = "block"
    valArea(sessionStorage.getItem("workDescription"), "descError", "WDescription")
}

// restore after refresh
document.addEventListener("DOMContentLoaded", () => {
    if (restoreCvExp() != undefined){
        restoreCvExp()
    }else if(restoreInpExp() != undefined){
        restoreInpExp()
    }
})

// back btn
let backbtn = document.getElementById("backPage");
backbtn.onclick = backPage;

function backPage(){
    window.location.replace("infoPage.html");
}

// next btn
let nextBtn = document.getElementById("nextPage");
nextBtn.onclick = nextPage;

function nextPage(){
    validWork()
    if(validWork()){
        window.location.replace("education.html");
    }
}

// more description
let moredesc = document.getElementById("moreExp");
moredesc.onclick = moreDescShow;


function moreDescShow(){
    let elem = document.querySelector("#forMore")
    var clone = elem.cloneNode(true)
    elem.after(clone)

    // let elemCv = document.querySelector("#moreDescCv")
    // let cloneCv = elem.cloneNode(true)
    // elemCv.after(cloneCv)
    
}

