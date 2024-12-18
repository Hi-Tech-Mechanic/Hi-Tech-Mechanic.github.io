const darkTheme = {
    "--text-color": "white",
    "--background-color": "rgb(15, 15, 15)",
    "--button-background-color": "rgb(32, 32, 32)",
};

const lightTheme = {
  "--text-color": "black",
  "--background-color": "rgb(235, 235, 235)",
  "--button-background-color": "rgb(200, 200, 200)",
};
  
const themeToggle = document.getElementById("theme toggle");
themeToggle.addEventListener("click", function(){
  if (themeToggle.index % 2 != 0){
    for(let key in lightTheme){
      document.documentElement.style.setProperty(key, lightTheme[key]);
      localStorage.setItem(key, lightTheme[key]);
    }

    themeToggle.lastChild.src = "images/other/moon.avif";
    themeToggle.index = 2;

    // localStorage.setItem('themeColor', lightTheme["--text-color"]);
    let savedTheme = localStorage.getItem('themeColor');
    console.log(savedTheme);
    // for(let key in savedTheme){
    //   console.log(savedTheme[key]);
    //   // document.documentElement.style.setProperty(key, savedTheme[key]);
    // }
  }
  else{
    for(let key in darkTheme){
      document.documentElement.style.setProperty(key, darkTheme[key]);
    }

    themeToggle.lastChild.src = "images/other/sun.avif";
    themeToggle.index = 1;

    localStorage.setItem('themeColor', darkTheme);
  }
});

const savedTheme = localStorage.getItem('themeColor');
if (savedTheme != null){
  for(let key in savedTheme){
    document.documentElement.style.setProperty(key, savedTheme[key]);
  }
}