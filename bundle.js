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

/***/ "./common.blocks/theme-toggle/theme-toggle.js":
/*!****************************************************!*\
  !*** ./common.blocks/theme-toggle/theme-toggle.js ***!
  \****************************************************/
/***/ (() => {

eval("const darkTheme = {\r\n    \"--text-color\": \"white\",\r\n    \"--background-color\": \"rgb(15, 15, 15)\",\r\n    \"--button-background-color\": \"rgb(32, 32, 32)\",\r\n  };\r\n  const lightTheme = {\r\n    \"--text-color\": \"black\",\r\n    \"--background-color\": \"rgb(235, 235, 235)\",\r\n    \"--button-background-color\": \"rgb(200, 200, 200)\",\r\n    \"--brend-color\": \"\"\r\n  };\r\n  \r\n  const themeToggle = document.getElementById(\"theme toggle\");\r\n  themeToggle.addEventListener(\"click\", function(){\r\n    if (themeToggle.index % 2 != 0){\r\n      for(let key in lightTheme){\r\n        document.documentElement.style.setProperty(key, lightTheme[key]);\r\n        localStorage.setItem(key, lightTheme[key]);\r\n      }\r\n  \r\n      themeToggle.lastChild.src = \"images/other/moon.avif\";\r\n      themeToggle.index = 2;\r\n  \r\n      // localStorage.setItem('themeColor', lightTheme[\"--text-color\"]);\r\n      let savedTheme = localStorage.getItem('themeColor');\r\n      console.log(savedTheme);\r\n      // for(let key in savedTheme){\r\n      //   console.log(savedTheme[key]);\r\n      //   // document.documentElement.style.setProperty(key, savedTheme[key]);\r\n      // }\r\n    }\r\n    else{\r\n      for(let key in darkTheme){\r\n        document.documentElement.style.setProperty(key, darkTheme[key]);\r\n      }\r\n  \r\n      themeToggle.lastChild.src = \"images/other/sun.avif\";\r\n      themeToggle.index = 1;\r\n  \r\n      localStorage.setItem('themeColor', darkTheme);\r\n    }\r\n  });\r\n  \r\n  const savedTheme = localStorage.getItem('themeColor');\r\n  // console.log(savedTheme[0]);\r\n  if (savedTheme != null){\r\n    for(let key in savedTheme){\r\n      // console.log(key);\r\n      document.documentElement.style.setProperty(key, savedTheme[key]);\r\n    }\r\n  }\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/theme-toggle/theme-toggle.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\n/* harmony import */ var _styles_roots_colors_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/roots/colors.css */ \"./styles/roots/colors.css\");\n/* harmony import */ var _styles_roots_fonts_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/roots/fonts.css */ \"./styles/roots/fonts.css\");\n/* harmony import */ var _styles_roots_transitions_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/roots/transitions.css */ \"./styles/roots/transitions.css\");\n/* harmony import */ var _common_blocks_body_body_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common.blocks/body/body.css */ \"./common.blocks/body/body.css\");\n/* harmony import */ var _common_blocks_brand_brand_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common.blocks/brand/brand.css */ \"./common.blocks/brand/brand.css\");\n/* harmony import */ var _common_blocks_button_button_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common.blocks/button/button.css */ \"./common.blocks/button/button.css\");\n/* harmony import */ var _common_blocks_difficult_tag_difficult_tag_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common.blocks/difficult-tag/difficult-tag.css */ \"./common.blocks/difficult-tag/difficult-tag.css\");\n/* harmony import */ var _common_blocks_exit_button_exit_button_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common.blocks/exit-button/exit-button.css */ \"./common.blocks/exit-button/exit-button.css\");\n/* harmony import */ var _common_blocks_footer_footer_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common.blocks/footer/footer.css */ \"./common.blocks/footer/footer.css\");\n/* harmony import */ var _common_blocks_header_header_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common.blocks/header/header.css */ \"./common.blocks/header/header.css\");\n/* harmony import */ var _common_blocks_icon_icon_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common.blocks/icon/icon.css */ \"./common.blocks/icon/icon.css\");\n/* harmony import */ var _common_blocks_image_content_grid_image_content_grid_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common.blocks/image-content-grid/image-content-grid.css */ \"./common.blocks/image-content-grid/image-content-grid.css\");\n/* harmony import */ var _common_blocks_link_link_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common.blocks/link/link.css */ \"./common.blocks/link/link.css\");\n/* harmony import */ var _common_blocks_navigation_navigation_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common.blocks/navigation/navigation.css */ \"./common.blocks/navigation/navigation.css\");\n/* harmony import */ var _common_blocks_popup_overlay_popup_overlay_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common.blocks/popup-overlay/popup-overlay.css */ \"./common.blocks/popup-overlay/popup-overlay.css\");\n/* harmony import */ var _common_blocks_popup_overlay_popup_popup_overlay_popup_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common.blocks/popup-overlay/__popup/popup-overlay__popup.css */ \"./common.blocks/popup-overlay/__popup/popup-overlay__popup.css\");\n/* harmony import */ var _common_blocks_technology_unit_technology_unit_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common.blocks/technology-unit/technology-unit.css */ \"./common.blocks/technology-unit/technology-unit.css\");\n/* harmony import */ var _common_blocks_theme_toggle_theme_toggle_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common.blocks/theme-toggle/theme-toggle.js */ \"./common.blocks/theme-toggle/theme-toggle.js\");\n/* harmony import */ var _common_blocks_theme_toggle_theme_toggle_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_common_blocks_theme_toggle_theme_toggle_js__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _common_blocks_theme_toggle_theme_toggle_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common.blocks/theme-toggle/theme-toggle.css */ \"./common.blocks/theme-toggle/theme-toggle.css\");\nconst cards = [...document.querySelectorAll(\".promo-card\")];\r\nconst cardsBorders = [...document.querySelectorAll(\".animated-border\")];\r\n\r\nconst cardsButtons = document.getElementsByClassName(\"card-button\");\r\nconst popupOverlay = document.getElementById(\"popup-overlay\");\r\nconst popupOverlayExitButton = document.getElementById(\"overlay-exit-button\");\r\nconst popupPicture = document.getElementById(\"extended-image\");\r\n\r\ncards.forEach(el => {\r\n  el.addEventListener(\"mousemove\", fCardRotate);\r\n  el.addEventListener(\"mouseout\", fCardDefault);\r\n});\r\n\r\nfor (var i = 0; i < cardsButtons.length; i++) {\r\n  cardsButtons[i].addEventListener(\"click\", (e) => {\r\n      let src = e.currentTarget.children[0].src;\r\n      OpenExtendedPictureOverlay(src);\r\n    });\r\n  cardsButtons[i].addEventListener(\"mouseenter\", DisplayAnimatedBorder);\r\n  cardsBorders[i].addEventListener(\"mouseleave\", CloseAnimatedBorder);\r\n}\r\npopupOverlayExitButton.addEventListener(\"click\", ExitExtendedPictureOverlay);\r\n\r\nfunction fCardRotate(ev) {\r\n  this.style.transform = `perspective(2000px) rotatey(${(ev.offsetX - this.offsetWidth / 2) / 6}deg)\r\n    rotatex(${((ev.offsetY - this.offsetHeight / 2) / 6) * -1}deg)`;\r\n}\r\n\r\nfunction fCardDefault() {\r\n  this.style.transform = ``;\r\n}\r\n\r\nfunction DisplayAnimatedBorder(){\r\n  this.setAttribute(\"style\", 'border: 2px solid; border-image: conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) 1;');\r\n}\r\n\r\nfunction CloseAnimatedBorder(){\r\n  this.setAttribute(\"style\", 'border: 0;');\r\n}\r\n\r\nfunction OpenExtendedPictureOverlay(imageSrc){\r\n    popupOverlay.style.display = \"block\";\r\n    popupPicture.setAttribute(\"src\", imageSrc);\r\n}\r\n\r\nfunction ExitExtendedPictureOverlay(){\r\n  popupOverlay.style.display = \"none\";\r\n}\r\n\r\nconst linksArray = {\r\n  \"Unity \": \"https://unity.com/\",\r\n  \"C# \": \"https://learn.microsoft.com/ru-ru/dotnet/csharp/\",\r\n  \"PluginYG \": \"https://ash-message-bf4.notion.site/PluginYG-d457b23eee604b7aa6076116aab647ed#61f1dc643f8046a2815dbd8834035ea7\",\r\n  \"DOTween \": \"https://dotween.demigiant.com/\",\r\n  \"Shader&nbsp;Graphs \": \"https://unity.com/features/shader-graph\",\r\n  \"Particle&nbsp;System \": \"https://docs.unity3d.com/Manual/ParticleSystems.html\",\r\n  \"ASP.Net&nbsp;Core \": \"https://dotnet.microsoft.com/ru-ru/apps/aspnet\",\r\n  \"Blazor \": \"https://learn.microsoft.com/ru-ru/aspnet/core/blazor/?view=aspnetcore-9.0\",\r\n  \"Razor&nbsp;Pages \": \"https://learn.microsoft.com/ru-ru/aspnet/core/razor-pages/?view=aspnetcore-9.0&tabs=visual-studio\",\r\n  \"WebGL \": \"https://www.khronos.org/webgl/wiki/Main_Page\",\r\n  \"HTML5 \": \"https://doka.guide/html/\",\r\n  \"CSS3 \": \"https://doka.guide/css/\",\r\n  \"JavaScript \" : \"https://learn.javascript.ru/\",\r\n  \"Webpack \": \"https://webpack.js.org/\",\r\n  \"BEM \": \"https://ru.bem.info/\",\r\n  \"Blender \": \"https://www.blender.org/\",\r\n  \"Photoshop \": \"https://www.adobe.com/ru/products/photoshop.html\",\r\n  \"Sony&nbsp;Vegas&nbsp;Pro\" : \"https://www.vegascreativesoftware.com/ru/\",\r\n  \"Python \": \"https://www.python.org/\",\r\n  \"Tkinter&nbsp;(отрисовка&nbsp;UI) \": \"https://docs.python.org/3/library/tkinter.html\",\r\n  \"Simplaudio&nbsp;(воспроизведение&nbsp;звука) \": \"https://simpleaudio.readthedocs.io/en/latest/\",\r\n};\r\n\r\nconst technologies = {\r\n  Csharp: \"C# \",\r\n  Unity: \"Unity \",\r\n  PluginYG: \"PluginYG \",\r\n  DOTween: \"DOTween \",\r\n  ShaderGraphs: \"Shader&nbsp;Graphs \",\r\n  ParticleSystem: \"Particle&nbsp;System \",\r\n  ASPNetCore: \"ASP.Net&nbsp;Core \",\r\n  Blazor: \"Blazor \",\r\n  RazorPages: \"Razor&nbsp;Pages \",\r\n  WebGL: \"WebGL \",\r\n  HTML5: \"HTML5 \",\r\n  CSS3: \"CSS3 \",\r\n  Webpack: \"Webpack \",\r\n  BEM: \"BEM \",\r\n  JavaScript: \"JavaScript \",\r\n  Blender: \"Blender \",\r\n  Photoshop: \"Photoshop \",\r\n  SonyVegasPro: \"Sony&nbsp;Vegas&nbsp;Pro \",\r\n  Python: \"Python \",\r\n  Tkinter: \"Tkinter&nbsp;(отрисовка&nbsp;UI) \",\r\n  Simplaudio: \"Simplaudio&nbsp;(воспроизведение&nbsp;звука) \"\r\n};\r\n\r\nconst exolab = [technologies[\"Python\"], technologies[\"Tkinter\"], technologies[\"Simplaudio\"]];\r\n\r\nconst multiverseMemes = [\r\n  technologies[\"Csharp\"], technologies[\"Unity\"], technologies[\"PluginYG\"],\r\n  technologies[\"DOTween\"], technologies[\"ShaderGraphs\"], technologies[\"ParticleSystem\"],\r\n  technologies[\"Blender\"], technologies[\"SonyVegasPro\"]\r\n];\r\n\r\nconst minecraftIndustrialization = [\r\n  technologies[\"Csharp\"], technologies[\"Unity\"], technologies[\"PluginYG\"],\r\n  technologies[\"DOTween\"], technologies[\"ShaderGraphs\"], technologies[\"ParticleSystem\"],\r\n  technologies[\"Photoshop\"]\r\n];\r\n\r\nconst furnitureShop = [\r\n  technologies[\"Csharp\"], technologies[\"ASPNetCore\"], technologies[\"Blazor\"],\r\n  technologies[\"RazorPages\"], technologies[\"Unity\"], technologies[\"WebGL\"],\r\n  technologies[\"HTML5\"], technologies[\"CSS3\"]\r\n];\r\n\r\nconst characterMenuConcept = [\r\n  technologies[\"Csharp\"], technologies[\"Unity\"],\r\n  technologies[\"DOTween\"], technologies[\"Photoshop\"]\r\n];\r\n\r\nconst portfolioSite = [\r\n  technologies[\"HTML5\"], technologies[\"CSS3\"],\r\n  technologies[\"JavaScript\"], technologies[\"Webpack\"],\r\n  technologies[\"BEM\"]\r\n]\r\n\r\nconst allProjects = [exolab, multiverseMemes,\r\n  minecraftIndustrialization, furnitureShop,\r\n  characterMenuConcept, portfolioSite\r\n];\r\n\r\nconst stackContainers = [\r\n  document.getElementById(\"Exolab\"),\r\n  document.getElementById(\"Multiverse memes\"),\r\n  document.getElementById(\"Minecraft: Industrialization\"),\r\n  document.getElementById(\"Furniture shop\"),\r\n  document.getElementById(\"Character menu concept\"),\r\n  document.getElementById(\"Portfolio site\"),\r\n];\r\n\r\nlet iteration = 0;\r\nallProjects.forEach(project =>{\r\n  project.forEach(element => {\r\n    let link = document.createElement(\"a\");\r\n    link.innerHTML = element;\r\n    link.className = \"stack-link\";\r\n    link.href = GetLinkAddress(element);\r\n    link.target = \"_blank\";\r\n  \r\n    let unit = document.createElement(\"p\");\r\n    unit.className = \"technology-unit\";\r\n    unit.appendChild(link);\r\n\r\n    stackContainers[iteration].appendChild(unit);\r\n  });\r\n\r\n  iteration++;\r\n});\r\n\r\nfunction GetLinkAddress(technology){\r\n  for (var key in linksArray) {\r\n    if (key == technology){\r\n      return linksArray[key];\r\n    }\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://my-portfolio/./js/index.js?");

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

/***/ "./common.blocks/difficult-tag/difficult-tag.css":
/*!*******************************************************!*\
  !*** ./common.blocks/difficult-tag/difficult-tag.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/difficult-tag/difficult-tag.css?");

/***/ }),

/***/ "./common.blocks/exit-button/exit-button.css":
/*!***************************************************!*\
  !*** ./common.blocks/exit-button/exit-button.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/exit-button/exit-button.css?");

/***/ }),

/***/ "./common.blocks/footer/footer.css":
/*!*****************************************!*\
  !*** ./common.blocks/footer/footer.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/footer/footer.css?");

/***/ }),

/***/ "./common.blocks/header/header.css":
/*!*****************************************!*\
  !*** ./common.blocks/header/header.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/header/header.css?");

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

/***/ "./common.blocks/link/link.css":
/*!*************************************!*\
  !*** ./common.blocks/link/link.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/link/link.css?");

/***/ }),

/***/ "./common.blocks/navigation/navigation.css":
/*!*************************************************!*\
  !*** ./common.blocks/navigation/navigation.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/navigation/navigation.css?");

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

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./styles/main.css?");

/***/ }),

/***/ "./styles/roots/colors.css":
/*!*********************************!*\
  !*** ./styles/roots/colors.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./styles/roots/colors.css?");

/***/ }),

/***/ "./styles/roots/fonts.css":
/*!********************************!*\
  !*** ./styles/roots/fonts.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./styles/roots/fonts.css?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;