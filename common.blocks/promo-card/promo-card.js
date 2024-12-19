const cards = [...document.querySelectorAll(".promo-card")];
const cardsBorders = [...document.querySelectorAll(".promo-card__animated-border")];

const popupOverlay = document.getElementById("popup-overlay");
const popupPicture = document.getElementById("extended-image");
const popupOverlayExitButton = document.getElementById("overlay-exit-button");

popupOverlayExitButton.addEventListener("click", exitExtendedPictureOverlay);

cards.forEach((el) => {
  el.addEventListener("mousemove", fCardRotate);
  el.addEventListener("mouseout", fCardDefault);
});

for (var i = 0; i < cardsBorders.length; i++) {
  cardsBorders[i].addEventListener("click", (element) => {
    let src = element.currentTarget.children[0].src;
    openExtendedPictureOverlay(src);
  });

  cardsBorders[i].addEventListener("mouseenter", displayAnimatedBorder);
  cardsBorders[i].addEventListener("mouseleave", closeAnimatedBorder);
}

function fCardRotate(ev) {
  this.style.transform = `perspective(2000px) rotatey(${(ev.offsetX - this.offsetWidth / 2) / 6}deg)
      rotatex(${((ev.offsetY - this.offsetHeight / 2) / 6) * -1}deg)`;
}

function fCardDefault() {
  this.style.transform = ``;
}

function displayAnimatedBorder() {
  this.setAttribute(
    "style",
    "border: 2px solid; border-image: conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) 1;"
  );
}

function closeAnimatedBorder() {
  this.setAttribute("style", "border: 0;");
}

function openExtendedPictureOverlay(imageSrc) {
  popupOverlay.style.display = "block";
  popupPicture.setAttribute("src", imageSrc);
}

function exitExtendedPictureOverlay() {
  popupOverlay.style.display = "none";
}
