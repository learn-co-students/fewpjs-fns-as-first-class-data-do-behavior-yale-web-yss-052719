/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const time = parseInt(timeString, 10)
  if ( time < 12) {
    return "Good Morning";
  } else if (time <= 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
};

function displayMessage(string) {
  document.getElementById("greeting").innerText = string
}

/* Write your implementation of displayMessage() */
