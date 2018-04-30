switchCheckbox.onclick = function colorChanger(){
  var switchCheckbox = document.getElementById("switchCheckbox")
  var sidebar = document.getElementById("sidebar");
  var work = document.getElementById("work");
  var workcolor = document.getElementById("workcolor")
  var about = document.getElementById("about");
  var aboutcolor = document.getElementById("aboutcolor")
  var contact = document.getElementById("contact");
  var contactcolor = document.getElementById("contactcolor")
  var logo = document.getElementById("logo")
  var header = document.getElementById("header-image")
  var medium = document.getElementById("medium")
  var teal = document.getElementById("tealaccent")
  var blue = document.getElementById("blueaccent")
  var green = document.getElementById("greenaccent")
  var yellow = document.getElementById("yellowaccent")
  var red = document.getElementById("redaccent")
  var purple = document.getElementById("purpleaccent")
  if (this.checked){
    document.body.style.backgroundColor = "#EAEAEB"
    sidebar.style.background="#EAEAEB"
    logo.style.filter = "invert(0%)"
    medium.style.filter = "invert(0%)"
    header.style.filter = "grayscale(0%)";
    teal.style.color = "#009688";
    blue.style.color = "#4078F3";
    green.style.color = "#50A14F";
    yellow.style.color="#986801";
    red.style.color = "#E45649";
    purple.style.color="#A626A4"
    work.style.background="#FAFAFA";
    about.style.background="#FBFBFB";
    contact.style.background="#FCFCFC";
    work.style.color="#383842";
    about.style.color="#383842";
    contact.style.color="#383842";

    window.onscroll = function() {scroll()};
    var mq = window.matchMedia( "(min-width: 660px)" );
    if (mq.matches) {
      function scroll() {
        var sidebar = document.getElementById("sidebar");
        var sideheight = sidebar.offsetTop;
        var work = document.getElementById("work");
        var workheight = work.offsetTop;
        var workcolor = document.getElementById("workcolor")
        var about = document.getElementById("about");
        var aboutheight = about.offsetTop;
        var aboutcolor = document.getElementById("aboutcolor")
        var contact = document.getElementById("contact");
        var conheight = contact.offsetTop;
        var contactcolor = document.getElementById("contactcolor")
        if (window.pageYOffset >= workheight){
          sidebar.style.position="fixed";
          sidebar.style.top="0";
          workcolor.style.color = "#2DB448"
          workcolor.style.background="#FAFAFA"
          aboutcolor.style.color = "#6F7A90"
          aboutcolor.style.background="transparent"
          contactcolor.style.color = "#6F7A90"
          contactcolor.style.background = "transparent"
        }
        else if (window.pageYOffset < workheight){
          sidebar.style.position="relative";
          sidebar.style.top="auto";
          workcolor.style.color = "#6F7A90"
          workcolor.style.background="transparent"
        }
        if (window.pageYOffset > (aboutheight)-(workheight*0.25)){
          aboutcolor.style.color = "#2DB448"
          aboutcolor.style.background="#FBFBFB"
          workcolor.style.color = "#6F7A90"
          workcolor.style.background="transparent"
          contactcolor.style.color = "#6F7A90"
          contactcolor.style.background = "transparent"
        }
        else if (window.pageYOffset < aboutheight){
          aboutcolor.style.color = "#6F7A90"
          aboutcolor.style.background="transparent"
        }
        if (window.pageYOffset > (conheight)-(aboutheight*0.25)){
          contactcolor.style.color = "#2DB448"
          workcolor.style.color = "#6F7A90"
          aboutcolor.style.color = "#6F7A90"
          contactcolor.style.background="#FCFCFC"
          workcolor.style.background="transparent"
          aboutcolor.style.background="transparent"
        }
        else if (window.pageYOffset < conheight){
          contactcolor.style.color = "#6F7A90"
          contactcolor.style.background="transparent"
        }
      }
    }
    else{
      function scroll() {
        var sidebar = document.getElementById("sidebar");
        var sideheight = sidebar.offsetTop;
        var work = document.getElementById("work");
        var workheight = work.offsetTop;
        var workcolor = document.getElementById("workcolor")
        var about = document.getElementById("about");
        var aboutheight = about.offsetTop;
        var aboutcolor = document.getElementById("aboutcolor")
        var contact = document.getElementById("contact");
        var conheight = contact.offsetTop;
        var contactcolor = document.getElementById("contactcolor")
        if (window.pageYOffset >= workheight){
          sidebar.style.position="fixed";
          sidebar.style.top="55px";
          work.style.paddingTop="75px";
          workcolor.style.display="block"
          aboutcolor.style.display="none"
          contactcolor.style.display = "none"
        }
        else if (window.pageYOffset < workheight){
          sidebar.style.position="relative";
          sidebar.style.top="auto";
          work.style.paddingTop="2vmin";
          workcolor.style.display="none"
        }
        if (window.pageYOffset > (aboutheight)-(workheight*0.25)){
          workcolor.style.display="none"
          aboutcolor.style.display="block"
          contactcolor.style.display = "none"
        }
        else if (window.pageYOffset < aboutheight){
          aboutcolor.style.display="none"
        }
        if (window.pageYOffset > (conheight)-(aboutheight*0.25)){
          workcolor.style.display="none"
          aboutcolor.style.display="none"
          contactcolor.style.display = "block"
        }
        else if (window.pageYOffset < conheight){
          contactcolor.style.display = "none"
        }
        }
    }
  }
  else{
    document.body.style.backgroundColor = "#21252b"
    sidebar.style.background="#21252b"
    logo.style.filter = "invert(100%)"
    medium.style.filter = "invert(100%)"
    header.style.filter = "grayscale(100%)";
    teal.style.color = "#56B6B9";
    blue.style.color = "#61AFEF";
    green.style.color = "#73C990";
    yellow.style.color="#D19A66";
    red.style.color = "#E06C75";
    purple.style.color="#C678DD"
    work.style.background="#282c34";
    about.style.background="#282d37";
    contact.style.background="#292f3b";
    work.style.color="#D7DAE0"
    about.style.color="#D7DAE0"
    contact.style.color="#D7DAE0"

    window.onscroll = function() {scroll()};
    var mq = window.matchMedia( "(min-width: 660px)" );
    if (mq.matches) {
      function scroll() {
        var sidebar = document.getElementById("sidebar");
        var sideheight = sidebar.offsetTop;
        var work = document.getElementById("work");
        var workheight = work.offsetTop;
        var workcolor = document.getElementById("workcolor")
        var about = document.getElementById("about");
        var aboutheight = about.offsetTop;
        var aboutcolor = document.getElementById("aboutcolor")
        var contact = document.getElementById("contact");
        var conheight = contact.offsetTop;
        var contactcolor = document.getElementById("contactcolor")
        if (window.pageYOffset >= workheight){
          sidebar.style.position="fixed";
          sidebar.style.top="0";
          workcolor.style.color = "#7CC379"
          workcolor.style.background="#282c34"
          aboutcolor.style.color = "#6B717D"
          aboutcolor.style.background="transparent"
          contactcolor.style.color = "#6B717D"
          contactcolor.style.background = "transparent"
        }
        else if (window.pageYOffset < workheight){
          sidebar.style.position="relative";
          sidebar.style.top="auto";
          workcolor.style.color = "#6B717D"
          workcolor.style.background="transparent"
        }
        if (window.pageYOffset > (aboutheight)-(workheight*0.25)){
          aboutcolor.style.color = "#7CC379"
          aboutcolor.style.background="#282d37"
          workcolor.style.color = "#6B717D"
          workcolor.style.background="transparent"
          contactcolor.style.color = "#6B717D"
          contactcolor.style.background = "transparent"
        }
        else if (window.pageYOffset < aboutheight){
          aboutcolor.style.color = "#6B717D"
          aboutcolor.style.background="transparent"
        }
        if (window.pageYOffset > (conheight)-(aboutheight*0.25)){
          contactcolor.style.color = "#7CC379"
          workcolor.style.color = "#6B717D"
          aboutcolor.style.color = "#6B717D"
          contactcolor.style.background="#292f3b"
          workcolor.style.background="transparent"
          aboutcolor.style.background="transparent"
        }
        else if (window.pageYOffset < conheight){
          contactcolor.style.color = "#6B717D"
          contactcolor.style.background="transparent"
        }
      }
    }
    else{
      function scroll() {
        var sidebar = document.getElementById("sidebar");
        var sideheight = sidebar.offsetTop;
        var work = document.getElementById("work");
        var workheight = work.offsetTop;
        var workcolor = document.getElementById("workcolor")
        var about = document.getElementById("about");
        var aboutheight = about.offsetTop;
        var aboutcolor = document.getElementById("aboutcolor")
        var contact = document.getElementById("contact");
        var conheight = contact.offsetTop;
        var contactcolor = document.getElementById("contactcolor")
        if (window.pageYOffset >= workheight){
          sidebar.style.position="fixed";
          sidebar.style.top="55px";
          work.style.paddingTop="75px";
          workcolor.style.display="block"
          aboutcolor.style.display="none"
          contactcolor.style.display = "none"
        }
        else if (window.pageYOffset < workheight){
          sidebar.style.position="relative";
          sidebar.style.top="auto";
          work.style.paddingTop="2vmin";
          workcolor.style.display="none"
        }
        if (window.pageYOffset > (aboutheight)-(workheight*0.25)){
          workcolor.style.display="none"
          aboutcolor.style.display="block"
          contactcolor.style.display = "none"
        }
        else if (window.pageYOffset < aboutheight){
          aboutcolor.style.display="none"
        }
        if (window.pageYOffset > (conheight)-(aboutheight*0.25)){
          workcolor.style.display="none"
          aboutcolor.style.display="none"
          contactcolor.style.display = "block"
        }
        else if (window.pageYOffset < conheight){
          contactcolor.style.display = "none"
        }
        }
    }

  }
}

