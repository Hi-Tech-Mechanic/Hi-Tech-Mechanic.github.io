const projectSummary = [...document.querySelectorAll(".info-container__summary")];

projectSummary.forEach((element) => {
  element.addEventListener("click", () => {
    smoothlyDisplayTechnologyUnit(element.parentElement.parentElement);
  });
});

function smoothlyDisplayTechnologyUnit(infoContainer) {
  let stackDescription = infoContainer.getElementsByClassName("stack-description")[0];
  let childrenCount = 0;

  if (!infoContainer.children[0].attributes.open) {
    childrenCount = stackDescription.children.length;

    for (let i = 0; i < childrenCount; i++) {
      setTimeout(() => {
        stackDescription.children[i].style.display = "inline";
      }, i * getDisplayTime(childrenCount));
    }
  } else {
    childrenCount = stackDescription.children.length;

    for (let i = childrenCount - 1; i >= 0; i--) {
      setTimeout(() => {
        stackDescription.children[childrenCount - 1 - i].style.display = "none";
      }, (i * getDisplayTime(childrenCount)) / 3);
    }
  }
}

function getDisplayTime(itemCount) {
  return Math.floor(1000 * (1 / itemCount));
}
