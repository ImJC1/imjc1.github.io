// Set Colors based on colorpickers
document.addEventListener("input", function() {
    
document.body.style.background = document.getElementById("background-picker").value;
document.body.style.color = document.getElementById("foreground-picker").value;
document.body.style.fontSize = document.getElementById("fontsize").value + "px";

}, false);

