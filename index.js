/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {

	let timeInt = parseInt(time, 10)
	let noon = parseInt("12:00", 10)
	let evening = parseInt("17:00", 10)

	if (timeInt < noon) {
		return "Good Morning";
	} else if (evening <= timeInt) {
		return "Good Evening";
	} else {
		return "Good Afternoon";
	}
}

function displayMessage(string) {
	document.querySelector("h1#greeting").innerText = string
}
/* Write your implementation of displayMessage() */
