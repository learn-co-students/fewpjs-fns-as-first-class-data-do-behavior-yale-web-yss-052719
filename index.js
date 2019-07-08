/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let hour = Number(time.split(':')[0]);
  if (hour < 12) {
      return "Good Morning";
  } else if (hour > 17) {
      return "Good Evening";
  } else {
      return "Good Afternoon";
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  greeting = document.getElementById("greeting");
  greeting.innerText = msg;
}
