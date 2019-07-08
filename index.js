/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  var hour  = time.substring(0,2);
  const numHour = parseInt(hour, 10);
  let msg = "";
  if (numHour < 12 && numHour > 0 ) {
    msg = "Good Morning"
  }
  else if (numHour > 12  && numHour < 17) {
    msg = "Good Afternoon"
  }
  else {
    msg = "Good Evening"
  }

  return msg;

}

/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}