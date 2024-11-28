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