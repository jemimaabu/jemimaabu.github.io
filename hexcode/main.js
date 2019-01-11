var colorInput = document.getElementById("color-input");
var colorMatch = /#([A-Fa-f0-9]{3,6})/gi;
var hexCode = colorInput.value.match(colorMatch);
    
function createColorSpan(color) {
    var span = document.createElement('span');
    span.id = "color-span";
    span.style.backgroundColor = color;
    var colorSpan = document.createElement('span');
    colorSpan.innerHTML = color;
    colorSpan.appendChild(span);
    return colorSpan;
}
    
function renderColorBox() {
    var colorText = document.getElementById("color-span-area");
    colorText.innerHTML = hexCode ? 
        colorInput.value.replace(colorMatch, color => { console.log(color); return createColorSpan(color).innerHTML}) : 
        colorInput.value;
}

function renderColorBorderHighlight() {
    var colorText = document.getElementById("color-border-area");
    colorText.innerHTML = hexCode ? 
        colorInput.value.replace(colorMatch, color => {return ' <span style="border-color: ' + color + ';">' + color + '</span> '}) : 
        colorInput.value;
}

function renderColorUnderline() {
    var colorText = document.getElementById("color-underline-area");
    colorText.innerHTML = hexCode ? 
        colorInput.value.replace(colorMatch, color => {return ' <span style="text-decoration-color: ' + color + '; ">' + color + '</span> '}) : 
        colorInput.value;
}

renderColorBox();
renderColorUnderline();
renderColorBorderHighlight();

colorInput.onkeyup = function() {
    renderColorBox();
    renderColorUnderline();
    renderColorBorderHighlight();
}