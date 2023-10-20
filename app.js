document.getElementById("onOffImage").src = "of.png";
document.querySelector("#off").style.backgroundColor = "#FFFF00";
document.querySelector("#off").style.color = "#000";
document.getElementById("text").innerHTML = "OFF";
document.querySelector("#on").style.color = "#fff";
document.querySelector("#on").style.border = "1px solid #fff";
document.querySelector("#off").style.border = "1px solid #FFFF00";
// document.getElementById("onOffImage").src = "on.png";

// Bulb on Function

function On() {
  document.getElementById("onOffImage").src = "on.png";
  document.getElementById("text").innerHTML = "ON";
  document.querySelector("#on").style.backgroundColor = "#FFFF00";
  document.querySelector("#on").style.color = "#000";
  //
  document.querySelector("#off").style.backgroundColor = "#FFF";
  document.querySelector("#off").style.color = "#000";
}
function Of() {
  document.getElementById("onOffImage").src = "of.png";
  document.getElementById("text").innerHTML = "OFF";
  //
  document.querySelector("#off").style.backgroundColor = "#FFFF00";
  document.querySelector("#off").style.color = "#000";
  //
  document.querySelector("#on").style.backgroundColor = "#fff";
  document.querySelector("#on").style.color = "#000";
}
