function onChange() {
    buttonId = document.getElementById("username");
    updateContentOfHeading(buttonId.value);
}
function updateContentOfHeading(value){
    headingId = document.getElementById("result");
    headingId.firstChild.nodeValue = "Submitted Value: " + value;    
}
function part1() {
    usernameInputId = document.getElementById("username");
    usernameInputId.addEventListener("keyup",onChange);
}
document.addEventListener("DOMContentLoaded",part1);