window.onscroll = function() {scroll()};
var mq = window.matchMedia( "(min-width: 660px)" );
if (mq.matches) {
  function scroll() {
    var sidebar = document.getElementById("sidebar");
    var sideheight = sidebar.offsetTop;
    var work = document.getElementById("work");
    var workheight = work.offsetTop;
    var workcolor = document.getElementById("workcolor")
    var about = document.getElementById("about");
    var aboutheight = about.offsetTop;
    var aboutcolor = document.getElementById("aboutcolor")
    var contact = document.getElementById("contact");
    var conheight = contact.offsetTop;
    var contactcolor = document.getElementById("contactcolor")
    if (window.pageYOffset >= workheight){
      sidebar.style.position="fixed";
      sidebar.style.top="0";
      workcolor.style.color = "#7CC379"
      workcolor.style.background="#282c34"
      aboutcolor.style.color = "#6B717D"
      aboutcolor.style.background="transparent"
      contactcolor.style.color = "#6B717D"
      contactcolor.style.background = "transparent"
    }
    else if (window.pageYOffset < workheight){
      sidebar.style.position="relative";
      sidebar.style.top="auto";
      workcolor.style.color = "#6B717D"
      workcolor.style.background="transparent"
    }
    if (window.pageYOffset > (aboutheight)-(workheight*0.25)){
      aboutcolor.style.color = "#7CC379"
      aboutcolor.style.background="#282d37"
      workcolor.style.color = "#6B717D"
      workcolor.style.background="transparent"
      contactcolor.style.color = "#6B717D"
      contactcolor.style.background = "transparent"
    }
    else if (window.pageYOffset < aboutheight){
      aboutcolor.style.color = "#6B717D"
      aboutcolor.style.background="transparent"
    }
    if (window.pageYOffset > (conheight)-(aboutheight*0.25)){
      contactcolor.style.color = "#7CC379"
      workcolor.style.color = "#6B717D"
      aboutcolor.style.color = "#6B717D"
      contactcolor.style.background="#292f3b"
      workcolor.style.background="transparent"
      aboutcolor.style.background="transparent"
    }
    else if (window.pageYOffset < conheight){
      contactcolor.style.color = "#6B717D"
      contactcolor.style.background="transparent"
    }
  }
}
else{
  function scroll() {
    var sidebar = document.getElementById("sidebar");
    var sideheight = sidebar.offsetTop;
    var work = document.getElementById("work");
    var workheight = work.offsetTop;
    var workcolor = document.getElementById("workcolor")
    var about = document.getElementById("about");
    var aboutheight = about.offsetTop;
    var aboutcolor = document.getElementById("aboutcolor")
    var contact = document.getElementById("contact");
    var conheight = contact.offsetTop;
    var contactcolor = document.getElementById("contactcolor")
    if (window.pageYOffset >= workheight){
      sidebar.style.position="fixed";
      sidebar.style.top="55px";
      work.style.paddingTop="75px";
      workcolor.style.display="block"
      aboutcolor.style.display="none"
      contactcolor.style.display = "none"
    }
    else if (window.pageYOffset < workheight){
      sidebar.style.position="relative";
      sidebar.style.top="auto";
      work.style.paddingTop="2vmin";
      workcolor.style.display="none"
    }
    if (window.pageYOffset > (aboutheight)-(workheight*0.25)){
      workcolor.style.display="none"
      aboutcolor.style.display="block"
      contactcolor.style.display = "none"
    }
    else if (window.pageYOffset < aboutheight){
      aboutcolor.style.display="none"
    }
    if (window.pageYOffset > (conheight)-(aboutheight*0.25)){
      workcolor.style.display="none"
      aboutcolor.style.display="none"
      contactcolor.style.display = "block"
    }
    else if (window.pageYOffset < conheight){
      contactcolor.style.display = "none"
    }
    }
}
var hours = new Date().getHours();
if (hours>=6 && hours<=17) {
  switchCheckbox.checked = true;
  switchCheckbox.onclick();
}