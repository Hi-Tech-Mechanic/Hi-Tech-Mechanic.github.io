const cards = [...document.querySelectorAll(".promo-card")];
const cardsBorders = [...document.querySelectorAll(".animated-border")];

const cardsButtons = document.getElementsByClassName("card-button");
const popupOverlay = document.getElementById("popup-overlay");
const popupOverlayExitButton = document.getElementById("overlay-exit-button");
const popup = popupOverlay.children[0];
const popupPicture = document.getElementById("extended-image");

cards.forEach(el => {
  el.addEventListener("mousemove", fCardRotate);
  el.addEventListener("mouseout", fCardDefault);
});

for (var i = 0; i < cardsButtons.length; i++) {
  cardsButtons[i].addEventListener("click", (e) => {
      let src = e.currentTarget.children[0].src;
      OpenExtendedPictureOverlay(src);
    });
  cardsButtons[i].addEventListener("mouseenter", DisplayAnimatedBorder);
  cardsBorders[i].addEventListener("mouseleave", CloseAnimatedBorder);
}
popupOverlayExitButton.addEventListener("click", ExitExtendedPictureOverlay);

function fCardRotate(ev) {
  this.style.transform = `perspective(2000px) rotatey(${(ev.offsetX - this.offsetWidth / 2) / 6}deg)
    rotatex(${((ev.offsetY - this.offsetHeight / 2) / 6) * -1}deg)`;
}

function fCardDefault() {
  this.style.transform = ``;
}

function DisplayAnimatedBorder(){
  this.setAttribute("style", 'border: 2px solid; border-image: conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) 1;');
}

function CloseAnimatedBorder(){
  this.setAttribute("style", 'border: 0;');
}

function OpenExtendedPictureOverlay(imageSrc){
    popupOverlay.style.display = "block";
    popupPicture.setAttribute("src", imageSrc);
}

function ExitExtendedPictureOverlay(){
  popupOverlay.style.display = "none";
}

const linksArray = {
  "Unity ": "https://unity.com/",
  "C# ": "https://learn.microsoft.com/ru-ru/dotnet/csharp/",
  "PluginYG ": "https://ash-message-bf4.notion.site/PluginYG-d457b23eee604b7aa6076116aab647ed#61f1dc643f8046a2815dbd8834035ea7",
  "DOTween ": "https://dotween.demigiant.com/",
  "Shader&nbsp;Graphs ": "https://unity.com/features/shader-graph",
  "Particle&nbsp;System ": "https://docs.unity3d.com/Manual/ParticleSystems.html",
  "ASP.Net&nbsp;Core ": "https://dotnet.microsoft.com/ru-ru/apps/aspnet",
  "Blazor ": "https://learn.microsoft.com/ru-ru/aspnet/core/blazor/?view=aspnetcore-9.0",
  "Razor&nbsp;Pages ": "https://learn.microsoft.com/ru-ru/aspnet/core/razor-pages/?view=aspnetcore-9.0&tabs=visual-studio",
  "WebGL ": "https://www.khronos.org/webgl/wiki/Main_Page",
  "HTML5 ": "https://doka.guide/html/",
  "CSS3 ": "https://doka.guide/css/",
  "Blender ": "https://www.blender.org/",
  "Photoshop ": "https://www.adobe.com/ru/products/photoshop.html",
  "Sony&nbsp;Vegas&nbsp;Pro" : "https://www.vegascreativesoftware.com/ru/",
  "Python ": "https://www.python.org/",
  "Tkinter&nbsp;(отрисовка&nbsp;UI) ": "https://docs.python.org/3/library/tkinter.html",
  "Simplaudio&nbsp;(воспроизведение&nbsp;звука) ": "https://simpleaudio.readthedocs.io/en/latest/",
};

