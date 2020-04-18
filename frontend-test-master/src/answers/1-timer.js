// Please build a timer that display in `hh:mm:ss` format with “start”, “pause” and “stop” functions.
// Vanilla js (without third party package) only
// Note that there are predefined elements in `public/index.html`, you don't need to create them manually.

export default function (selector) {
  // let el = document.querySelector(selector)
  var myVar = setInterval(start ,1000);
  var Seconds = 0;

  function startTimer() { 
      myVar = setInterval(start ,1000);
      Seconds = 0;
  }

  function resumeTimer() {    
      myVar = setInterval(start ,1000);
  }

  function start() {
      // var d = new Date();
      // document.getElementById("demo").innerHTML = d.toLocaleTimeString();
      Seconds++;
      document.querySelector("#secondsPassed").innerHTML = Seconds;
  }

  function stopTimer() {
      clearInterval(myVar)
  }
}
