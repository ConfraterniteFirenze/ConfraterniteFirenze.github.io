// The data/time we want to countdown to
var countDownDate = new Date("Sept 24, 22 9:30:18").getTime();
var countElement = document.getElementById("count");
// Run myfunc every second

function refresh(){
var now = new Date().getTime();
  var timeleft = countDownDate - now;

  // Calculating the days, hours, minutes and seconds left
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));

  // Result is output to the specific element
  countElement.innerText = days;

  // Display the message when countdown is over
  if (timeleft < 0) {
    clearInterval(myfunc);
    countElement.innerText = "";
  }
}

var myfunc = setInterval(refresh, 1000*300);
refresh();
