function main() {
    circleId = document.getElementById("circle");
    
    circleId.addEventListener("click",()=>{
        if (circleId.style.backgroundColor == "green")
            circleId.style.backgroundColor = "red";
        else 
            circleId.style.backgroundColor = "green";
    })
}

document.addEventListener("DOMContentLoaded",main);