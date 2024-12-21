/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./common.blocks/navigation/navigation.js":
/*!************************************************!*\
  !*** ./common.blocks/navigation/navigation.js ***!
  \************************************************/
/***/ (() => {

eval("const navMenu = document.getElementById(\"navigation-menu\");\r\nconst dropdownButton = document.getElementById(\"dropdown-button\");\r\n\r\nconst navMenuCachedDisplay = navMenu.style.display;\r\nconst dropdownButtonCachedDisplay = dropdownButton.style.display;\r\n\r\nconst minWidthPoint = 470;\r\n\r\ncheckScreenWidth();\r\nwindow.addEventListener(\"resize\", checkScreenWidth);\r\n\r\nfunction checkScreenWidth(){\r\n    const width = document.body.clientWidth;\r\n\r\n    if (width <= minWidthPoint){\r\n        navMenu.style.display = \"none\";\r\n        dropdownButton.style.display = \"inline-block\";\r\n    }\r\n    else{\r\n        navMenu.style.display = navMenuCachedDisplay;\r\n        dropdownButton.style.display = dropdownButtonCachedDisplay;\r\n    }\r\n}\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/navigation/navigation.js?");

/***/ }),

/***/ "./common.blocks/promo-card/promo-card.js":
/*!************************************************!*\
  !*** ./common.blocks/promo-card/promo-card.js ***!
  \************************************************/
/***/ (() => {

eval("const body = document.getElementById(\"body\");\r\n\r\nconst cards = [...document.querySelectorAll(\".promo-card\")];\r\nconst cardsBorders = [...document.querySelectorAll(\".promo-card__animated-border\")];\r\n\r\nconst popupOverlay = document.getElementById(\"popup-overlay\");\r\nconst popupPicture = document.getElementById(\"extended-image\");\r\nconst popupOverlayExitButton = document.getElementById(\"overlay-exit-button\");\r\n\r\npopupOverlay.addEventListener(\"click\", exitExtendedPictureOverlay);\r\npopupOverlayExitButton.addEventListener(\"click\", exitExtendedPictureOverlay);\r\n\r\ncards.forEach((el) => {\r\n  el.addEventListener(\"mousemove\", fCardRotate);\r\n  el.addEventListener(\"mouseout\", fCardDefault);\r\n});\r\n\r\nfor (var i = 0; i < cardsBorders.length; i++) {\r\n  cardsBorders[i].addEventListener(\"click\", (element) => {\r\n    let src = element.currentTarget.children[0].src;\r\n    openExtendedPictureOverlay(src);\r\n  });\r\n\r\n  cardsBorders[i].addEventListener(\"mouseenter\", displayAnimatedBorder);\r\n  cardsBorders[i].addEventListener(\"mouseleave\", closeAnimatedBorder);\r\n}\r\n\r\nfunction fCardRotate(ev) {\r\n  this.style.transform = `perspective(2000px) rotatey(${(ev.offsetX - this.offsetWidth / 2) / 6}deg)\r\n      rotatex(${((ev.offsetY - this.offsetHeight / 2) / 6) * -1}deg)`;\r\n}\r\n\r\nfunction fCardDefault() {\r\n  this.style.transform = ``;\r\n}\r\n\r\nfunction displayAnimatedBorder() {\r\n  this.setAttribute(\r\n    \"style\",\r\n    \"border: 2px solid; border-image: conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) 1;\"\r\n  );\r\n}\r\n\r\nfunction closeAnimatedBorder() {\r\n  this.setAttribute(\"style\", \"border: 0;\");\r\n}\r\n\r\nfunction openExtendedPictureOverlay(imageSrc) {\r\n  popupOverlay.style.display = \"block\";\r\n  popupOverlay.style.backdropFilter = \"blur(5px)\";\r\n  popupPicture.setAttribute(\"src\", imageSrc);\r\n}\r\n\r\nfunction exitExtendedPictureOverlay() {\r\n  popupOverlay.style.display = \"none\";\r\n  popupOverlay.style.backdropFilter = \"none\";\r\n}\r\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/promo-card/promo-card.js?");

/***/ }),

/***/ "./common.blocks/technology-unit/technology-unit.js":
/*!**********************************************************!*\
  !*** ./common.blocks/technology-unit/technology-unit.js ***!
  \**********************************************************/
