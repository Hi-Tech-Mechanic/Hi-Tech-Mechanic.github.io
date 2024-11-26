const popupOverlay = document.getElementById("popup-overlay");
const popup = document.getElementById("popup");

function showPopup(){
    popupOverlay.style.display = "block";
}

function hidePopup(){
    popupOverlay.style.display = "none";
}

//popupOverlay.addEventListener("click", hidePopup);
// popup.addEventListener("click", (event) =&gt; event.stopPropagation());

const footerText = document.getElementById("dinamic-text");
const maxMessageCount = 12; 

let textArray = ["SEM_FAILCRITICALERRORS-0x0001", 
    "SEM_NOALIGNMENTFAULTEXCEPT-0x0004",
    "SEM_NOGPFAULTERRORBOX-0x0002",
    "_Post_equals_last_error_",
    "EXCEPTION_CONTINUE_EXECUTION-0xffffffff",
    "0xC1900101"];
let currentText = "";
let currentMessages = 0;

function setText(value){
    footerText.innerHTML = value;
}

async function updateText() {
    if(currentMessages < maxMessageCount){
        var random = Math.floor(Math.random() * textArray.length);
    
        currentMessages++;
        currentText += textArray[random] + "<br>";
        setText(currentText);
    }
    else{
        setText("");
        currentText -= "";
        currentMessages = 0;
    }
}

 setInterval(updateText, 200);