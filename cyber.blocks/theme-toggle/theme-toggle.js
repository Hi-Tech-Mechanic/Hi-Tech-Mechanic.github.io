class dark {
  static textColor = "white";
  static backgroundColor = "hsla(0, 0%, 5%, 0.3)";
  static windowBackgroundColor = "hsl(0, 0%, 5%)";
  static buttonBackgroundColor = "hsla(0, 0%, 15%, 0.5)";
  static backgroundImage = 'url("./images/backgrounds/dark/mesh-294.avif")';
  static toggleImage = "./images/other/sun.avif";
}

class light {
  static textColor = "black";
  static backgroundColor = "hsla(0, 0%, 95%, 0.3)";
  static windowBackgroundColor = "hsl(0, 0%, 95%)";
  static buttonBackgroundColor = "hsla(0, 0%, 65%, 0.5)";
  static backgroundImage = 'url("./images/backgrounds/light/mesh-776.avif")';
  static toggleImage = "./images/other/moon.avif";
}

const darkTheme = {
  "--text-color": dark.textColor,
  "--background-color": dark.backgroundColor,
  "--window-background-color": dark.windowBackgroundColor,
  "--button-background-color": dark.buttonBackgroundColor,
};

const lightTheme = {
  "--text-color": light.textColor,
  "--background-color": light.backgroundColor,
  "--window-background-color": light.windowBackgroundColor,
  "--button-background-color": light.buttonBackgroundColor,
};

const themeToggle = [...document.querySelectorAll(".theme-toggle")];
const body = document.getElementById("body");

init();

themeToggle.forEach((element) => {
  element.addEventListener("click", function () {
    if (element.index == 2) {
      applyTheme("dark-theme");
    } else {
      applyTheme("light-theme");
    }
  });
});

function init() {
  checkSavedTheme();

  preloadImage("./images/backgrounds/dark/mesh-294.avif");
  preloadImage("./images/backgrounds/light/mesh-776.avif");
  preloadImage("./images/other/sun.avif");
  preloadImage("./images/other/moon.avif");

  changeBackgroundImage(dark.backgroundImage);
}

function applyTheme(theme) {
  if (theme === "dark-theme") {
    for (let i = 0; i < themeToggle.length; i++) {
      themeToggle[i].index = 1;
      changeToggleImage(i, dark.toggleImage);
    }

    for (let key in darkTheme) {
      document.documentElement.style.setProperty(key, darkTheme[key]);
    }

    changeBackgroundImage(dark.backgroundImage);
  } else if (theme === "light-theme") {
    for (let i = 0; i < themeToggle.length; i++) {
      themeToggle[i].index = 2;
      changeToggleImage(i, light.toggleImage);
    }

    for (let key in lightTheme) {
      document.documentElement.style.setProperty(key, lightTheme[key]);
    }

    changeBackgroundImage(light.backgroundImage);
  }

  localStorage.setItem("theme", theme);
}

function checkSavedTheme() {
  document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      applyTheme("dark-theme");
    }
  });
}

function preloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image at ${url}`));
  });
}

function changeBackgroundImage(imgSrc) {
  body.style.backgroundImage = imgSrc;
}

function changeToggleImage(index, imgSrc) {
  themeToggle[index].children[0].src = imgSrc;
}
