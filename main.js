let backMain = document.getElementById("backMain").addEventListener("click", backToMain);

function backToMain(){
    window.location.replace("index.html");
    sessionStorage.clear()
    document.getElementById("updatedPic").style.display = "none"
}


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("name").value = sessionStorage.getItem("name")
    document.getElementById("cvName").innerHTML = sessionStorage.getItem("name")

    document.getElementById("surName").value = sessionStorage.getItem("surName")
    document.getElementById("cvSurName").innerHTML = sessionStorage.getItem("surName")
    
    
    document.getElementById("updatedPic").setAttribute("src",sessionStorage.getItem("image"));
    
    if ("image" in sessionStorage){
        document.getElementById("updatedPic").style.display = "block";
    }
   
    

})

let nameInp = document.getElementById("name");
nameInp.oninput = nameShow;


function nameShow() {
    document.getElementById("cvName").innerHTML = nameInp.value
    sessionStorage.setItem("name", nameInp.value)
}


let surNameInp = document.getElementById("surName");
surNameInp.oninput = surNameShow

function surNameShow(){
    document.getElementById("cvSurName").innerHTML = surNameInp.value
    sessionStorage.setItem("surName", surNameInp.value)
}


document.getElementById("photo").addEventListener("change", function(){
    const reader = new FileReader();
    
    reader.addEventListener("load", () => {
        sessionStorage.setItem("image", reader.result);
    })

    reader.readAsDataURL(this.files[0]);
})
document.addEventListener("change", () =>{
    const imageUrl = sessionStorage.getItem("image");

    document.getElementById("updatedPic").setAttribute("src",imageUrl)
    if ("image" in sessionStorage){
        document.getElementById("updatedPic").style.display = "block";
    }
    
})
