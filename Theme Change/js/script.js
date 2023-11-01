// == Theme Change Script == //
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    // Toggle the data-theme attribute and update the button icon classes
    if (body.getAttribute("data-theme") === "dark_theme") {
        body.setAttribute("data-theme", "light_theme");
        document.querySelector('.fa-sun').classList.add('active');
        document.querySelector('.fa-moon').classList.remove('active');
    } else {
        body.setAttribute("data-theme", "dark_theme");
        document.querySelector('.fa-moon').classList.add('active');
        document.querySelector('.fa-sun').classList.remove('active');
    }
});
// == End of Theme Change Script == //

/* == CountDown == */
// Set the date we're counting down to (3 days from now)
var countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 3);

// Update the countdown every 1 second
var x = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown with two digits
    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// Helper function to format time with two digits
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
/* == CountDown == */

/* == ANIMATION CSS == */
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 1;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("showreveal");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  /* == ANIMATION CSS == */