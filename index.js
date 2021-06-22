/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

const greet = (timeString) =>{
//   var d = new Date();
// var n = d.getHours();
  if(timeString < 12){
  return "Good Morinig"
  }
}
/* Write your implementation of displayMessage() */
