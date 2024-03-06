function main() {
    circleId = document.getElementById("circle");
    circleId.addEventListener("click",()=>{
        alert("The button was pressed");
    })
}

document.addEventListener("DOMContentLoaded",main);