/***/ (() => {

eval("const linksArray = {\r\n  \"C# \": \"https://learn.microsoft.com/ru-ru/dotnet/csharp/\",\r\n  \"JavaScript \": \"https://learn.javascript.ru/\",\r\n  \"HTML \": \"https://doka.guide/html/\",\r\n  \"CSS \": \"https://doka.guide/css/\",\r\n  \"SQL \": \"https://www.w3schools.com/sql/default.asp\",\r\n  \"PHP \": \"https://www.php.net/\",\r\n  \"Python \": \"https://www.python.org/\",\r\n\r\n  \"ASP.Net&nbsp;Core \": \"https://dotnet.microsoft.com/ru-ru/apps/aspnet\",\r\n  \"Blazor \": \"https://learn.microsoft.com/ru-ru/aspnet/core/blazor/?view=aspnetcore-9.0\",\r\n  \"Razor&nbsp;Pages \":\r\n    \"https://learn.microsoft.com/ru-ru/aspnet/core/razor-pages/?view=aspnetcore-9.0&tabs=visual-studio\",\r\n  \"Webpack \": \"https://webpack.js.org/\",\r\n  \"NPM \": \"https://www.npmjs.com/\",\r\n  \"DOTween \": \"https://dotween.demigiant.com/\",\r\n  \"PluginYG \":\r\n    \"https://ash-message-bf4.notion.site/PluginYG-d457b23eee604b7aa6076116aab647ed#61f1dc643f8046a2815dbd8834035ea7\",\r\n  \"WebGL \": \"https://www.khronos.org/webgl/wiki/Main_Page\",\r\n  \"Shader&nbsp;Graphs \": \"https://unity.com/features/shader-graph\",\r\n  \"Particle&nbsp;System \": \"https://docs.unity3d.com/Manual/ParticleSystems.html\",\r\n  \"Tkinter&nbsp;(отрисовка&nbsp;UI) \": \"https://docs.python.org/3/library/tkinter.html\",\r\n  \"Simplaudio&nbsp;(воспроизведение&nbsp;звука) \": \"https://simpleaudio.readthedocs.io/en/latest/\",\r\n\r\n  \"Microsoft&nbsp;Visual&nbsp;Studio \": \"https://visualstudio.microsoft.com/ru/\",\r\n  \"Visual&nbsp;Studio&nbsp;Code \": \"https://code.visualstudio.com/\",\r\n  \"Unity \": \"https://unity.com/\",\r\n  MySQL: \"https://metanit.com/sql/mysql/\",\r\n  \"Blender \": \"https://www.blender.org/\",\r\n  \"Photoshop \": \"https://www.adobe.com/ru/products/photoshop.html\",\r\n  \"Sony&nbsp;Vegas&nbsp;Pro \": \"https://www.vegascreativesoftware.com/ru/\",\r\n\r\n  \"OOP \": \"https://en.wikipedia.org/wiki/Object-oriented_programming\",\r\n  \"SOLID \":\r\n    \"https://ru.wikipedia.org/wiki/SOLID_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)\",\r\n  \"DRY \": \"https://ru.wikipedia.org/wiki/Don%E2%80%99t_repeat_yourself\",\r\n  \"GRASP \": \"https://ru.wikipedia.org/wiki/GRASP\",\r\n  \"KISS \": \"https://ru.wikipedia.org/wiki/KISS_(%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF)\",\r\n  \"Adaptive&nbsp;UI \": \"https://docs.unity3d.com/ru/2021.1/Manual/HOWTO-UIMultiResolution.html\",\r\n  \"Adaptive&nbsp;Web&nbsp;Design \": \"https://alistapart.com/article/responsive-web-design/\",\r\n  \"BEM \": \"https://ru.bem.info/\",\r\n  \"MVC \": \"https://ru.wikipedia.org/wiki/Model-View-Controller\",\r\n  \"MVP \": \"https://ru.wikipedia.org/wiki/Model-View-Presenter\",\r\n  \"MVVM \": \"https://ru.wikipedia.org/wiki/Model-View-ViewModel\",\r\n};\r\n\r\nconst languages = {\r\n  Csharp: \"C# \",\r\n  JavaScript: \"JavaScript \",\r\n  HTML: \"HTML \",\r\n  CSS: \"CSS \",\r\n  SQL: \"SQL \",\r\n  PHP: \"PHP \",\r\n  Python: \"Python \",\r\n};\r\n\r\nconst frameworksLibrariesPlugins = {\r\n  ASPNetCore: \"ASP.Net&nbsp;Core \",\r\n  Blazor: \"Blazor \",\r\n  RazorPages: \"Razor&nbsp;Pages \",\r\n  Webpack: \"Webpack \",\r\n  NPM: \"NPM \",\r\n  DOTween: \"DOTween \",\r\n  PluginYG: \"PluginYG \",\r\n  WebGL: \"WebGL \",\r\n  ShaderGraphs: \"Shader&nbsp;Graphs \",\r\n  ParticleSystem: \"Particle&nbsp;System \",\r\n  Tkinter: \"Tkinter&nbsp;(отрисовка&nbsp;UI) \",\r\n  Simplaudio: \"Simplaudio&nbsp;(воспроизведение&nbsp;звука) \",\r\n};\r\n\r\nconst workEnvironment = {\r\n  MicrosoftVisualStudio: \"Microsoft&nbsp;Visual&nbsp;Studio \",\r\n  VisualStudioCode: \"Visual&nbsp;Studio&nbsp;Code \",\r\n  Unity: \"Unity \",\r\n  MySQL: \"MySQL\",\r\n  Blender: \"Blender \",\r\n  Photoshop: \"Photoshop \",\r\n  SonyVegasPro: \"Sony&nbsp;Vegas&nbsp;Pro \",\r\n};\r\n\r\nconst methodologies = {\r\n  SOLID: \"SOLID \",\r\n  OOP: \"OOP \",\r\n  AdaptiveUI: \"Adaptive&nbsp;UI \",\r\n  AdaptiveWebDesign: \"Adaptive&nbsp;Web&nbsp;Design \",\r\n  BEM: \"BEM \",\r\n  MVC: \"MVC \",\r\n  MVP: \"MVP \",\r\n  MVVM: \"MVVM \",\r\n  DRY: \"DRY \",\r\n  KISS: \"KISS \",\r\n  GRASP: \"GRASP \",\r\n};\r\n\r\nconst exolab = [\r\n  languages[\"Python\"],\r\n  frameworksLibrariesPlugins[\"Tkinter\"],\r\n  frameworksLibrariesPlugins[\"Simplaudio\"],\r\n];\r\n\r\nconst multiverseMemes = [\r\n  languages[\"Csharp\"],\r\n  frameworksLibrariesPlugins[\"WebGL\"],\r\n  frameworksLibrariesPlugins[\"DOTween\"],\r\n  frameworksLibrariesPlugins[\"PluginYG\"],\r\n  frameworksLibrariesPlugins[\"ParticleSystem\"],\r\n  workEnvironment[\"Unizty\"],\r\n  workEnvironment[\"MicrosoftVisualStudio\"],\r\n  workEnvironment[\"Blender\"],\r\n  workEnvironment[\"Photoshop\"],\r\n  workEnvironment[\"SonyVegasPro\"],\r\n  methodologies[\"AdaptiveUI\"],\r\n  methodologies[\"MVC\"],\r\n  methodologies[\"OOP\"],\r\n  methodologies[\"DRY\"],\r\n];\r\n\r\nconst minecraftIndustrialization = [\r\n  languages[\"Csharp\"],\r\n  frameworksLibrariesPlugins[\"DOTween\"],\r\n  frameworksLibrariesPlugins[\"ShaderGraphs\"],\r\n  frameworksLibrariesPlugins[\"ParticleSystem\"],\r\n  frameworksLibrariesPlugins[\"PluginYG\"],\r\n  workEnvironment[\"Unity\"],\r\n  workEnvironment[\"MicrosoftVisualStudio\"],\r\n  workEnvironment[\"Photoshop\"],\r\n  methodologies[\"OOP\"],\r\n  methodologies[\"SOLID\"],\r\n  methodologies[\"AdaptiveUI\"],\r\n];\r\n\r\nconst furnitureShop = [\r\n  languages[\"Csharp\"],\r\n  languages[\"HTML\"],\r\n  languages[\"CSS\"],\r\n  frameworksLibrariesPlugins[\"ASPNetCore\"],\r\n  frameworksLibrariesPlugins[\"Blazor\"],\r\n  frameworksLibrariesPlugins[\"RazorPages\"],\r\n  frameworksLibrariesPlugins[\"WebGL\"],\r\n  workEnvironment[\"MicrosoftVisualStudio\"],\r\n  workEnvironment[\"Unity\"],\r\n  methodologies[\"AdaptiveUI\"],\r\n  methodologies[\"DRY\"],\r\n  methodologies[\"KISS\"],\r\n];\r\n\r\nconst characterMenuConcept = [\r\n  languages[\"Csharp\"],\r\n  frameworksLibrariesPlugins[\"DOTween\"],\r\n  workEnvironment[\"Unity\"],\r\n  workEnvironment[\"MicrosoftVisualStudio\"],\r\n  workEnvironment[\"Photoshop\"],\r\n  methodologies[\"OOP\"],\r\n  methodologies[\"SOLID\"],\r\n  methodologies[\"AdaptiveUI\"],\r\n  methodologies[\"MVC\"],\r\n  methodologies[\"DRY\"],\r\n];\r\n\r\nconst portfolioSite = [\r\n  languages[\"HTML\"],\r\n  languages[\"CSS\"],\r\n  languages[\"JavaScript\"],\r\n  frameworksLibrariesPlugins[\"Webpack\"],\r\n  frameworksLibrariesPlugins[\"NPM\"],\r\n  workEnvironment[\"VisualStudioCode\"],\r\n  methodologies[\"BEM\"],\r\n  methodologies[\"AdaptiveWebDesign\"],\r\n  methodologies[\"DRY\"],\r\n  methodologies[\"KISS\"],\r\n];\r\n\r\nconst allProjects = [\r\n  exolab,\r\n  multiverseMemes,\r\n  minecraftIndustrialization,\r\n  furnitureShop,\r\n  characterMenuConcept,\r\n  portfolioSite,\r\n];\r\n\r\nconst stackContainers = [\r\n  document.getElementById(\"Exolab\"),\r\n  document.getElementById(\"Multiverse memes\"),\r\n  document.getElementById(\"Minecraft: Industrialization\"),\r\n  document.getElementById(\"Furniture shop\"),\r\n  document.getElementById(\"Character menu concept\"),\r\n  document.getElementById(\"Portfolio site\"),\r\n];\r\n\r\nlet iteration = 0;\r\nlet languagesValues = Object.values(languages);\r\nlet frameworksValues = Object.values(frameworksLibrariesPlugins);\r\nlet workEnvironmentValues = Object.values(workEnvironment);\r\nlet methodologiesValues = Object.values(methodologies);\r\nallProjects.forEach((project) => {\r\n  project.forEach((element) => {\r\n    if (languagesValues.includes(element)) {\r\n      createStackElement(element, stackContainers[iteration], \"technology-unit_theme_languages\");\r\n    } else if (frameworksValues.includes(element)) {\r\n      createStackElement(element, stackContainers[iteration], \"technology-unit_theme_frameworks\");\r\n    } else if (workEnvironmentValues.includes(element)) {\r\n      createStackElement(\r\n        element,\r\n        stackContainers[iteration],\r\n        \"technology-unit_theme_work-environment\"\r\n      );\r\n    } else if (methodologiesValues.includes(element)) {\r\n      createStackElement(\r\n        element,\r\n        stackContainers[iteration],\r\n        \"technology-unit_theme_methodologyes\"\r\n      );\r\n    }\r\n  });\r\n\r\n  iteration++;\r\n});\r\n\r\nconst languagesBlock = document.getElementById(\"Languages\");\r\nconst frameworksLibrariesPluginsBlock = document.getElementById(\"Frameworks Libraries Plugins\");\r\nconst workEnvironmentBlock = document.getElementById(\"Work environment\");\r\nconst methodologiesBlock = document.getElementById(\"Methodologies\");\r\n\r\nfor (let key in languages) {\r\n  createStackElement(languages[key], languagesBlock, \"technology-unit_theme_languages\");\r\n}\r\n\r\nfor (let key in workEnvironment) {\r\n  createStackElement(\r\n    workEnvironment[key],\r\n    workEnvironmentBlock,\r\n    \"technology-unit_theme_work-environment\"\r\n  );\r\n}\r\n\r\nfor (let key in methodologies) {\r\n  createStackElement(methodologies[key], methodologiesBlock, \"technology-unit_theme_methodologyes\");\r\n}\r\n\r\nlet frameworksTemp = frameworksLibrariesPlugins;\r\ndelete frameworksTemp.Tkinter;\r\ndelete frameworksTemp.Simplaudio;\r\nfor (let key in frameworksTemp) {\r\n  createStackElement(\r\n    frameworksTemp[key],\r\n    frameworksLibrariesPluginsBlock,\r\n    \"technology-unit_theme_frameworks\"\r\n  );\r\n}\r\n\r\nfunction createStackElement(value, parent, modifier) {\r\n  let link = document.createElement(\"a\");\r\n  link.innerHTML = value;\r\n  link.className = \"link_stack\";\r\n  link.href = GetLinkAddress(value);\r\n  link.target = \"_blank\";\r\n\r\n  let unit = document.createElement(\"p\");\r\n  unit.className = \"technology-unit\";\r\n  unit.classList.add(modifier);\r\n  unit.appendChild(link);\r\n\r\n  parent.appendChild(unit);\r\n}\r\n\r\nfunction GetLinkAddress(technology) {\r\n  for (var key in linksArray) {\r\n    if (key == technology) {\r\n      return linksArray[key];\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/technology-unit/technology-unit.js?");

/***/ }),

