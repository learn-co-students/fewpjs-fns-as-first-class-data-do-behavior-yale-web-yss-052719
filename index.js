/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let hour = parseInt(string, 10)
  if (hour < 12) {
    return "Good Morning";
  } else if (hour > 16) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.querySelector("h1#greeting").innerText = string
}