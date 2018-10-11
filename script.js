function compute_speed() {
  var x = document.getElementById("demo");
  x.style.fontSize = "16px";
  x.style.color = "black";
  var d1 = prompt("How many kilometers did you travel?");
  var t1 = prompt("How many minutes did you take?");
  var t2 = parseFloat(t1) / 60.0;
  var s = parseFloat(d1) / parseFloat(t2);
  document.getElementById("display1").innerHTML = "You traveled at ";
  document.getElementById("display2").innerHTML = " " + s + " ";
  document.getElementById("display3").innerHTML = "Kilometers per hour.";
}