/***/ "./common.blocks/theme-toggle/theme-toggle.js":
/*!****************************************************!*\
  !*** ./common.blocks/theme-toggle/theme-toggle.js ***!
  \****************************************************/
/***/ (() => {

eval("class dark{\r\n  static textColor = \"white\";\r\n  static backgroundColor = \"hsla(0, 0%, 5%, 0.3)\";\r\n  static buttonBackgroundColor = \"hsla(0, 0%, 15%, 0.5)\";\r\n}\r\n\r\nclass light{\r\n  static textColor = \"black\";\r\n  static backgroundColor = \"hsla(0, 0%, 95%, 0.3)\";\r\n  static buttonBackgroundColor = \"hsla(0, 0%, 65%, 0.5)\";\r\n}\r\n\r\nconst darkTheme = {\r\n  \"--text-color\": dark.textColor,\r\n  \"--background-color\": dark.backgroundColor,\r\n  \"--button-background-color\": dark.buttonBackgroundColor,\r\n};\r\n\r\nconst lightTheme = {\r\n  \"--text-color\": light.textColor,\r\n  \"--background-color\": light.backgroundColor,\r\n  \"--button-background-color\": light.buttonBackgroundColor,\r\n};\r\n\r\nconst themeToggle = [...document.querySelectorAll(\".theme-toggle\")];\r\nconst body = document.getElementById(\"body\");\r\n\r\ninit();\r\n\r\nthemeToggle.forEach((element) => {\r\n  element.addEventListener(\"click\", function () {\r\n    for (let i = 0; i < themeToggle.length; i++) {\r\n      if (themeToggle[i].index % 2 == 0) {\r\n        for (let key in darkTheme) {\r\n          document.documentElement.style.setProperty(key, darkTheme[key]);\r\n        }\r\n        body.style.backgroundImage = 'url(\"images/backgrounds/dark/mesh-294.png\")';\r\n        themeToggle[i].children[0].src = \"images/other/sun.avif\";\r\n        themeToggle[i].index = 1;\r\n\r\n        // localStorage.setItem('themeColor', lightTheme[\"--text-color\"]);\r\n        // let savedTheme = localStorage.getItem('themeColor');\r\n        // console.log(savedTheme);\r\n        // for(let key in savedTheme){\r\n        //   console.log(savedTheme[key]);\r\n        //   // document.documentElement.style.setProperty(key, savedTheme[key]);\r\n        // }\r\n      } else {\r\n        for (let key in lightTheme) {\r\n          document.documentElement.style.setProperty(key, lightTheme[key]);\r\n          // localStorage.setItem(key, lightTheme[key]);\r\n        }\r\n\r\n        body.style.backgroundImage = 'url(\"images/backgrounds/light/mesh-776.png\")';\r\n        themeToggle[i].children[0].src = \"images/other/moon.avif\";\r\n        themeToggle[i].index = 2;\r\n\r\n        // localStorage.setItem('themeColor', darkTheme);\r\n      }\r\n      // console.log(themeToggle[i].index);\r\n    }\r\n  });\r\n});\r\n\r\nfunction init(){\r\n  body.style.backgroundImage = 'url(\"images/backgrounds/dark/mesh-294.png\")';\r\n}\r\n\r\n// themeToggle.forEach((element) => {\r\n//   element\r\n\r\n// const savedTheme = localStorage.getItem('themeColor');\r\n// if (savedTheme != null){\r\n//   for(let key in savedTheme){\r\n//     document.documentElement.style.setProperty(key, savedTheme[key]);\r\n//   }\r\n// }\r\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/theme-toggle/theme-toggle.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\n/* harmony import */ var _styles_fonts_cormorant_regular_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/fonts/cormorant-regular.css */ \"./styles/fonts/cormorant-regular.css\");\n/* harmony import */ var _styles_roots_colors_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/roots/colors.css */ \"./styles/roots/colors.css\");\n/* harmony import */ var _styles_roots_fonts_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/roots/fonts.css */ \"./styles/roots/fonts.css\");\n/* harmony import */ var _styles_roots_transitions_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/roots/transitions.css */ \"./styles/roots/transitions.css\");\n/* harmony import */ var _styles_roots_offsets_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/roots/offsets.css */ \"./styles/roots/offsets.css\");\n/* harmony import */ var _styles_roots_borders_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/roots/borders.css */ \"./styles/roots/borders.css\");\n/* harmony import */ var _styles_roots_content_size_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/roots/content-size.css */ \"./styles/roots/content-size.css\");\n/* harmony import */ var _common_blocks_body_body_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common.blocks/body/body.css */ \"./common.blocks/body/body.css\");\n/* harmony import */ var _common_blocks_brand_brand_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common.blocks/brand/brand.css */ \"./common.blocks/brand/brand.css\");\n/* harmony import */ var _common_blocks_button_button_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common.blocks/button/button.css */ \"./common.blocks/button/button.css\");\n/* harmony import */ var _common_blocks_difficulty_tag_difficulty_tag_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common.blocks/difficulty-tag/difficulty-tag.css */ \"./common.blocks/difficulty-tag/difficulty-tag.css\");\n/* harmony import */ var _common_blocks_difficulty_tag_theme_easy_difficulty_tag_theme_easy_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common.blocks/difficulty-tag/_theme_easy/difficulty-tag_theme_easy.css */ \"./common.blocks/difficulty-tag/_theme_easy/difficulty-tag_theme_easy.css\");\n/* harmony import */ var _common_blocks_difficulty_tag_theme_medium_difficulty_tag_theme_medium_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common.blocks/difficulty-tag/_theme_medium/difficulty-tag_theme_medium.css */ \"./common.blocks/difficulty-tag/_theme_medium/difficulty-tag_theme_medium.css\");\n/* harmony import */ var _common_blocks_difficulty_tag_theme_hard_difficulty_tag_theme_hard_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common.blocks/difficulty-tag/_theme_hard/difficulty-tag_theme_hard.css */ \"./common.blocks/difficulty-tag/_theme_hard/difficulty-tag_theme_hard.css\");\n/* harmony import */ var _common_blocks_difficulty_tag_theme_very_hard_difficulty_tag_theme_very_hard_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common.blocks/difficulty-tag/_theme_very-hard/difficulty-tag_theme_very-hard.css */ \"./common.blocks/difficulty-tag/_theme_very-hard/difficulty-tag_theme_very-hard.css\");\n/* harmony import */ var _common_blocks_dropdown_dropdown_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common.blocks/dropdown/dropdown.css */ \"./common.blocks/dropdown/dropdown.css\");\n/* harmony import */ var _common_blocks_dropdown_content_dropdown_content_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common.blocks/dropdown/__content/dropdown__content.css */ \"./common.blocks/dropdown/__content/dropdown__content.css\");\n/* harmony import */ var _common_blocks_exit_button_exit_button_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common.blocks/exit-button/exit-button.css */ \"./common.blocks/exit-button/exit-button.css\");\n/* harmony import */ var _common_blocks_footer_footer_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common.blocks/footer/footer.css */ \"./common.blocks/footer/footer.css\");\n/* harmony import */ var _common_blocks_footer_header_footer_header_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../common.blocks/footer/__header/footer__header.css */ \"./common.blocks/footer/__header/footer__header.css\");\n/* harmony import */ var _common_blocks_icon_icon_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../common.blocks/icon/icon.css */ \"./common.blocks/icon/icon.css\");\n/* harmony import */ var _common_blocks_image_content_grid_image_content_grid_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../common.blocks/image-content-grid/image-content-grid.css */ \"./common.blocks/image-content-grid/image-content-grid.css\");\n/* harmony import */ var _common_blocks_info_container_info_container_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../common.blocks/info-container/info-container.css */ \"./common.blocks/info-container/info-container.css\");\n/* harmony import */ var _common_blocks_info_container_header_info_container_header_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../common.blocks/info-container/__header/info-container__header.css */ \"./common.blocks/info-container/__header/info-container__header.css\");\n/* harmony import */ var _common_blocks_info_container_description_info_container_description_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../common.blocks/info-container/__description/info-container__description.css */ \"./common.blocks/info-container/__description/info-container__description.css\");\n/* harmony import */ var _common_blocks_info_container_summary_info_container_summary_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../common.blocks/info-container/__summary/info-container__summary.css */ \"./common.blocks/info-container/__summary/info-container__summary.css\");\n/* harmony import */ var _common_blocks_info_container_video_info_container_video_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../common.blocks/info-container/__video/info-container__video.css */ \"./common.blocks/info-container/__video/info-container__video.css\");\n/* harmony import */ var _common_blocks_link_link_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../common.blocks/link/link.css */ \"./common.blocks/link/link.css\");\n/* harmony import */ var _common_blocks_link_contact_link_contact_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../common.blocks/link/_contact/link_contact.css */ \"./common.blocks/link/_contact/link_contact.css\");\n/* harmony import */ var _common_blocks_link_stack_link_stack_css__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../common.blocks/link/_stack/link_stack.css */ \"./common.blocks/link/_stack/link_stack.css\");\n/* harmony import */ var _common_blocks_link_inner_link_inner_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../common.blocks/link/_inner/link_inner.css */ \"./common.blocks/link/_inner/link_inner.css\");\n/* harmony import */ var _common_blocks_link_theme_dashed_link_theme_dashed_css__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../common.blocks/link/_theme_dashed/link_theme_dashed.css */ \"./common.blocks/link/_theme_dashed/link_theme_dashed.css\");\n/* harmony import */ var _common_blocks_navigation_navigation_css__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../common.blocks/navigation/navigation.css */ \"./common.blocks/navigation/navigation.css\");\n/* harmony import */ var _common_blocks_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../common.blocks/navigation/navigation.js */ \"./common.blocks/navigation/navigation.js\");\n/* harmony import */ var _common_blocks_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_common_blocks_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_34__);\n/* harmony import */ var _common_blocks_navigation_menu_navigation_menu_css__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../common.blocks/navigation/__menu/navigation__menu.css */ \"./common.blocks/navigation/__menu/navigation__menu.css\");\n/* harmony import */ var _common_blocks_popup_overlay_popup_overlay_css__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../common.blocks/popup-overlay/popup-overlay.css */ \"./common.blocks/popup-overlay/popup-overlay.css\");\n/* harmony import */ var _common_blocks_popup_overlay_popup_popup_overlay_popup_css__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../common.blocks/popup-overlay/__popup/popup-overlay__popup.css */ \"./common.blocks/popup-overlay/__popup/popup-overlay__popup.css\");\n/* harmony import */ var _common_blocks_popup_overlay_extended_image_popup_overlay_extended_image_css__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../common.blocks/popup-overlay/__extended-image/popup-overlay__extended-image.css */ \"./common.blocks/popup-overlay/__extended-image/popup-overlay__extended-image.css\");\n/* harmony import */ var _common_blocks_project_type_project_type_css__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../common.blocks/project-type/project-type.css */ \"./common.blocks/project-type/project-type.css\");\n/* harmony import */ var _common_blocks_stack_description_stack_description_css__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../common.blocks/stack-description/stack-description.css */ \"./common.blocks/stack-description/stack-description.css\");\n/* harmony import */ var _common_blocks_stack_description_theme_languages_stack_description_theme_languages_css__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../common.blocks/stack-description/_theme_languages/stack-description_theme_languages.css */ \"./common.blocks/stack-description/_theme_languages/stack-description_theme_languages.css\");\n/* harmony import */ var _common_blocks_stack_description_theme_frameworks_stack_description_theme_frameworks_css__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../common.blocks/stack-description/_theme_frameworks/stack-description_theme_frameworks.css */ \"./common.blocks/stack-description/_theme_frameworks/stack-description_theme_frameworks.css\");\n/* harmony import */ var _common_blocks_stack_description_theme_work_environment_stack_description_theme_work_environment_css__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../common.blocks/stack-description/_theme_work-environment/stack-description_theme_work-environment.css */ \"./common.blocks/stack-description/_theme_work-environment/stack-description_theme_work-environment.css\");\n/* harmony import */ var _common_blocks_stack_description_theme_methodologyes_stack_description_theme_methodologyes_css__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../common.blocks/stack-description/_theme_methodologyes/stack-description_theme_methodologyes.css */ \"./common.blocks/stack-description/_theme_methodologyes/stack-description_theme_methodologyes.css\");\n/* harmony import */ var _common_blocks_technology_unit_technology_unit_css__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../common.blocks/technology-unit/technology-unit.css */ \"./common.blocks/technology-unit/technology-unit.css\");\n/* harmony import */ var _common_blocks_technology_unit_technology_unit_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../common.blocks/technology-unit/technology-unit.js */ \"./common.blocks/technology-unit/technology-unit.js\");\n/* harmony import */ var _common_blocks_technology_unit_technology_unit_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_common_blocks_technology_unit_technology_unit_js__WEBPACK_IMPORTED_MODULE_46__);\n/* harmony import */ var _common_blocks_technology_unit_theme_frameworks_technology_unit_theme_frameworks_css__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../common.blocks/technology-unit/_theme_frameworks/technology-unit_theme_frameworks.css */ \"./common.blocks/technology-unit/_theme_frameworks/technology-unit_theme_frameworks.css\");\n/* harmony import */ var _common_blocks_technology_unit_theme_languages_technology_unit_theme_languages_css__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../common.blocks/technology-unit/_theme_languages/technology-unit_theme_languages.css */ \"./common.blocks/technology-unit/_theme_languages/technology-unit_theme_languages.css\");\n/* harmony import */ var _common_blocks_technology_unit_theme_work_environment_technology_unit_theme_work_environment_css__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../common.blocks/technology-unit/_theme_work-environment/technology-unit_theme_work-environment.css */ \"./common.blocks/technology-unit/_theme_work-environment/technology-unit_theme_work-environment.css\");\n/* harmony import */ var _common_blocks_technology_unit_theme_methodologyes_technology_unit_theme_methodologyes_css__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../common.blocks/technology-unit/_theme_methodologyes/technology-unit_theme_methodologyes.css */ \"./common.blocks/technology-unit/_theme_methodologyes/technology-unit_theme_methodologyes.css\");\n/* harmony import */ var _common_blocks_theme_toggle_theme_toggle_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../common.blocks/theme-toggle/theme-toggle.js */ \"./common.blocks/theme-toggle/theme-toggle.js\");\n/* harmony import */ var _common_blocks_theme_toggle_theme_toggle_js__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(_common_blocks_theme_toggle_theme_toggle_js__WEBPACK_IMPORTED_MODULE_51__);\n/* harmony import */ var _common_blocks_theme_toggle_theme_toggle_css__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../common.blocks/theme-toggle/theme-toggle.css */ \"./common.blocks/theme-toggle/theme-toggle.css\");\n/* harmony import */ var _common_blocks_promo_card_promo_card_css__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../common.blocks/promo-card/promo-card.css */ \"./common.blocks/promo-card/promo-card.css\");\n/* harmony import */ var _common_blocks_promo_card_promo_card_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../common.blocks/promo-card/promo-card.js */ \"./common.blocks/promo-card/promo-card.js\");\n/* harmony import */ var _common_blocks_promo_card_promo_card_js__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(_common_blocks_promo_card_promo_card_js__WEBPACK_IMPORTED_MODULE_54__);\n/* harmony import */ var _common_blocks_promo_card_animated_border_promo_card_animated_border_css__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../common.blocks/promo-card/__animated-border/promo-card__animated-border.css */ \"./common.blocks/promo-card/__animated-border/promo-card__animated-border.css\");\n/* harmony import */ var _common_blocks_image_image_css__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../common.blocks/image/image.css */ \"./common.blocks/image/image.css\");\n/* harmony import */ var _videos_multiverse_memes_portrait_video_mp4__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../videos/multiverse-memes_portrait-video.mp4 */ \"./videos/multiverse-memes_portrait-video.mp4\");\n/* harmony import */ var _videos_exolab_gameplay_compressed_mp4__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../videos/exolab-gameplay-compressed.mp4 */ \"./videos/exolab-gameplay-compressed.mp4\");\n/* harmony import */ var _videos_furniture_gameplay_compressed_mp4__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../videos/furniture-gameplay-compressed.mp4 */ \"./videos/furniture-gameplay-compressed.mp4\");\n/* harmony import */ var _videos_character_menu_concept_mp4__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../videos/character-menu-concept.mp4 */ \"./videos/character-menu-concept.mp4\");\n/* harmony import */ var _videos_character_menu_concept_mpeg__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../videos/character-menu-concept.mpeg */ \"./videos/character-menu-concept.mpeg\");\n/* harmony import */ var _videos_character_menu_concept_webm__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../videos/character-menu-concept.webm */ \"./videos/character-menu-concept.webm\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n///////////////////////////////////////////////////////////////\r\n\r\n// import \"../videos/multiverse-memes_landscape-video.mp4\";\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://my-portfolio/./js/index.js?");

/***/ }),

