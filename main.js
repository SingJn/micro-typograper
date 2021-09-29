let attributeArray = ["font-size", "font-weight", "line-height", "letter-spacing", "word-spacing", "left-margin", "right-margin"];
let computedAttributeArray = ["fontSize", "fontWeight", "lineHeight", "letterSpacing", "wordSpacing", "marginLeft", "marginRight"];

let numFontSize = 10;
let numFontWeight = 100;
let numLineHeight = 18;
let numLetterSpacing = 10;
let numWordSpacing = 10;
let numMarginLeft = 10;
let numMarginRight = 10;

window.onload = function() {
    attributeCall();
}

function attributeCall() {
    for (i in attributeArray) {
        var a = document.getElementById(attributeArray[i]);
        var p = document.getElementById("paragraph");
        var paragraphStyle = getComputedStyle(p)
        var takenAttribute = paragraphStyle[computedAttributeArray[i]];
    
        a.innerHTML = takenAttribute;
    }
}

var lastTouchEnd = 0;
document.querySelectorAll("button").addEventListener('touchend', function (event) {
  var now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);

document.getElementById("button-plus-font-size").addEventListener("click", function() {
    numFontSize += 1;
    document.getElementById("paragraph").style.fontSize = numFontSize + "px";
    document.getElementById("paragraph").style.marginTop = numFontSize + "px";
    attributeCall();
})

document.getElementById("button-minus-font-size").addEventListener("click", function() {
    numFontSize -= 1;
    document.getElementById("paragraph").style.fontSize = numFontSize + "px";
    document.getElementById("paragraph").style.marginTop = numFontSize + "px";
    attributeCall();
})

document.getElementById("button-plus-font-weight").addEventListener("click", function() {
    numFontWeight += 100;
    document.getElementById("paragraph").style.fontWeight = numFontWeight;
    attributeCall();
})

document.getElementById("button-minus-font-weight").addEventListener("click", function() {
    numFontWeight -= 100;
    document.getElementById("paragraph").style.fontWeight = numFontWeight;
    attributeCall();
})

document.getElementById("button-plus-line-height").addEventListener("click", function() {
    numLineHeight += 1;
    document.getElementById("paragraph").style.lineHeight = numLineHeight + "px";
    attributeCall();
})

document.getElementById("button-minus-line-height").addEventListener("click", function() {
    numLineHeight -= 1;
    document.getElementById("paragraph").style.lineHeight = numLineHeight + "px";
    attributeCall();
})

document.getElementById("button-plus-letter-spacing").addEventListener("click", function() {
    numLetterSpacing += 1;
    document.getElementById("paragraph").style.letterSpacing = numLetterSpacing + "px";
    attributeCall();
})

document.getElementById("button-minus-letter-spacing").addEventListener("click", function() {
    numLetterSpacing -= 1;
    document.getElementById("paragraph").style.letterSpacing = numLetterSpacing + "px";
    attributeCall();
})

document.getElementById("button-plus-word-spacing").addEventListener("click", function() {
    numWordSpacing += 1;
    document.getElementById("paragraph").style.wordSpacing = numWordSpacing + "px";
    attributeCall();
})

document.getElementById("button-minus-word-spacing").addEventListener("click", function() {
    numWordSpacing -= 1;
    document.getElementById("paragraph").style.wordSpacing = numWordSpacing + "px";
    attributeCall();
})

document.getElementById("button-plus-left-margin").addEventListener("click", function() {
    numMarginLeft += 1;
    document.getElementById("paragraph").style.marginLeft = numMarginLeft + "px";
    attributeCall();
})

document.getElementById("button-minus-left-margin").addEventListener("click", function() {
    numMarginLeft -= 1;
    document.getElementById("paragraph").style.marginLeft = numMarginLeft + "px";
    attributeCall();
})

document.getElementById("button-plus-right-margin").addEventListener("click", function() {
    numMarginRight += 1;
    document.getElementById("paragraph").style.marginRight = numMarginRight + "px";
    attributeCall();
})

document.getElementById("button-minus-right-margin").addEventListener("click", function() {
    numMarginRight -= 1;
    document.getElementById("paragraph").style.marginRight = numMarginRight + "px";
    attributeCall();
})


