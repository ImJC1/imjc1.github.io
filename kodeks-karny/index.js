
// Set Colors based on colorpickers
document.addEventListener("input", function() {
    
document.body.style.background = document.getElementById("background-picker").value;
document.body.style.color = document.getElementById("foreground-picker").value;

console.log(document.getElementById("background-picker").value);
console.log(document.getElementById("foreground-picker").value);

}, false);