/***/ "./videos/character-menu-concept.mp4":
/*!*******************************************!*\
  !*** ./videos/character-menu-concept.mp4 ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"videos/character-menu-concept.mp4\");\n\n//# sourceURL=webpack://my-portfolio/./videos/character-menu-concept.mp4?");

/***/ }),

/***/ "./videos/character-menu-concept.mpeg":
/*!********************************************!*\
  !*** ./videos/character-menu-concept.mpeg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"videos/character-menu-concept.mpeg\");\n\n//# sourceURL=webpack://my-portfolio/./videos/character-menu-concept.mpeg?");

/***/ }),

/***/ "./videos/character-menu-concept.webm":
/*!********************************************!*\
  !*** ./videos/character-menu-concept.webm ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"videos/character-menu-concept.webm\");\n\n//# sourceURL=webpack://my-portfolio/./videos/character-menu-concept.webm?");

/***/ }),

/***/ "./videos/exolab-gameplay-compressed.mp4":
/*!***********************************************!*\
  !*** ./videos/exolab-gameplay-compressed.mp4 ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"videos/exolab-gameplay-compressed.mp4\");\n\n//# sourceURL=webpack://my-portfolio/./videos/exolab-gameplay-compressed.mp4?");

/***/ }),

/***/ "./videos/furniture-gameplay-compressed.mp4":
/*!**************************************************!*\
  !*** ./videos/furniture-gameplay-compressed.mp4 ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"videos/furniture-gameplay-compressed.mp4\");\n\n//# sourceURL=webpack://my-portfolio/./videos/furniture-gameplay-compressed.mp4?");

/***/ }),

