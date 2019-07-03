//JS Script zum aendern der Farben bei der Naehrwerteansicht

"use strict";


//Funktion die abheangig von der width die Farbe der Bar aendert
function changeColor() {
    console.log("bin da");
    const width = Array.from(document.querySelectorAll(".colorBar"));
    for (let i = 0; i < width.length; i++) {
        width[i].classList.remove("greenColorBar");
        width[i].classList.remove("yellowColorBar");
        width[i].classList.remove("redColorBar");
        if (width[i].dataset.width < 20) {
            width[i].classList.remove("greenColorBar");
            width[i].classList.remove("yellowColorBar");
            width[i].classList.remove("redColorBar");
            width[i].classList.add("greenColorBar");
        }
        if (width[i].dataset.width >= 20 && width[i].dataset.width <= 40) {
            width[i].classList.remove("greenColorBar");
            width[i].classList.remove("yellowColorBar");
            width[i].classList.remove("redColorBar");
            width[i].classList.add("yellowColorBar");
        }
        if (width[i].dataset.width > 40) {
            width[i].classList.remove("greenColorBar");
            width[i].classList.remove("yellowColorBar");
            width[i].classList.remove("redColorBar");
            width[i].classList.add("redColorBar");
        }
    }

}

window.addEventListener('load', event => {

    changeColor();
});