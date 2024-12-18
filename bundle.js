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

eval("const darkTheme = {\r\n    \"--text-color\": \"white\",\r\n    \"--background-color\": \"rgb(15, 15, 15)\",\r\n    \"--button-background-color\": \"rgb(32, 32, 32)\",\r\n};\r\n\r\nconst lightTheme = {\r\n  \"--text-color\": \"black\",\r\n  \"--background-color\": \"rgb(235, 235, 235)\",\r\n  \"--button-background-color\": \"rgb(200, 200, 200)\",\r\n};\r\n  \r\nconst themeToggle = document.getElementById(\"theme toggle\");\r\nthemeToggle.addEventListener(\"click\", function(){\r\n  if (themeToggle.index % 2 != 0){\r\n    for(let key in lightTheme){\r\n      document.documentElement.style.setProperty(key, lightTheme[key]);\r\n      localStorage.setItem(key, lightTheme[key]);\r\n    }\r\n\r\n    themeToggle.lastChild.src = \"images/other/moon.avif\";\r\n    themeToggle.index = 2;\r\n\r\n    // localStorage.setItem('themeColor', lightTheme[\"--text-color\"]);\r\n    let savedTheme = localStorage.getItem('themeColor');\r\n    console.log(savedTheme);\r\n    // for(let key in savedTheme){\r\n    //   console.log(savedTheme[key]);\r\n    //   // document.documentElement.style.setProperty(key, savedTheme[key]);\r\n    // }\r\n  }\r\n  else{\r\n    for(let key in darkTheme){\r\n      document.documentElement.style.setProperty(key, darkTheme[key]);\r\n    }\r\n\r\n    themeToggle.lastChild.src = \"images/other/sun.avif\";\r\n    themeToggle.index = 1;\r\n\r\n    localStorage.setItem('themeColor', darkTheme);\r\n  }\r\n});\r\n\r\nconst savedTheme = localStorage.getItem('themeColor');\r\nif (savedTheme != null){\r\n  for(let key in savedTheme){\r\n    document.documentElement.style.setProperty(key, savedTheme[key]);\r\n  }\r\n}\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/theme-toggle/theme-toggle.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\n/* harmony import */ var _styles_roots_colors_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/roots/colors.css */ \"./styles/roots/colors.css\");\n/* harmony import */ var _styles_roots_fonts_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/roots/fonts.css */ \"./styles/roots/fonts.css\");\n/* harmony import */ var _styles_roots_transitions_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/roots/transitions.css */ \"./styles/roots/transitions.css\");\n/* harmony import */ var _styles_roots_offsets_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/roots/offsets.css */ \"./styles/roots/offsets.css\");\n/* harmony import */ var _styles_roots_borders_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/roots/borders.css */ \"./styles/roots/borders.css\");\n/* harmony import */ var _styles_roots_content_size_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/roots/content-size.css */ \"./styles/roots/content-size.css\");\n/* harmony import */ var _common_blocks_body_body_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common.blocks/body/body.css */ \"./common.blocks/body/body.css\");\n/* harmony import */ var _common_blocks_brand_brand_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common.blocks/brand/brand.css */ \"./common.blocks/brand/brand.css\");\n/* harmony import */ var _common_blocks_button_button_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common.blocks/button/button.css */ \"./common.blocks/button/button.css\");\n/* harmony import */ var _common_blocks_difficulty_tag_difficulty_tag_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common.blocks/difficulty-tag/difficulty-tag.css */ \"./common.blocks/difficulty-tag/difficulty-tag.css\");\n/* harmony import */ var _common_blocks_difficulty_tag_theme_easy_difficulty_tag_theme_easy_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common.blocks/difficulty-tag/_theme_easy/difficulty-tag_theme_easy.css */ \"./common.blocks/difficulty-tag/_theme_easy/difficulty-tag_theme_easy.css\");\n/* harmony import */ var _common_blocks_difficulty_tag_theme_medium_difficulty_tag_theme_medium_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common.blocks/difficulty-tag/_theme_medium/difficulty-tag_theme_medium.css */ \"./common.blocks/difficulty-tag/_theme_medium/difficulty-tag_theme_medium.css\");\n/* harmony import */ var _common_blocks_difficulty_tag_theme_hard_difficulty_tag_theme_hard_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common.blocks/difficulty-tag/_theme_hard/difficulty-tag_theme_hard.css */ \"./common.blocks/difficulty-tag/_theme_hard/difficulty-tag_theme_hard.css\");\n/* harmony import */ var _common_blocks_difficulty_tag_theme_very_hard_difficulty_tag_theme_very_hard_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common.blocks/difficulty-tag/_theme_very-hard/difficulty-tag_theme_very-hard.css */ \"./common.blocks/difficulty-tag/_theme_very-hard/difficulty-tag_theme_very-hard.css\");\n/* harmony import */ var _common_blocks_exit_button_exit_button_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common.blocks/exit-button/exit-button.css */ \"./common.blocks/exit-button/exit-button.css\");\n/* harmony import */ var _common_blocks_footer_footer_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common.blocks/footer/footer.css */ \"./common.blocks/footer/footer.css\");\n/* harmony import */ var _common_blocks_footer_header_footer_header_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common.blocks/footer/__header/footer__header.css */ \"./common.blocks/footer/__header/footer__header.css\");\n/* harmony import */ var _common_blocks_icon_icon_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common.blocks/icon/icon.css */ \"./common.blocks/icon/icon.css\");\n/* harmony import */ var _common_blocks_image_content_grid_image_content_grid_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common.blocks/image-content-grid/image-content-grid.css */ \"./common.blocks/image-content-grid/image-content-grid.css\");\n/* harmony import */ var _common_blocks_info_container_info_container_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../common.blocks/info-container/info-container.css */ \"./common.blocks/info-container/info-container.css\");\n/* harmony import */ var _common_blocks_info_container_header_info_container_header_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../common.blocks/info-container/__header/info-container__header.css */ \"./common.blocks/info-container/__header/info-container__header.css\");\n/* harmony import */ var _common_blocks_info_container_description_info_container_description_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../common.blocks/info-container/__description/info-container__description.css */ \"./common.blocks/info-container/__description/info-container__description.css\");\n/* harmony import */ var _common_blocks_info_container_summary_info_container_summary_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../common.blocks/info-container/__summary/info-container__summary.css */ \"./common.blocks/info-container/__summary/info-container__summary.css\");\n/* harmony import */ var _common_blocks_link_link_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../common.blocks/link/link.css */ \"./common.blocks/link/link.css\");\n/* harmony import */ var _common_blocks_link_contact_link_contact_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../common.blocks/link/_contact/link_contact.css */ \"./common.blocks/link/_contact/link_contact.css\");\n/* harmony import */ var _common_blocks_link_stack_link_stack_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../common.blocks/link/_stack/link_stack.css */ \"./common.blocks/link/_stack/link_stack.css\");\n/* harmony import */ var _common_blocks_link_inner_link_inner_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../common.blocks/link/_inner/link_inner.css */ \"./common.blocks/link/_inner/link_inner.css\");\n/* harmony import */ var _common_blocks_link_theme_dashed_link_theme_dashed_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../common.blocks/link/_theme_dashed/link_theme_dashed.css */ \"./common.blocks/link/_theme_dashed/link_theme_dashed.css\");\n/* harmony import */ var _common_blocks_navigation_navigation_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../common.blocks/navigation/navigation.css */ \"./common.blocks/navigation/navigation.css\");\n/* harmony import */ var _common_blocks_popup_overlay_popup_overlay_css__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../common.blocks/popup-overlay/popup-overlay.css */ \"./common.blocks/popup-overlay/popup-overlay.css\");\n/* harmony import */ var _common_blocks_popup_overlay_popup_popup_overlay_popup_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../common.blocks/popup-overlay/__popup/popup-overlay__popup.css */ \"./common.blocks/popup-overlay/__popup/popup-overlay__popup.css\");\n/* harmony import */ var _common_blocks_popup_overlay_extended_image_popup_overlay_extended_image_css__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../common.blocks/popup-overlay/__extended-image/popup-overlay__extended-image.css */ \"./common.blocks/popup-overlay/__extended-image/popup-overlay__extended-image.css\");\n/* harmony import */ var _common_blocks_project_type_project_type_css__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../common.blocks/project-type/project-type.css */ \"./common.blocks/project-type/project-type.css\");\n/* harmony import */ var _common_blocks_stack_description_stack_description_css__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../common.blocks/stack-description/stack-description.css */ \"./common.blocks/stack-description/stack-description.css\");\n/* harmony import */ var _common_blocks_stack_description_theme_languages_stack_description_theme_languages_css__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../common.blocks/stack-description/_theme_languages/stack-description_theme_languages.css */ \"./common.blocks/stack-description/_theme_languages/stack-description_theme_languages.css\");\n/* harmony import */ var _common_blocks_stack_description_theme_frameworks_stack_description_theme_frameworks_css__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../common.blocks/stack-description/_theme_frameworks/stack-description_theme_frameworks.css */ \"./common.blocks/stack-description/_theme_frameworks/stack-description_theme_frameworks.css\");\n/* harmony import */ var _common_blocks_stack_description_theme_work_environment_stack_description_theme_work_environment_css__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../common.blocks/stack-description/_theme_work-environment/stack-description_theme_work-environment.css */ \"./common.blocks/stack-description/_theme_work-environment/stack-description_theme_work-environment.css\");\n/* harmony import */ var _common_blocks_stack_description_theme_methodologyes_stack_description_theme_methodologyes_css__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../common.blocks/stack-description/_theme_methodologyes/stack-description_theme_methodologyes.css */ \"./common.blocks/stack-description/_theme_methodologyes/stack-description_theme_methodologyes.css\");\n/* harmony import */ var _common_blocks_technology_unit_technology_unit_css__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../common.blocks/technology-unit/technology-unit.css */ \"./common.blocks/technology-unit/technology-unit.css\");\n/* harmony import */ var _common_blocks_technology_unit_theme_frameworks_technology_unit_theme_frameworks_css__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../common.blocks/technology-unit/_theme_frameworks/technology-unit_theme_frameworks.css */ \"./common.blocks/technology-unit/_theme_frameworks/technology-unit_theme_frameworks.css\");\n/* harmony import */ var _common_blocks_technology_unit_theme_languages_technology_unit_theme_languages_css__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../common.blocks/technology-unit/_theme_languages/technology-unit_theme_languages.css */ \"./common.blocks/technology-unit/_theme_languages/technology-unit_theme_languages.css\");\n/* harmony import */ var _common_blocks_technology_unit_theme_work_environment_technology_unit_theme_work_environment_css__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../common.blocks/technology-unit/_theme_work-environment/technology-unit_theme_work-environment.css */ \"./common.blocks/technology-unit/_theme_work-environment/technology-unit_theme_work-environment.css\");\n/* harmony import */ var _common_blocks_technology_unit_theme_methodologyes_technology_unit_theme_methodologyes_css__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../common.blocks/technology-unit/_theme_methodologyes/technology-unit_theme_methodologyes.css */ \"./common.blocks/technology-unit/_theme_methodologyes/technology-unit_theme_methodologyes.css\");\n/* harmony import */ var _common_blocks_theme_toggle_theme_toggle_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../common.blocks/theme-toggle/theme-toggle.js */ \"./common.blocks/theme-toggle/theme-toggle.js\");\n/* harmony import */ var _common_blocks_theme_toggle_theme_toggle_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_common_blocks_theme_toggle_theme_toggle_js__WEBPACK_IMPORTED_MODULE_44__);\n/* harmony import */ var _common_blocks_theme_toggle_theme_toggle_css__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../common.blocks/theme-toggle/theme-toggle.css */ \"./common.blocks/theme-toggle/theme-toggle.css\");\n/* harmony import */ var _common_blocks_stack_container_stack_container_css__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../common.blocks/stack-container/stack-container.css */ \"./common.blocks/stack-container/stack-container.css\");\n/* harmony import */ var _common_blocks_promo_card_promo_card_css__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../common.blocks/promo-card/promo-card.css */ \"./common.blocks/promo-card/promo-card.css\");\n/* harmony import */ var _common_blocks_promo_card_animated_border_promo_card_animated_border_css__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../common.blocks/promo-card/__animated-border/promo-card__animated-border.css */ \"./common.blocks/promo-card/__animated-border/promo-card__animated-border.css\");\n/* harmony import */ var _common_blocks_image_image_css__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../common.blocks/image/image.css */ \"./common.blocks/image/image.css\");\nconst cards = [...document.querySelectorAll(\".promo-card\")];\r\nconst cardsBorders = [...document.querySelectorAll(\".promo-card__animated-border\")];\r\n\r\n// const cardsButtons = document.getElementsByClassName(\"card-button\");\r\nconst popupOverlay = document.getElementById(\"popup-overlay\");\r\nconst popupPicture = document.getElementById(\"extended-image\");\r\nconst popupOverlayExitButton = document.getElementById(\"overlay-exit-button\");\r\n\r\ncards.forEach(el => {\r\n  el.addEventListener(\"mousemove\", fCardRotate);\r\n  el.addEventListener(\"mouseout\", fCardDefault);\r\n  // el.addEventListener(\"mouseenter\", displayAnimatedBorder);\r\n  // el.addEventListener(\"mouseleave\", closeAnimatedBorder);\r\n});\r\n\r\nfor (var i = 0; i < cardsBorders.length; i++) \r\n{\r\n  cardsBorders[i].addEventListener(\"click\", (element) => {\r\n      let src = element.currentTarget.children[0].src;\r\n      openExtendedPictureOverlay(src);\r\n  });\r\n  cardsBorders[i].addEventListener(\"mouseenter\", displayAnimatedBorder);\r\n  cardsBorders[i].addEventListener(\"mouseleave\", closeAnimatedBorder);\r\n}\r\npopupOverlayExitButton.addEventListener(\"click\", exitExtendedPictureOverlay);\r\n\r\nfunction fCardRotate(ev) {\r\n  this.style.transform = `perspective(2000px) rotatey(${(ev.offsetX - this.offsetWidth / 2) / 6}deg)\r\n    rotatex(${((ev.offsetY - this.offsetHeight / 2) / 6) * -1}deg)`;\r\n}\r\n\r\nfunction fCardDefault() {\r\n  this.style.transform = ``;\r\n}\r\n\r\nfunction displayAnimatedBorder(){\r\n  this.setAttribute(\"style\", 'border: 2px solid; border-image: conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) 1;');\r\n}\r\n\r\nfunction closeAnimatedBorder(){\r\n  this.setAttribute(\"style\", 'border: 0;');\r\n}\r\n\r\nfunction openExtendedPictureOverlay(imageSrc){\r\n  popupOverlay.style.display = \"block\";\r\n  popupPicture.setAttribute(\"src\", imageSrc);\r\n}\r\n\r\nfunction exitExtendedPictureOverlay(){\r\n  popupOverlay.style.display = \"none\";\r\n}\r\n\r\nconst linksArray = {\r\n  \"C# \": \"https://learn.microsoft.com/ru-ru/dotnet/csharp/\",\r\n  \"JavaScript \": \"https://learn.javascript.ru/\",\r\n  \"HTML \": \"https://doka.guide/html/\",\r\n  \"CSS \": \"https://doka.guide/css/\",\r\n  \"SQL \": \"https://www.w3schools.com/sql/default.asp\",\r\n  \"PHP \": \"https://www.php.net/\",\r\n  \"Python \": \"https://www.python.org/\",\r\n\r\n  \"ASP.Net&nbsp;Core \": \"https://dotnet.microsoft.com/ru-ru/apps/aspnet\",\r\n  \"Blazor \": \"https://learn.microsoft.com/ru-ru/aspnet/core/blazor/?view=aspnetcore-9.0\",\r\n  \"Razor&nbsp;Pages \": \"https://learn.microsoft.com/ru-ru/aspnet/core/razor-pages/?view=aspnetcore-9.0&tabs=visual-studio\",\r\n  \"Webpack \": \"https://webpack.js.org/\",\r\n  \"DOTween \": \"https://dotween.demigiant.com/\",\r\n  \"PluginYG \": \"https://ash-message-bf4.notion.site/PluginYG-d457b23eee604b7aa6076116aab647ed#61f1dc643f8046a2815dbd8834035ea7\",\r\n  \"WebGL \": \"https://www.khronos.org/webgl/wiki/Main_Page\",\r\n  \"Shader&nbsp;Graphs \": \"https://unity.com/features/shader-graph\",\r\n  \"Particle&nbsp;System \": \"https://docs.unity3d.com/Manual/ParticleSystems.html\",\r\n  \"Tkinter&nbsp;(отрисовка&nbsp;UI) \": \"https://docs.python.org/3/library/tkinter.html\",\r\n  \"Simplaudio&nbsp;(воспроизведение&nbsp;звука) \": \"https://simpleaudio.readthedocs.io/en/latest/\",\r\n\r\n  \"Microsoft&nbsp;Visual&nbsp;Studio \": \"https://visualstudio.microsoft.com/ru/\",\r\n  \"Visual&nbsp;Studio&nbsp;Code \": \"https://code.visualstudio.com/\",\r\n  \"Unity \": \"https://unity.com/\",\r\n  \"MySQL\" : \"https://metanit.com/sql/mysql/\",\r\n  \"Blender \": \"https://www.blender.org/\",\r\n  \"Photoshop \": \"https://www.adobe.com/ru/products/photoshop.html\",\r\n  \"Sony&nbsp;Vegas&nbsp;Pro \": \"https://www.vegascreativesoftware.com/ru/\",\r\n\r\n  \"Adaptive&nbsp;UI \": \"https://docs.unity3d.com/ru/2021.1/Manual/HOWTO-UIMultiResolution.html\",\r\n  \"Adaptive&nbsp;Web&nbsp;Design \": \"https://alistapart.com/article/responsive-web-design/\",\r\n  \"BEM \": \"https://ru.bem.info/\",\r\n  \"MVC \": \"https://ru.wikipedia.org/wiki/Model-View-Controller\",\r\n  \"MVP \": \"https://ru.wikipedia.org/wiki/Model-View-Presenter\",\r\n  \"MVVM \": \"https://ru.wikipedia.org/wiki/Model-View-ViewModel\",\r\n};\r\n\r\nconst languages = {\r\n  Csharp: \"C# \",\r\n  JavaScript: \"JavaScript \",\r\n  HTML: \"HTML \",\r\n  CSS: \"CSS \",\r\n  SQL: \"SQL \",\r\n  PHP: \"PHP \",\r\n  Python: \"Python \",\r\n}\r\n\r\nconst frameworksLibrariesPlugins = {\r\n  ASPNetCore: \"ASP.Net&nbsp;Core \",\r\n  Blazor: \"Blazor \",\r\n  RazorPages: \"Razor&nbsp;Pages \",\r\n  Webpack: \"Webpack \",\r\n  DOTween: \"DOTween \",\r\n  PluginYG: \"PluginYG \",\r\n  WebGL: \"WebGL \",\r\n  ShaderGraphs: \"Shader&nbsp;Graphs \",\r\n  ParticleSystem: \"Particle&nbsp;System \",\r\n  Tkinter: \"Tkinter&nbsp;(отрисовка&nbsp;UI) \",\r\n  Simplaudio: \"Simplaudio&nbsp;(воспроизведение&nbsp;звука) \"\r\n}\r\n\r\nconst workEnvironment = {\r\n  MicrosoftVisualStudio: \"Microsoft&nbsp;Visual&nbsp;Studio \",\r\n  VisualStudioCode: \"Visual&nbsp;Studio&nbsp;Code \",\r\n  Unity: \"Unity \",\r\n  MySQL: \"MySQL\",\r\n  Blender: \"Blender \",\r\n  Photoshop: \"Photoshop \",\r\n  SonyVegasPro: \"Sony&nbsp;Vegas&nbsp;Pro \",\r\n}\r\n\r\nconst methodologies = {\r\n  AdaptiveUI: \"Adaptive&nbsp;UI \",\r\n  AdaptiveWebDesign: \"Adaptive&nbsp;Web&nbsp;Design \",\r\n  BEM: \"BEM \",\r\n  MVC: \"MVC \",\r\n  MVP: \"MVP \",\r\n  MVVM: \"MVVM \",\r\n}\r\n\r\nconst exolab = [languages[\"Python\"], frameworksLibrariesPlugins[\"Tkinter\"],\r\n  frameworksLibrariesPlugins[\"Simplaudio\"]\r\n];\r\n\r\nconst multiverseMemes = [\r\n  languages[\"Csharp\"],\r\n  frameworksLibrariesPlugins[\"WebGL\"],\r\n  frameworksLibrariesPlugins[\"DOTween\"],\r\n  frameworksLibrariesPlugins[\"PluginYG\"],\r\n  frameworksLibrariesPlugins[\"ParticleSystem\"],\r\n  workEnvironment[\"Unizty\"],\r\n  workEnvironment[\"MicrosoftVisualStudio\"],\r\n  workEnvironment[\"Blender\"],\r\n  workEnvironment[\"Photoshop\"],\r\n  workEnvironment[\"SonyVegasPro\"],\r\n  methodologies[\"AdaptiveUI\"],\r\n  methodologies[\"MVC\"],\r\n];\r\n\r\nconst minecraftIndustrialization = [\r\n  languages[\"Csharp\"],\r\n  frameworksLibrariesPlugins[\"DOTween\"],\r\n  frameworksLibrariesPlugins[\"ShaderGraphs\"],\r\n  frameworksLibrariesPlugins[\"ParticleSystem\"],\r\n  frameworksLibrariesPlugins[\"PluginYG\"],\r\n  workEnvironment[\"Unity\"],\r\n  workEnvironment[\"MicrosoftVisualStudio\"],\r\n  workEnvironment[\"Photoshop\"],\r\n  methodologies[\"AdaptiveUI\"],\r\n];\r\n\r\nconst furnitureShop = [\r\n  languages[\"Csharp\"],\r\n  languages[\"HTML\"],\r\n  languages[\"CSS\"],\r\n  frameworksLibrariesPlugins[\"ASPNetCore\"],\r\n  frameworksLibrariesPlugins[\"Blazor\"],\r\n  frameworksLibrariesPlugins[\"RazorPages\"],\r\n  frameworksLibrariesPlugins[\"WebGL\"],\r\n  workEnvironment[\"MicrosoftVisualStudio\"],\r\n  workEnvironment[\"Unity\"],\r\n];\r\n\r\nconst characterMenuConcept = [\r\n  languages[\"Csharp\"],\r\n  frameworksLibrariesPlugins[\"DOTween\"],\r\n  workEnvironment[\"Unity\"],\r\n  workEnvironment[\"MicrosoftVisualStudio\"],\r\n  workEnvironment[\"Photoshop\"],\r\n  methodologies[\"AdaptiveUI\"],\r\n  methodologies[\"MVC\"]\r\n];\r\n\r\nconst portfolioSite = [\r\n  languages[\"HTML\"],\r\n  languages[\"CSS\"],\r\n  languages[\"JavaScript\"],\r\n  frameworksLibrariesPlugins[\"Webpack\"],\r\n  workEnvironment[\"VisualStudioCode\"],\r\n  methodologies[\"BEM\"],\r\n  methodologies[\"AdaptiveWebDesign\"],\r\n]\r\n\r\nconst allProjects = [exolab, multiverseMemes,\r\n  minecraftIndustrialization, furnitureShop,\r\n  characterMenuConcept, portfolioSite\r\n];\r\n\r\nconst stackContainers = [\r\n  document.getElementById(\"Exolab\"),\r\n  document.getElementById(\"Multiverse memes\"),\r\n  document.getElementById(\"Minecraft: Industrialization\"),\r\n  document.getElementById(\"Furniture shop\"),\r\n  document.getElementById(\"Character menu concept\"),\r\n  document.getElementById(\"Portfolio site\"),\r\n];\r\n\r\nlet iteration = 0;\r\nlet languagesValues = Object.values(languages);\r\nlet frameworksValues = Object.values(frameworksLibrariesPlugins);\r\nlet workEnvironmentValues = Object.values(workEnvironment);\r\nlet methodologiesValues = Object.values(methodologies);\r\nallProjects.forEach(project => {\r\n  project.forEach(element => {\r\n    if (languagesValues.includes(element)){\r\n      createStackElement(element, stackContainers[iteration], \"technology-unit_theme_languages\");\r\n    }\r\n    else if (frameworksValues.includes(element)){\r\n      createStackElement(element, stackContainers[iteration], \"technology-unit_theme_frameworks\");\r\n    }\r\n    else if (workEnvironmentValues.includes(element)){\r\n      createStackElement(element, stackContainers[iteration], \"technology-unit_theme_work-environment\");\r\n    }\r\n    else if (methodologiesValues.includes(element)){\r\n      createStackElement(element, stackContainers[iteration], \"technology-unit_theme_methodologyes\");\r\n    }\r\n  });\r\n\r\n  iteration++;\r\n});\r\n\r\nconst languagesBlock = document.getElementById(\"Languages\");\r\nconst frameworksLibrariesPluginsBlock = document.getElementById(\"Frameworks Libraries Plugins\");\r\nconst workEnvironmentBlock = document.getElementById(\"Work environment\");\r\nconst methodologiesBlock = document.getElementById(\"Methodologies\");\r\n\r\nfor (let key in languages){\r\n  createStackElement(languages[key], languagesBlock, \"technology-unit_theme_languages\");\r\n}\r\n\r\nfor (let key in workEnvironment){\r\n  createStackElement(workEnvironment[key], workEnvironmentBlock, \"technology-unit_theme_work-environment\");\r\n}\r\n\r\nfor (let key in methodologies){\r\n  createStackElement(methodologies[key], methodologiesBlock, \"technology-unit_theme_methodologyes\");\r\n}\r\n\r\nlet frameworksTemp = frameworksLibrariesPlugins;\r\ndelete frameworksTemp.Tkinter;\r\ndelete frameworksTemp.Simplaudio;\r\nfor (let key in frameworksTemp){\r\n  createStackElement(frameworksTemp[key], frameworksLibrariesPluginsBlock, \"technology-unit_theme_frameworks\");\r\n}\r\n\r\nfunction createStackElement(value, parent, modifier){\r\n  let link = document.createElement(\"a\");\r\n  link.innerHTML = value;\r\n  link.className = \"link_stack\";\r\n  link.href = GetLinkAddress(value);\r\n  link.target = \"_blank\";\r\n\r\n  let unit = document.createElement(\"p\");\r\n  unit.className = \"technology-unit\";\r\n  unit.classList.add(modifier);\r\n  unit.appendChild(link);\r\n\r\n  parent.appendChild(unit);\r\n}\r\n\r\nfunction GetLinkAddress(technology){\r\n  for (var key in linksArray) {\r\n    if (key == technology){\r\n      return linksArray[key];\r\n    }\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// import \"../common.blocks/project-description-container/\";\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://my-portfolio/./js/index.js?");

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

/***/ "./common.blocks/stack-container/stack-container.css":
/*!***********************************************************!*\
  !*** ./common.blocks/stack-container/stack-container.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-portfolio/./common.blocks/stack-container/stack-container.css?");

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