/***/ "./videos/multiverse-memes_portrait-video.mp4":
/*!****************************************************!*\
  !*** ./videos/multiverse-memes_portrait-video.mp4 ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"videos/multiverse-memes_portrait-video.mp4\");\n\n//# sourceURL=webpack://my-portfolio/./videos/multiverse-memes_portrait-video.mp4?");

/***/ }),

/***/ "./common.blocks/body/body.css":
/*!*************************************!*\
  !*** ./common.blocks/body/body.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/body/body.css?");

/***/ }),

/***/ "./common.blocks/brand/brand.css":
/*!***************************************!*\
  !*** ./common.blocks/brand/brand.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/brand/brand.css?");

/***/ }),

/***/ "./common.blocks/button/button.css":
/*!*****************************************!*\
  !*** ./common.blocks/button/button.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/button/button.css?");

/***/ }),

/***/ "./common.blocks/difficulty-tag/_theme_easy/difficulty-tag_theme_easy.css":
/*!********************************************************************************!*\
  !*** ./common.blocks/difficulty-tag/_theme_easy/difficulty-tag_theme_easy.css ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/difficulty-tag/_theme_easy/difficulty-tag_theme_easy.css?");

/***/ }),

/***/ "./common.blocks/difficulty-tag/_theme_hard/difficulty-tag_theme_hard.css":
/*!********************************************************************************!*\
  !*** ./common.blocks/difficulty-tag/_theme_hard/difficulty-tag_theme_hard.css ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/difficulty-tag/_theme_hard/difficulty-tag_theme_hard.css?");

/***/ }),

