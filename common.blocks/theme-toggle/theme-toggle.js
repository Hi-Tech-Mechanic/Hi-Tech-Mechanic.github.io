class dark{
  static textColor = "white";
  static backgroundColor = "hsla(0, 0%, 5%, 0.3)";
  static buttonBackgroundColor = "hsla(0, 0%, 15%, 0.5)";
  static backgroundImage = 'url("images/backgrounds/dark/mesh-294.png")';
}

class light{
  static textColor = "black";
  static backgroundColor = "hsla(0, 0%, 95%, 0.3)";
  static buttonBackgroundColor = "hsla(0, 0%, 65%, 0.5)";
  static backgroundImage = 'url("images/backgrounds/light/mesh-776.png")';
}

const darkTheme = {
  "--text-color": dark.textColor,
  "--background-color": dark.backgroundColor,
  "--button-background-color": dark.buttonBackgroundColor,
};

const lightTheme = {
  "--text-color": light.textColor,
  "--background-color": light.backgroundColor,
  "--button-background-color": light.buttonBackgroundColor,
};

const themeToggle = [...document.querySelectorAll(".theme-toggle")];
const body = document.getElementById("body");

init();

themeToggle.forEach((element) => {
  element.addEventListener("click", function () {
    for (let i = 0; i < themeToggle.length; i++) {
      if (themeToggle[i].index % 2 == 0) {
        for (let key in darkTheme) {
          document.documentElement.style.setProperty(key, darkTheme[key]);
        }
        changeBackgroundImage(dark.backgroundImage);
        themeToggle[i].children[0].src = "images/other/sun.avif";
        themeToggle[i].index = 1;

        // localStorage.setItem('themeColor', lightTheme["--text-color"]);
        // let savedTheme = localStorage.getItem('themeColor');
        // console.log(savedTheme);
        // for(let key in savedTheme){
        //   console.log(savedTheme[key]);
        //   // document.documentElement.style.setProperty(key, savedTheme[key]);
        // }
      } else {
        for (let key in lightTheme) {
          document.documentElement.style.setProperty(key, lightTheme[key]);
          // localStorage.setItem(key, lightTheme[key]);
        }
        changeBackgroundImage(light.backgroundImage);
        themeToggle[i].children[0].src = "images/other/moon.avif";
        themeToggle[i].index = 2;

        // localStorage.setItem('themeColor', darkTheme);
      }
      // console.log(themeToggle[i].index);
    }
  });
});

function init(){
  changeBackgroundImage(dark.backgroundImage);
}

function changeBackgroundImage(imgSrc){
  body.style.backgroundImage = imgSrc;
}

// themeToggle.forEach((element) => {
//   element

// const savedTheme = localStorage.getItem('themeColor');
// if (savedTheme != null){
//   for(let key in savedTheme){
//     document.documentElement.style.setProperty(key, savedTheme[key]);
//   }
// }
