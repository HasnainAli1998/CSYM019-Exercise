// Functions for paragraph
function addMouseEnterEventonParagraph() {
    var paragraphId = document.getElementById("pid");
    paragraphId.addEventListener("mouseenter",updateParagraphContentOnEnter);
}
function addMouseLeaveEventonParagraph() {
    var paragraphId = document.getElementById("pid");
    paragraphId.addEventListener("mouseleave",updateParagraphContentOnLeave);
}
function updateParagraphContentOnEnter(){
    var paragraphId = document.getElementById("pid");
    paragraphId.firstChild.nodeValue = "New Value of Paragraph";
}
function updateParagraphContentOnLeave(){
    var paragraphId = document.getElementById("pid");
    paragraphId.firstChild.nodeValue = "Initial Value of Paragraph";
}

// Functions for heading
function addMouseEnterEventonHeading() {
    var headingId = document.getElementById("hid");
    headingId.addEventListener("mouseenter",updateHeadingContentOnEnter);
}
function addMouseLeaveEventonHeading() {
    var headingId = document.getElementById("hid");
    headingId.addEventListener("mouseleave",updateHeadingContentOnLeave);
}
function updateHeadingContentOnEnter(){
    var headingId = document.getElementById("hid");
    headingId.firstChild.nodeValue = "New Value of Heading";
}
function updateHeadingContentOnLeave(){
    var headingId = document.getElementById("hid");
    headingId.firstChild.nodeValue = "Initial Value of Heading";
}
function updateHTMLUsingJS(){
    addMouseEnterEventonHeading();
    addMouseLeaveEventonHeading();
    addMouseEnterEventonParagraph();
    addMouseLeaveEventonParagraph();
}
document.addEventListener("DOMContentLoaded",updateHTMLUsingJS);