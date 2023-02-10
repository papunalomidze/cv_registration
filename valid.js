
// valid language
function valLang(place, inp){
    let valLanguage = document.getElementById(inp).value
    let pattern = /[ა-ჰ]{2,}$/
    if(valLanguage.match(pattern)){
        document.getElementById(place).innerHTML = "<i class='ai-circle-check-fill' ></i>";
        document.getElementById(inp).style.borderColor = "#98E37E";
        return "valid"
    }else{
        document.getElementById(place).innerHTML = "<iconify-icon icon='ph:warning-fill' class='nameWarning'></iconify-icon>";
        document.getElementById(inp).style.borderColor = "#EF5050";
        return "invalid"
    }
}


// valid textarea

function validInfo(){
    let validMail = document.getElementById("infoInp").value
    let pattern = /^[ა-ჰ0-9\s]+$/
    
    if(validMail.match(pattern)){
        document.getElementById("infoError").innerHTML = " ";
        document.getElementById("infoInp").style.borderColor = "#98E37E";
        return "valid"
    }else if(validMail == ""){
        document.getElementById("infoError").innerHTML = " ";
        document.getElementById("infoInp").style.borderColor = "#98E37E";
        return "valid"
    }else{
        document.getElementById("infoError").innerHTML = "<iconify-icon icon='ph:warning-fill' class='nameWarning'></iconify-icon>";
        document.getElementById("infoInp").style.borderColor = "#EF5050";
        return "invalid"
    }
}


    
// valid mail
function validMail(mail, place){
    let validMail = document.getElementById(mail).value
    let pattern = /^\S+@redberry.ge$/
            
    if(validMail.match(pattern)){
        document.getElementById(place).innerHTML = "<i class='ai-circle-check-fill' ></i>";
        document.getElementById(mail).style.borderColor = "#98E37E";
        return "valid"
    }else{
        document.getElementById(place).innerHTML = "<iconify-icon icon='ph:warning-fill' class='nameWarning'></iconify-icon>";
        document.getElementById(mail).style.borderColor = "#EF5050";
        return "invalid"
    }
}


// valid num
function validNum(){
    let validnum = document.getElementById("numInp").value
    let pattern = /\+[9955][0-9]{11}$/
        
    if(validnum.match(pattern)){
        document.getElementById("numError").innerHTML = "<i class='ai-circle-check-fill' ></i>";
        document.getElementById("numInp").style.borderColor = "#98E37E";
        return "valid"
    }else{
        document.getElementById("numError").innerHTML = "<iconify-icon icon='ph:warning-fill' class='nameWarning'></iconify-icon>";
        document.getElementById("numInp").style.borderColor = "#EF5050";
        return "invalid"
    }
}