const technologies = {
  Csharp: "C# ",
  Unity: "Unity ",
  PluginYG: "PluginYG ",
  DOTween: "DOTween ",
  ShaderGraphs: "Shader&nbsp;Graphs ",
  ParticleSystem: "Particle&nbsp;System ",
  ASPNetCore: "ASP.Net&nbsp;Core ",
  Blazor: "Blazor ",
  RazorPages: "Razor&nbsp;Pages ",
  WebGL: "WebGL ",
  HTML5: "HTML5 ",
  CSS3: "CSS3 ",
  Blender: "Blender ",
  Photoshop: "Photoshop ",
  SonyVegasPro: "Sony&nbsp;Vegas&nbsp;Pro ",
  Python: "Python ",
  Tkinter: "Tkinter&nbsp;(отрисовка&nbsp;UI) ",
  Simplaudio: "Simplaudio&nbsp;(воспроизведение&nbsp;звука) "
};

const exolab = [technologies["Python"], technologies["Tkinter"], technologies["Simplaudio"]];

const multiverseMemes = [
  technologies["Csharp"], technologies["Unity"], technologies["PluginYG"],
  technologies["DOTween"], technologies["ShaderGraphs"], technologies["ParticleSystem"],
  technologies["Blender"], technologies["SonyVegasPro"]
];

const minecraftIndustrialization = [
  technologies["Csharp"], technologies["Unity"], technologies["PluginYG"],
  technologies["DOTween"], technologies["ShaderGraphs"], technologies["ParticleSystem"],
  technologies["Photoshop"]
];

const furnitureShop = [
  technologies["Csharp"], technologies["ASPNetCore"], technologies["Blazor"],
  technologies["RazorPages"], technologies["Unity"], technologies["WebGL"],
  technologies["HTML5"], technologies["CSS3"]
];

const characterMenuConcept = [
  technologies["Csharp"], technologies["Unity"],
  technologies["DOTween"], technologies["Photoshop"]
];

const allProjects = [exolab, multiverseMemes,
   minecraftIndustrialization, furnitureShop, characterMenuConcept];

const stackContainers = [
  document.getElementById("Exolab"),
  document.getElementById("Multiverse memes"),
  document.getElementById("Minecraft: Industrialization"),
  document.getElementById("Furniture shop"),
  document.getElementById("Character menu concept")
];

let iteration = 0;
allProjects.forEach(project =>{
  project.forEach(element => {
    let link = document.createElement("a");
    link.innerHTML = element;
    link.className = "stack-link";
    link.href = GetLinkAddress(element);
    link.target = "_blank";
  
    let unit = document.createElement("p");
    unit.className = "technology-unit";
    unit.appendChild(link);

    stackContainers[iteration].appendChild(unit);
  });

  iteration++;
});

function GetLinkAddress(technology){
  for (var key in linksArray) {
    if (key == technology){
      return linksArray[key];
    }
  }
}

const darkTheme = {
  "--text-color": "white",
  "--background-color": "rgb(15, 15, 15)",
  "--button-background-color": "rgb(32, 32, 32)",
};
const lightTheme = {
  "--text-color": "black",
  "--background-color": "rgb(235, 235, 235)",
  "--button-background-color": "rgb(200, 200, 200)",
  "--brend-color": ""
};

const themeToggle = document.getElementById("theme toggle");
themeToggle.addEventListener("click", function(){
  if (themeToggle.index % 2 != 0){
    for(let key in lightTheme){
      document.documentElement.style.setProperty(key, lightTheme[key]);
      localStorage.setItem(key, lightTheme[key]);
    }

    themeToggle.lastChild.src = "Images/Other/moon.avif";
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

    themeToggle.lastChild.src = "images/Other/sun.avif";
    themeToggle.index = 1;

    localStorage.setItem('themeColor', darkTheme);
  }
});

const savedTheme = localStorage.getItem('themeColor');
// console.log(savedTheme[0]);
if (savedTheme != null){
  for(let key in savedTheme){
    // console.log(key);
    document.documentElement.style.setProperty(key, savedTheme[key]);
  }
}