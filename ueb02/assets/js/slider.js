/**
 * Realisiert den Slider
 */

//Zahlervariable
let counter = 0;

//Bool fuer die Slider richtung 
let dir = true;

/**
 * Funktion, die den Bool fuer die Richtung aendert
 */
function switchDirection() {
	dir = !dir;
}

/**
 * Funktion die den Slider realisiert. Abheangig von der Position werden Klassen hinzugefuegt oder entfernt,
 * welche fuer die Sichbarkeit zusteandig sind
 * @param  c : Zaehlt die Position beim durchlaufen hoch
 */
function sliderSwitcher(c) {

	//Selektiert alle slider Elemente (alle rezepte)
	const divs = Array.from(document.querySelectorAll(".sliderElem"));

	//Saubert alle Klassen
	for (var i = 0; i < divs.length; i++) {
		divs[i].classList.remove("leftPos");
		divs[i].classList.remove("midPos");
		divs[i].classList.remove("rightPos");
		divs[i].classList.add("notShown");
	}

	//Klassen werden so hinzugefuegt, dass der Slider realisiert wird
	if (c == divs.length - 2) {
		divs[c].classList.add("leftPos");
		divs[c].classList.remove("notShown");
		divs[c + 1].classList.add("midPos");
		divs[c + 1].classList.remove("notShown");
		divs[0].classList.add("rightPos");
		divs[0].classList.remove("notShown");

	} else if (c == divs.length - 1) {
		divs[c].classList.add("leftPos");
		divs[c].classList.remove("notShown");
		divs[0].classList.add("midPos");
		divs[0].classList.remove("notShown");
		divs[1].classList.add("rightPos");
		divs[1].classList.remove("notShown");

	} else if (c >= divs.length && dir) {
		c = 0;
		counter = 0;

		divs[c].classList.add("leftPos");
		divs[c].classList.remove("notShown");
		divs[c + 1].classList.add("midPos");
		divs[c + 1].classList.remove("notShown");
		divs[c + 2].classList.add("rightPos");
		divs[c + 2].classList.remove("notShown");
	} else if (counter < 0 && !dir) {
		counter = divs.length - 1;
		c = counter;

		divs[c].classList.add("leftPos");
		divs[c].classList.remove("notShown");
		divs[0].classList.add("midPos");
		divs[0].classList.remove("notShown");
		divs[1].classList.add("rightPos");
		divs[1].classList.remove("notShown");
	} else {
		divs[c].classList.add("leftPos");
		divs[c].classList.remove("notShown");
		divs[c + 1].classList.add("midPos");
		divs[c + 1].classList.remove("notShown");
		divs[c + 2].classList.add("rightPos");
		divs[c + 2].classList.remove("notShown");
	}
	//Abheangig von der Direction Dir, wird entschieden in welcher Richtung der Slider lauft
	if (dir) {
		counter++;
	} else {
		counter--;
	}
}



//Wenn wir genug Elemente fuer den Slider haben
if (Array.from(document.querySelectorAll(".sliderElem").length >= 3)) {
	document.querySelector("#clickMe").classList.remove("notShown");

	const divs = Array.from(document.querySelectorAll(".sliderElem"));
	divs[0].classList.add("leftPos");
	divs[1].classList.add("midPos");
	divs[2].classList.add("rightPos");
	for (var i = 3; i < divs.length; i++) {
		divs[i].classList.add("notShown");
	}

	counter++;

	let timer = setInterval(sliderSwitcherStart, 2000);

	function sliderSwitcherStart() {

		sliderSwitcher(counter);
	}
} else {
	//Button ausblenden
	document.querySelector("#clickMe").classList.add("notShown");
}