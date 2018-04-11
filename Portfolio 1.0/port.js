/*var load;

function loader() {
    document.getElementById("main").style.display = "none";
    document.getElementById("banner").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("work").style.display = "none";
    document.getElementById("contact").style.display = "none";
    load = setTimeout(showPage, 6000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.getElementById("banner").style.display = "block";
  var x = document.getElementsByTagName("Body");
  var i;
  for (i = 0; i < x.length; i++) {
  x[i].style.backgroundColor = "#000000ef";
}
}
var i = 0;
var txt = 'Hello!'; The text
var speed = 30; The speed/duration of the effect in milliseconds 

function type() {
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}*/
function main() {
    document.getElementById("main").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("work").style.display = "none";
    document.getElementById("contact").style.display = "none";
    var x = document.getElementsByTagName("Body");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#000000ef";
  }
}
function about() {
    document.getElementById("about").style.display = "block";
    document.getElementById("main").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("work").style.display = "none";
    document.getElementById("contact").style.display = "none";
    var x = document.getElementsByTagName("Body");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#04121C";
  }
}
function work() {
    document.getElementById("work").style.display = "block";
    document.getElementById("main").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";
    var x = document.getElementsByTagName("Body");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#041c12";
  }
}
function contact() {
    document.getElementById("contact").style.display = "block";
    document.getElementById("main").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("work").style.display = "none";
    var x = document.getElementsByTagName("Body");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#330821";
  }
}
function skills() {
    document.getElementById("skills").style.display = "block";
    document.getElementById("main").style.display = "none";
    document.getElementById("work").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";
    var x = document.getElementsByTagName("Body");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#330303";
  }
}
