let clock = document.querySelector(".conatiner");

function showtime() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var ap = h > 11 ? "PM" : "AM";

  if (h > 12) {
    h = h - 12;
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + "" + ap;
  setTimeout(showtime, 1000);
  clock.innerText = time;
  clock.style.fontSize = "30px";
  clock.style.color = "white";
}
