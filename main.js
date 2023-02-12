// go to home page
let backMain = document.getElementById("backMain").addEventListener("click", backToMain);

function backToMain(){
    window.location.replace("index.html");
    sessionStorage.clear()
    document.getElementById("updatedPic").style.display = "none"
}


// name
let nameInp = document.getElementById("nameInp");
nameInp.oninput = nameShow;


function nameShow() {
    document.getElementById("cvName").innerHTML = nameInp.value;

    sessionStorage.setItem("name", nameInp.value);
    valLang('nameError', "nameInp")
}

// surname
let surNameInp = document.getElementById("surName");
surNameInp.oninput = surNameShow;

function surNameShow(){
    document.getElementById("cvSurName").innerHTML = surNameInp.value;
    
    sessionStorage.setItem("surName", surNameInp.value);
    valLang('surNameError', "surName")
}

// mail
let mailInp = document.getElementById("mailInp");
mailInp.oninput = mailShow;

function mailShow(){
    document.getElementById("cvMail").innerHTML = mailInp.value;
    sessionStorage.setItem("mail", mailInp.value);
    validMail("mailInp", "mailError", "mailInp")
}

// number
let number = document.getElementById("numInp");
numInp.oninput = numShow;

function numShow(){
    document.getElementById("cvNum").innerHTML = numInp.value;
    sessionStorage.setItem("number", numInp.value);
    validNum()
}

// image
document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("photoError").innerHTML = " ";
})

document.getElementById("photo").addEventListener("change", function(){
    const reader = new FileReader();
    
    reader.addEventListener("load", () => {
        sessionStorage.setItem("image", reader.result);
    })

    reader.readAsDataURL(this.files[0]);
})
document.addEventListener("change", () =>{
    const imageUrl = sessionStorage.getItem("image");

    document.getElementById("updatedPic").setAttribute("src",imageUrl);
    if ("image" in sessionStorage){
        document.getElementById("updatedPic").style.display = "block";
    }
})

// info
let infoInp = document.getElementById("infoInp");
infoInp.oninput = infoShow;

function infoShow(){
    document.getElementById("cvUserInfo").innerHTML = infoInp.value;
    sessionStorage.setItem("info", infoInp.value);
    document.getElementById("infoHead").style.display = "block"
    document.getElementById("hrCvInfo").style.display = "block"
    validInfo()
    
    if(infoInp.value == ""){
        document.getElementById("infoHead").style.display = "none"
    }
}

// restore input
document.addEventListener("DOMContentLoaded", () => {
    restoreInp()
})

// next btn
let nextBtn = document.getElementById("nextPage");
nextBtn.onclick = nextPage;

function nextPage(){
    validInfoPg()
    if(validInfoPg()){
        window.location.replace("experience.html");
    }
}

