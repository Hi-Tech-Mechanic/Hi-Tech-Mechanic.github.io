const navMenu = document.getElementById("navigation-menu");
const dropdownButton = document.getElementById("dropdown-button");

const navMenuCachedDisplay = navMenu.style.display;
const dropdownButtonCachedDisplay = dropdownButton.style.display;

const minWidthPoint = 780;

checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);

function checkScreenWidth() {
  const width = document.body.clientWidth;

  if (width <= minWidthPoint) {
    navMenu.style.display = "none";
    dropdownButton.style.display = "flex";
  } else {
    navMenu.style.display = navMenuCachedDisplay;
    dropdownButton.style.display = dropdownButtonCachedDisplay;
  }
}
