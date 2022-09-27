const background = document.getElementById("background");
const foreground = document.getElementById("foreground");
const moon = document.getElementById("moon");

window.addEventListener("scroll", function() {
  // var interval = null, time_between_interval = 400;
  // this.setInterval(scrollLogic, time_between_interval);
  scrollLogic();
});

function scrollLogic() {
  let value = window.scrollY;
  moon.style.top = value * 0.75 + 'px';
  foreground.style.top = value * 0.25 + 'px';
  background.style.top = value * 0.05 + 'px';
}