// JavaScript Document

//change display
function d(val) {
	document.getElementById("d").value = val;
}
// type numbers and operators
function v(val) {
	if ( val == "π" ) {
        val = Math.PI;
    }

function v(val) {
	if ( val == "e" ) {
        val = Math.E;
    }

	document.getElementById("d").value += val;
}

//evaluate the equation
function e() {
	try {
		d(eval(document.getElementById("d").value));
	}
	catch(err) { 
	d("Error");
	}
	
}