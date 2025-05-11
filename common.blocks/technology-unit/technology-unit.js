import {
  linksArray,
  languages,
  frameworksLibrariesPlugins,
  workEnvironment,
  methodologies,
  allProjects,
} from "../../js/data.js";

const stackContainers = document.getElementsByClassName("stack-description");

let iteration = 0;
let languagesValues = Object.values(languages);
let frameworksValues = Object.values(frameworksLibrariesPlugins);
let workEnvironmentValues = Object.values(workEnvironment);
let methodologiesValues = Object.values(methodologies);

allProjects.forEach((project) => {
  project.forEach((element) => {
    if (languagesValues.includes(element)) {
      createStackElement(
        element,
        stackContainers[iteration],
        "technology-unit_theme_languages",
        false
      );
    } else if (frameworksValues.includes(element)) {
      createStackElement(
        element,
        stackContainers[iteration],
        "technology-unit_theme_frameworks",
        false
      );
    } else if (workEnvironmentValues.includes(element)) {
      createStackElement(
        element,
        stackContainers[iteration],
        "technology-unit_theme_work-environment",
        false
      );
    } else if (methodologiesValues.includes(element)) {
      createStackElement(
        element,
        stackContainers[iteration],
        "technology-unit_theme_methodologyes",
        false
      );
    }
  });

  iteration++;
});

const languagesBlock = document.getElementById("languages");
const frameworksLibrariesPluginsBlock = document.getElementById("frameworks-libraries-plugins");
const workEnvironmentBlock = document.getElementById("work-environment");
const methodologiesBlock = document.getElementById("methodologies");

for (let key in languages) {
  createStackElement(languages[key], languagesBlock, "technology-unit_theme_languages", true);
}

for (let key in workEnvironment) {
  createStackElement(
    workEnvironment[key],
    workEnvironmentBlock,
    "technology-unit_theme_work-environment",
    true
  );
}

for (let key in methodologies) {
  createStackElement(
    methodologies[key],
    methodologiesBlock,
    "technology-unit_theme_methodologyes",
    true
  );
}

let frameworksTemp = frameworksLibrariesPlugins;
delete frameworksTemp.Tkinter;
delete frameworksTemp.Simplaudio;

for (let key in frameworksTemp) {
  createStackElement(
    frameworksTemp[key],
    frameworksLibrariesPluginsBlock,
    "technology-unit_theme_frameworks",
    true
  );
}

function createStackElement(technologyName, parent, modifier, isVisible) {
  let link = document.createElement("a");
  link.innerHTML = technologyName;
  link.className = "link_stack technology-unit glare-of-light glare-of-light_small";
  link.classList.add(modifier);
  link.href = getLinkAddress(technologyName);
  link.target = "_blank";

  if (isVisible == false) {
    link.style.display = "none";
  }

  parent.appendChild(link);
}

function getLinkAddress(technology) {
  for (var key in linksArray) {
    if (key == technology) {
      return linksArray[key];
    }
  }
}