/***/ "./common.blocks/difficulty-tag/_theme_medium/difficulty-tag_theme_medium.css":
/*!************************************************************************************!*\
  !*** ./common.blocks/difficulty-tag/_theme_medium/difficulty-tag_theme_medium.css ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/difficulty-tag/_theme_medium/difficulty-tag_theme_medium.css?");

/***/ }),

/***/ "./common.blocks/difficulty-tag/_theme_very-hard/difficulty-tag_theme_very-hard.css":
/*!******************************************************************************************!*\
  !*** ./common.blocks/difficulty-tag/_theme_very-hard/difficulty-tag_theme_very-hard.css ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/difficulty-tag/_theme_very-hard/difficulty-tag_theme_very-hard.css?");

/***/ }),

/***/ "./common.blocks/difficulty-tag/difficulty-tag.css":
/*!*********************************************************!*\
  !*** ./common.blocks/difficulty-tag/difficulty-tag.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/difficulty-tag/difficulty-tag.css?");

/***/ }),

/***/ "./common.blocks/dropdown/__content/dropdown__content.css":
/*!****************************************************************!*\
  !*** ./common.blocks/dropdown/__content/dropdown__content.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/dropdown/__content/dropdown__content.css?");

/***/ }),

/***/ "./common.blocks/dropdown/dropdown.css":
/*!*********************************************!*\
  !*** ./common.blocks/dropdown/dropdown.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/dropdown/dropdown.css?");

/***/ }),

