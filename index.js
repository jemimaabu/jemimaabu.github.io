var headerHeight = window.getComputedStyle(document.querySelector('body'), ':before').height;
var sideheight = document.getElementById("sidebar").offsetTop;
var workheight = document.getElementById("work").offsetTop;
var aboutheight = document.getElementById("about").offsetTop;
var conheight = document.getElementById("contact").offsetTop;
var workcolor = document.getElementById("workcolor");
var aboutcolor = document.getElementById("aboutcolor");
var contactcolor = document.getElementById("contactcolor");

//colorToggle function
switchCheckbox.onclick = function() {
  if (this.checked){
    document.getElementsByTagName('body')[0].id = "light";
  } else {
    document.getElementsByTagName('body')[0].removeAttribute("id");
  }
}

//Call sidebarScroll function on page scroll
window.onscroll = function() {
  sidebarScroll();
}

// Scroll function
function sidebarScroll() {
  if (window.pageYOffset + parseInt(headerHeight) >= workheight){
    sidebar.className="fixed";
    workcolor.className = "active";
  }
  else if (window.pageYOffset < workheight){
    sidebar.className="";
    workcolor.className =""
  }
  if (window.pageYOffset > aboutheight-150){
    workcolor.className =""
    aboutcolor.className = "active"
  }
  else if (window.pageYOffset < aboutheight){
    aboutcolor.className = ""
  }
  if (window.pageYOffset > conheight-150){
    aboutcolor.className = ""
    contactcolor.className = "active"
  }
  else if (window.pageYOffset < conheight){
    contactcolor.className = ""
  }
}

// Set day and light toggle based on time of day
var hours = new Date().getHours();
if (hours>=6 && hours<=17) {
  switchCheckbox.checked = true;
  switchCheckbox.onclick();
}