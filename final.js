
document.addEventListener("DOMContentLoaded", () => {
    restoreCvExp()
    restoreCvDeg()

})

let close = document.getElementById("close")
close.onclick = closeWindow

function closeWindow(){
    document.getElementById("congrats").style.display = "none"
}