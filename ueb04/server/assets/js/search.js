// Bool Werte fuer die gesetzten Hacken
let rezeptName = true;
let rezeptCate = false;
let rezeptTag = false;
let rezeptIngred = false;


/* Die Funktion durchsucht die Rezepte anhand des gesuchten Begriffes abhaengig 
 * von dem Bereich in in dem gesucht werden soll
 * @param ele ist der zu suchende Begriff
 */

function showSearched(ele) {
	let selector = ele;
	const rezname = Array.from(document.querySelectorAll("[data-rezeptname]"));
	const rezingred = Array.from(document.querySelectorAll("[data-rezeptingred]"));
	const rezcate = Array.from(document.querySelectorAll("[data-rezeptcate]"));
	const reztag = Array.from(document.querySelectorAll("[data-rezepttags]"));
	let ourDivs = Array.from(document.querySelectorAll(".search"));

	// Hier werden alle Bilder vorerst versteckt oder angzeigt
	if (selector != '') {
		for (i = 0; i < ourDivs.length; i++) {
			ourDivs[i].classList.add("notShown");
		}
	} else {
		for (i = 0; i < ourDivs.length; i++) {
			ourDivs[i].classList.remove("notShown");
		}
	}

	// Hier werden die checkboxen gefrueft und bearbeitet
	if (rezeptName) {
		for (i = 0; i < ourDivs.length; i++) {
			if (rezname[i].dataset["rezeptname"].toLowerCase().includes(selector.toLowerCase())) {
				ourDivs[i].classList.remove("notShown");
			}
		}
	}
	if (rezeptIngred) {
		for (i = 0; i < ourDivs.length; i++) {
			for (t = 0; t < rezingred[i].dataset["rezeptingred"].length; t++) {
				if (rezingred[i].dataset["rezeptingred"][t].zutatenName.toLowerCase().includes(selector.toLowerCase())) {
					ourDivs[i].classList.remove("notShown");
				}
			}
		}
	}
	if (rezeptCate) {
		for (i = 0; i < ourDivs.length; i++) {
			for (t = 0; t < rezcate[i].dataset["rezeptcate"].length; t++) {
				if (rezcate[i].dataset["rezeptcate"][t].toLowerCase().includes(selector.toLowerCase())) {
					ourDivs[i].classList.remove("notShown");
				}
			}
		}
	}
	if (rezeptTag) {
		for (i = 0; i < ourDivs.length; i++) {
			for (t = 0; t < reztag[i].dataset["rezepttags"].length; t++) {
				if (reztag[i].dataset["rezepttags"][t].toLowerCase().includes(selector.toLowerCase())) {
					ourDivs[i].classList.remove("notShown");
				}
			}
		}
	}
}

// Konstanten fuer die Checkboxen und der Suchleiste
const ourSearch = document.querySelector("#search");
const rezName = document.querySelector("#Rezeptname");
const rezIngred = document.querySelector("#Zutaten");
const rezCate = document.querySelector("#Kategorien");
const rezTag = document.querySelector("#Tags");


// Hier werden die Checkboxen und die Suchleiste belauscht
ourSearch.addEventListener('keyup', event => {
	showSearched(ourSearch.value);
});

rezName.addEventListener('change', event => {
	rezeptName = !rezeptName;
	showSearched(ourSearch.value);
});
rezIngred.addEventListener('change', event => {
	rezeptIngred = !rezeptIngred;
	showSearched(ourSearch.value);
});
rezCate.addEventListener('change', event => {
	rezeptCate = !rezeptCate;
	showSearched(ourSearch.value);
});
rezTag.addEventListener('change', event => {
	rezeptTag = !rezeptTag;
	showSearched(ourSearch.value);
});