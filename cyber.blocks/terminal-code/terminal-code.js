const dependencies = [
  '"clean-webpack-plugin": "^4.0.0",',
  '"copy-webpack-plugin": "^12.0.2",',
  '"css-loader": "^7.1.2",',
  '"file-loader": "^6.2.0",',
  '"html-webpack-plugin": "^5.6.3",',
  '"mini-css-extract-plugin": "^2.9.2",',
  '"webpack": "^5.97.1",',
  '"webpack-cli": "^5.1.4",',
  '"webpack-dev-server": "^5.2.0"',
];

const terminalContent = document.getElementById("Portfolio website - terminal");
const terminal = document.getElementById("Terminal");
terminal.addEventListener("click", openTerminal);

let isOpened = false;

function openTerminal() {
  if (isOpened === false) {
    for (let i = 0; i < dependencies.length; i++) {
      let stroke = document.createElement("p");
      stroke.textContent = `${i + 1}. ` + dependencies[i];

      setTimeout(() => {
        terminalContent.appendChild(stroke);
      }, i * 100);
    }
  } else {
    for (let i = terminalContent.children.length - 1; i >= 0; i--) {
      setTimeout(() => {
        terminalContent.removeChild(terminalContent.children[i]);
      }, (terminalContent.children.length - i) * 100);
    }
  }
  console.log(terminalContent.children.length);
  isOpened = !isOpened;
}
