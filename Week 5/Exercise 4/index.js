function main() {
    circleId = document.getElementById("circle");
    circleId.style.opacity = 1;
    circleId.addEventListener("click",()=>{
        circleId.style.opacity = 0.5;
    })
}

document.addEventListener("DOMContentLoaded",main);