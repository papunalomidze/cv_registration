
// valid language
function valLang(place, inp){
    let valLanguage = document.getElementById(inp).value
    let pattern = /[ა-ჰ]{2,}$/
    if(valLanguage.match(pattern)){
        document.getElementById(place).innerHTML = "<i class='ai-circle-check-fill' ></i>";
        document.getElementById(inp).style.borderColor = "#98E37E";
        return true
    }else{
        document.getElementById(place).innerHTML = "<iconify-icon icon='ph:warning-fill' class='nameWarning'></iconify-icon>";
        document.getElementById(inp).style.borderColor = "#EF5050";
        return false
    }
}


// valid textarea

function validInfo(){
    let validMail = document.getElementById("infoInp").value
    let pattern = /^[ა-ჰ0-9\s]+$/
    
    if(validMail.match(pattern)){
        document.getElementById("infoError").innerHTML = " ";
        document.getElementById("infoInp").style.borderColor = "#98E37E";
        return true
    }else if(validMail == ""){
        document.getElementById("infoError").innerHTML = " ";
        document.getElementById("infoInp").style.borderColor = "#98E37E";
        return true
    }else{
        document.getElementById("infoError").innerHTML = "<iconify-icon icon='ph:warning-fill' class='nameWarning'></iconify-icon>";
        document.getElementById("infoInp").style.borderColor = "#EF5050";
        return false
    }
}


    
// valid mail
function validMail(mail, place){
    let validMail = document.getElementById(mail).value
    let pattern = /^\S+@redberry.ge$/
            
    if(validMail.match(pattern)){
        document.getElementById(place).innerHTML = "<i class='ai-circle-check-fill' ></i>";
        document.getElementById(mail).style.borderColor = "#98E37E";
        return true
    }else{
        document.getElementById(place).innerHTML = "<iconify-icon icon='ph:warning-fill' class='nameWarning'></iconify-icon>";
        document.getElementById(mail).style.borderColor = "#EF5050";
        return false
    }
}


// valid num
function validNum(){
    let validnum = document.getElementById("numInp").value
    let pattern = /\+[9955][0-9]{11}$/
        
    if(validnum.match(pattern)){
        document.getElementById("numError").innerHTML = "<i class='ai-circle-check-fill' ></i>";
        document.getElementById("numInp").style.borderColor = "#98E37E";
        return true
    }else{
        document.getElementById("numError").innerHTML = "<iconify-icon icon='ph:warning-fill' class='nameWarning'></iconify-icon>";
        document.getElementById("numInp").style.borderColor = "#EF5050";
        return false
    }
}

// valid image

function validImg(){
    if(sessionStorage.getItem("image") == null){
        document.getElementById("photoError").innerHTML = "<iconify-icon icon='ph:warning-fill' class='nameWarning'></iconify-icon>";
        return false
    }else{
        document.getElementById("photoError").innerHTML = " ";
        return true
    }
}


function validInfoPg(){
    validImg()
    validInfo() 
    valLang('surNameError', "surName")
    valLang('nameError', "nameInp") 
    validMail("mailInp", "mailError", "mailInp")
    validNum()
    return validNum() && validMail("mailInp", "mailError", "mailInp") && valLang('nameError', "nameInp") && valLang('surNameError', "surName") && validInfo() && validImg()
}


function valTwoChar(val, place, inpBox){
    if(val.length > 1){
        document.getElementById(place).innerHTML = "<i class='ai-circle-check-fill' ></i>";
        document.getElementById(inpBox).style.borderColor = "#98E37E";
        return true
    }else{
        document.getElementById(place).innerHTML = "<iconify-icon icon='ph:warning-fill' class='nameWarning'></iconify-icon>";
        document.getElementById(inpBox).style.borderColor = "#EF5050";
        return false
    }
}


function valArea(val, place, inpBox){
    if(val.length > 1){
        document.getElementById(place).innerHTML =  " "
        document.getElementById(inpBox).style.borderColor = "#98E37E";
        return true
    }else{
        document.getElementById(place).innerHTML = "<iconify-icon icon='ph:warning-fill' class='nameWarning'></iconify-icon>";
        document.getElementById(inpBox).style.borderColor = "#EF5050";
        return false
    }
}

function validWork(){
valTwoChar(sessionStorage.getItem("position"), "posError", "wPosition")
valTwoChar(sessionStorage.getItem("employer"), "emplError", "employer")
valArea(sessionStorage.getItem("workDescription"), "descError", "WDescription")
    return valTwoChar(sessionStorage.getItem("position"), "posError", "wPosition") && valTwoChar(sessionStorage.getItem("employer"), "emplError", "employer") && 
    valArea(sessionStorage.getItem("workDescription"), "descError", "WDescription") && validDate(sessionStorage.getItem("workStartdate"), "sDateError", "workStartDate")
    && validDate(sessionStorage.getItem("workDueDate"), "dDateError", "workDuedate")
}


function validDate(val, place, inpBox){
    if(val.length == 10){
        document.getElementById(place).innerHTML =  " "
        document.getElementById(inpBox).style.borderColor = "#98E37E";
        return true
    }else{
        document.getElementById(place).innerHTML = "<iconify-icon icon='ph:warning-fill' class='nameWarning'></iconify-icon>";
        document.getElementById(inpBox).style.borderColor = "#EF5050";
        return false
    }
}