/***/ "./common.blocks/exit-button/exit-button.css":
/*!***************************************************!*\
  !*** ./common.blocks/exit-button/exit-button.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/exit-button/exit-button.css?");

/***/ }),

/***/ "./common.blocks/footer/__header/footer__header.css":
/*!**********************************************************!*\
  !*** ./common.blocks/footer/__header/footer__header.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/footer/__header/footer__header.css?");

/***/ }),

/***/ "./common.blocks/footer/footer.css":
/*!*****************************************!*\
  !*** ./common.blocks/footer/footer.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/footer/footer.css?");

/***/ }),

/***/ "./common.blocks/icon/icon.css":
/*!*************************************!*\
  !*** ./common.blocks/icon/icon.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/icon/icon.css?");

/***/ }),

/***/ "./common.blocks/image-content-grid/image-content-grid.css":
/*!*****************************************************************!*\
  !*** ./common.blocks/image-content-grid/image-content-grid.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/image-content-grid/image-content-grid.css?");

/***/ }),

/***/ "./common.blocks/image/image.css":
/*!***************************************!*\
  !*** ./common.blocks/image/image.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/image/image.css?");

/***/ }),

/***/ "./common.blocks/info-container/__description/info-container__description.css":
/*!************************************************************************************!*\
  !*** ./common.blocks/info-container/__description/info-container__description.css ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/info-container/__description/info-container__description.css?");

/***/ }),

/***/ "./common.blocks/info-container/__header/info-container__header.css":
/*!**************************************************************************!*\
  !*** ./common.blocks/info-container/__header/info-container__header.css ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/info-container/__header/info-container__header.css?");

/***/ }),

/***/ "./common.blocks/info-container/__summary/info-container__summary.css":
/*!****************************************************************************!*\
  !*** ./common.blocks/info-container/__summary/info-container__summary.css ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/info-container/__summary/info-container__summary.css?");

/***/ }),

/***/ "./common.blocks/info-container/__video/info-container__video.css":
/*!************************************************************************!*\
  !*** ./common.blocks/info-container/__video/info-container__video.css ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/info-container/__video/info-container__video.css?");

/***/ }),

/***/ "./common.blocks/info-container/info-container.css":
/*!*********************************************************!*\
  !*** ./common.blocks/info-container/info-container.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/info-container/info-container.css?");

/***/ }),

/***/ "./common.blocks/link/_contact/link_contact.css":
/*!******************************************************!*\
  !*** ./common.blocks/link/_contact/link_contact.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/link/_contact/link_contact.css?");

/***/ }),

/***/ "./common.blocks/link/_inner/link_inner.css":
/*!**************************************************!*\
  !*** ./common.blocks/link/_inner/link_inner.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/link/_inner/link_inner.css?");

/***/ }),

/***/ "./common.blocks/link/_stack/link_stack.css":
/*!**************************************************!*\
  !*** ./common.blocks/link/_stack/link_stack.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/link/_stack/link_stack.css?");

/***/ }),

/***/ "./common.blocks/link/_theme_dashed/link_theme_dashed.css":
/*!****************************************************************!*\
  !*** ./common.blocks/link/_theme_dashed/link_theme_dashed.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/link/_theme_dashed/link_theme_dashed.css?");

/***/ }),

/***/ "./common.blocks/link/link.css":
/*!*************************************!*\
  !*** ./common.blocks/link/link.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/link/link.css?");

/***/ }),

/***/ "./common.blocks/navigation/__menu/navigation__menu.css":
/*!**************************************************************!*\
  !*** ./common.blocks/navigation/__menu/navigation__menu.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/navigation/__menu/navigation__menu.css?");

/***/ }),

/***/ "./common.blocks/navigation/navigation.css":
/*!*************************************************!*\
  !*** ./common.blocks/navigation/navigation.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/navigation/navigation.css?");

/***/ }),

