window.onload = pageLoaded;
function pageLoaded(){

  var menuToggle = document.querySelector(".menu-toggle");

  menuToggle.onclick = toggleMenu;
}
function toggleMenu(){
  var menu = document.querySelector(".main-menu");
  main-menu.classList.toggle("show-small");
}