class dark{
  static textColor = "white";
  static backgroundColor = "hsl(0, 0%, 5%)";
  static buttonBackgroundColor = "hsl(0, 0%, 15%)";
}

class light{
  static textColor = "black";
  static backgroundColor = "hsl(0, 0%, 95%)";
  static buttonBackgroundColor = "hsl(0, 0%, 65%)";
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

themeToggle.forEach((element) => {
  element.addEventListener("click", function () {
    for (let i = 0; i < themeToggle.length; i++) {
      if (themeToggle[i].index % 2 == 0) {
        for (let key in darkTheme) {
          document.documentElement.style.setProperty(key, darkTheme[key]);
        }

        console.log(themeToggle[i].lastChild);
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

        console.log(themeToggle[i].lastChild.src);
        themeToggle[i].children[0].src = "images/other/moon.avif";
        themeToggle[i].index = 2;

        // localStorage.setItem('themeColor', darkTheme);
      }
      // console.log(themeToggle[i].index);
    }
  });
});

// themeToggle.forEach((element) => {
//   element

// const savedTheme = localStorage.getItem('themeColor');
// if (savedTheme != null){
//   for(let key in savedTheme){
//     document.documentElement.style.setProperty(key, savedTheme[key]);
//   }
// }