/***/ "./common.blocks/popup-overlay/__extended-image/popup-overlay__extended-image.css":
/*!****************************************************************************************!*\
  !*** ./common.blocks/popup-overlay/__extended-image/popup-overlay__extended-image.css ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/popup-overlay/__extended-image/popup-overlay__extended-image.css?");

/***/ }),

/***/ "./common.blocks/popup-overlay/__popup/popup-overlay__popup.css":
/*!**********************************************************************!*\
  !*** ./common.blocks/popup-overlay/__popup/popup-overlay__popup.css ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/popup-overlay/__popup/popup-overlay__popup.css?");

/***/ }),

/***/ "./common.blocks/popup-overlay/popup-overlay.css":
/*!*******************************************************!*\
  !*** ./common.blocks/popup-overlay/popup-overlay.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/popup-overlay/popup-overlay.css?");

/***/ }),

/***/ "./common.blocks/project-type/project-type.css":
/*!*****************************************************!*\
  !*** ./common.blocks/project-type/project-type.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/project-type/project-type.css?");

/***/ }),

/***/ "./common.blocks/promo-card/__animated-border/promo-card__animated-border.css":
/*!************************************************************************************!*\
  !*** ./common.blocks/promo-card/__animated-border/promo-card__animated-border.css ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/promo-card/__animated-border/promo-card__animated-border.css?");

/***/ }),

/***/ "./common.blocks/promo-card/promo-card.css":
/*!*************************************************!*\
  !*** ./common.blocks/promo-card/promo-card.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/promo-card/promo-card.css?");

/***/ }),

/***/ "./common.blocks/stack-description/_theme_frameworks/stack-description_theme_frameworks.css":
/*!**************************************************************************************************!*\
  !*** ./common.blocks/stack-description/_theme_frameworks/stack-description_theme_frameworks.css ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/stack-description/_theme_frameworks/stack-description_theme_frameworks.css?");

/***/ }),

/***/ "./common.blocks/stack-description/_theme_languages/stack-description_theme_languages.css":
/*!************************************************************************************************!*\
  !*** ./common.blocks/stack-description/_theme_languages/stack-description_theme_languages.css ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/stack-description/_theme_languages/stack-description_theme_languages.css?");

/***/ }),

/***/ "./common.blocks/stack-description/_theme_methodologyes/stack-description_theme_methodologyes.css":
/*!********************************************************************************************************!*\
  !*** ./common.blocks/stack-description/_theme_methodologyes/stack-description_theme_methodologyes.css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/stack-description/_theme_methodologyes/stack-description_theme_methodologyes.css?");

/***/ }),

/***/ "./common.blocks/stack-description/_theme_work-environment/stack-description_theme_work-environment.css":
/*!**************************************************************************************************************!*\
  !*** ./common.blocks/stack-description/_theme_work-environment/stack-description_theme_work-environment.css ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/stack-description/_theme_work-environment/stack-description_theme_work-environment.css?");

/***/ }),

/***/ "./common.blocks/stack-description/stack-description.css":
/*!***************************************************************!*\
  !*** ./common.blocks/stack-description/stack-description.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/stack-description/stack-description.css?");

/***/ }),

/***/ "./common.blocks/technology-unit/_theme_frameworks/technology-unit_theme_frameworks.css":
/*!**********************************************************************************************!*\
  !*** ./common.blocks/technology-unit/_theme_frameworks/technology-unit_theme_frameworks.css ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/technology-unit/_theme_frameworks/technology-unit_theme_frameworks.css?");

/***/ }),

/***/ "./common.blocks/technology-unit/_theme_languages/technology-unit_theme_languages.css":
/*!********************************************************************************************!*\
  !*** ./common.blocks/technology-unit/_theme_languages/technology-unit_theme_languages.css ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/technology-unit/_theme_languages/technology-unit_theme_languages.css?");

/***/ }),

/***/ "./common.blocks/technology-unit/_theme_methodologyes/technology-unit_theme_methodologyes.css":
/*!****************************************************************************************************!*\
  !*** ./common.blocks/technology-unit/_theme_methodologyes/technology-unit_theme_methodologyes.css ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/technology-unit/_theme_methodologyes/technology-unit_theme_methodologyes.css?");

/***/ }),

/***/ "./common.blocks/technology-unit/_theme_work-environment/technology-unit_theme_work-environment.css":
/*!**********************************************************************************************************!*\
  !*** ./common.blocks/technology-unit/_theme_work-environment/technology-unit_theme_work-environment.css ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/technology-unit/_theme_work-environment/technology-unit_theme_work-environment.css?");

/***/ }),

/***/ "./common.blocks/technology-unit/technology-unit.css":
/*!***********************************************************!*\
  !*** ./common.blocks/technology-unit/technology-unit.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/technology-unit/technology-unit.css?");

/***/ }),

/***/ "./common.blocks/theme-toggle/theme-toggle.css":
/*!*****************************************************!*\
  !*** ./common.blocks/theme-toggle/theme-toggle.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/theme-toggle/theme-toggle.css?");

/***/ }),

/***/ "./styles/fonts/cormorant-regular.css":
/*!********************************************!*\
  !*** ./styles/fonts/cormorant-regular.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./styles/fonts/cormorant-regular.css?");

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./styles/main.css?");

/***/ }),

/***/ "./styles/roots/borders.css":
/*!**********************************!*\
  !*** ./styles/roots/borders.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./styles/roots/borders.css?");

/***/ }),

/***/ "./styles/roots/colors.css":
/*!*********************************!*\
  !*** ./styles/roots/colors.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./styles/roots/colors.css?");

/***/ }),

/***/ "./styles/roots/content-size.css":
/*!***************************************!*\
  !*** ./styles/roots/content-size.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./styles/roots/content-size.css?");

/***/ }),

/***/ "./styles/roots/fonts.css":
/*!********************************!*\
  !*** ./styles/roots/fonts.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./styles/roots/fonts.css?");

/***/ }),

/***/ "./styles/roots/offsets.css":
/*!**********************************!*\
  !*** ./styles/roots/offsets.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./styles/roots/offsets.css?");

/***/ }),

/***/ "./styles/roots/transitions.css":
/*!**************************************!*\
  !*** ./styles/roots/transitions.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./styles/roots/transitions.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;