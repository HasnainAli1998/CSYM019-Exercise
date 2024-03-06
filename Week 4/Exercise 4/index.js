function loadFunction(){
    var headingEle = document.getElementById("hid");
    headingEle.firstChild.nodeValue = "New Heading Value";
    var paragraphEle = document.getElementById("pid");
    paragraphEle.firstChild.nodeValue = "New paragraph Value";

}
document.addEventListener("click", loadFunction);