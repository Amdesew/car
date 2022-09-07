/*
	Time Manual:
		1sec => 1000
		1min => 60,000
		3,600,00 => 1hr
		86,400,000 => 1day(24hr)
*/

setTimeout(yellow, 2400000)

function yellow(){
	document.getElementById('h1').style.color = "yellow";
	document.getElementById('motor').style.color = "yellow";
}

setTimeout(red, 2700000)

function red(){
	document.getElementById('h1').style.color = "red";
	document.getElementById('motor').style.color = "red";
}