// go to home page
let backMain = document.getElementById("backMain").addEventListener("click", backToMain);

function backToMain(){
    window.location.replace("index.html");
    sessionStorage.clear()
    document.getElementById("updatedPic").style.display = "none"
}

// valid
function moreThanTwo(inpval, place, inp){
    if (inpval.length == 1){
        document.getElementById(place).innerHTML = "<iconify-icon icon='ph:warning-fill' class='nameWarning'></iconify-icon>";
        document.getElementById(inp).style.borderColor = "red";
    }else if (inpval.length > 1 ){
        document.getElementById(place).innerHTML = "<i class='ai-circle-check-fill' ></i>";
    }
}



// name
let nameInp = document.getElementById("nameInp");
nameInp.oninput = nameShow;


function nameShow() {
    let inpVal = document.getElementById("cvName").innerHTML;
    inpVal = nameInp.value;
    moreThanTwo(inpVal, 'nameError', "nameInp");
    sessionStorage.setItem("name", inpVal, "nameInp");
}

// surname
let surNameInp = document.getElementById("surName");
surNameInp.oninput = surNameShow;

function surNameShow(){
    let inpVal = document.getElementById("cvSurName").innerHTML;
    inpVal = surNameInp.value
    moreThanTwo(inpVal, "surNameError", "surName");
    sessionStorage.setItem("surName", surNameInp.value);
}

// mail
let mailInp = document.getElementById("mailInp");
mailInp.oninput = mailShow;

function mailShow(){
    document.getElementById("cvMail").innerHTML = mailInp.value;
    sessionStorage.setItem("mail", mailInp.value);
}

// number
let number = document.getElementById("numInp");
numInp.oninput = numShow;

function numShow(){
    document.getElementById("cvNum").innerHTML = numInp.value;
    sessionStorage.setItem("number", numInp.value);
}

// image

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
}