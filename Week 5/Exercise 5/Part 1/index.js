function main() {
    circleId = document.getElementById("circle");
    circleId.style.opacity = 0.1;
    circleId.addEventListener("click",()=>{
        if(circleId.style.opacity != "1"){
            circleId.style.opacity =  parseFloat(circleId.style.opacity) + 0.1;
        }
    })
}

document.addEventListener("DOMContentLoaded",main);