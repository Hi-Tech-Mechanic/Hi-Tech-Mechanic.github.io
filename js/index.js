const cards = [...document.querySelectorAll(".promo-card")];
const cardsBorders = [...document.querySelectorAll(".animated-border")];

const cardsButtons = document.getElementsByClassName("card-button");
const popupOverlay = document.getElementById("popup-overlay");
const popupOverlayExitButton = document.getElementById("overlay-exit-button");
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
  "JavaScript " : "https://learn.javascript.ru/",
  "Webpack ": "https://webpack.js.org/",
  "BEM ": "https://ru.bem.info/",
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
  Webpack: "Webpack ",
  BEM: "BEM ",
  JavaScript: "JavaScript ",
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

const portfolioSite = [
  technologies["HTML5"], technologies["CSS3"],
  technologies["JavaScript"], technologies["Webpack"],
  technologies["BEM"]
]

const allProjects = [exolab, multiverseMemes,
  minecraftIndustrialization, furnitureShop,
  characterMenuConcept, portfolioSite
];

const stackContainers = [
  document.getElementById("Exolab"),
  document.getElementById("Multiverse memes"),
  document.getElementById("Minecraft: Industrialization"),
  document.getElementById("Furniture shop"),
  document.getElementById("Character menu concept"),
  document.getElementById("Portfolio site"),
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

import "../styles/main.css";
import "../styles/roots/colors.css";
import "../styles/roots/fonts.css";
import "../styles/roots/transitions.css";
import "../styles/roots/offsets.css";
import "../styles/roots/borders.css";

import "../common.blocks/body/body.css";
import "../common.blocks/brand/brand.css";
import "../common.blocks/button/button.css";

import "../common.blocks/difficulty-tag/difficulty-tag.css";
import "../common.blocks/difficulty-tag/_theme_easy/difficulty-tag_theme_easy.css";
import "../common.blocks/difficulty-tag/_theme_medium/difficulty-tag_theme_medium.css";
import "../common.blocks/difficulty-tag/_theme_hard/difficulty-tag_theme_hard.css";
import "../common.blocks/difficulty-tag/_theme_very-hard/difficulty-tag_theme_very-hard.css";

import "../common.blocks/exit-button/exit-button.css";

import "../common.blocks/footer/footer.css";
import "../common.blocks/footer/__header/footer__header.css";

import "../common.blocks/icon/icon.css";
import "../common.blocks/image-content-grid/image-content-grid.css";

import "../common.blocks/info-container/info-container.css";
import "../common.blocks/info-container/__inner-element/info-container__inner-element.css";
import "../common.blocks/info-container/__header/info-container__header.css";

import "../common.blocks/link/link.css";
import "../common.blocks/navigation/navigation.css";

import "../common.blocks/popup-overlay/popup-overlay.css";
import "../common.blocks/popup-overlay/__popup/popup-overlay__popup.css";

// import "../common.blocks/project-description-container/";
import "../common.blocks/project-type/project-type.css";

import "../common.blocks/technology-unit/technology-unit.css";
import "../common.blocks/theme-toggle/theme-toggle.js";
import "../common.blocks/theme-toggle/theme-toggle.css";