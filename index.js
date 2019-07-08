/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){

  const time = string.replace(":", "")

  parseInt(time, 10)

  if (time < 1200){
    return "Good Morning"
  }
  else if (time > 1700) {
    return "Good Evening"
  }
  else {
    return "Good Afternoon"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
  const greet = document.getElementById("greeting");
  greet.innerText = string
}
