function reduceOpacity(){
    circleId = document.getElementById("circle");
    if(circleId.style.opacity != "0"){
        circleId.style.opacity =  parseFloat(circleId.style.opacity) - 0.01;
    }
}
function main() {
    circleId = document.getElementById("circle");
    circleId.style.opacity = 1;
    circleId.addEventListener("click",()=>{
        setInterval(reduceOpacity,10);
    })
}

document.addEventListener("DOMContentLoaded",main);