function loadFunction(){
    alert("After Loading the Script");

    var headingEle = document.getElementById("hid");
    headingEle.firstChild.nodeValue = "New Heading Value";
    var paragraphEle = document.getElementById("pid");
    paragraphEle.firstChild.nodeValue = "New paragraph Value";

}
alert("Before Loading the Script");
document.addEventListener("DOMContentLoaded", loadFunction);