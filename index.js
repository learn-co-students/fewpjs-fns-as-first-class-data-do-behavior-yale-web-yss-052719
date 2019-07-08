/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time)
{
  debugger
  if (time.split(':')[0] < 12) { return "Good Morning" }
  else if ((time.split(':')[0] < 17)&&(time.split(':')[0] > 12)) { return "Good Afternoon"}
  else { return "Good Evening"}

}

function displayMessage(message)
{
  var element;
  element = document.querySelector('h1#greeting');
  element.textContent = message;
  
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
