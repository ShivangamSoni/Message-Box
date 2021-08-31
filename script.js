const userMsg = document.getElementById("msg");
const userMsgType = document.getElementById("msg-type");
const generateBtn = document.getElementById("btn");
const main = document.querySelector("main");

generateBtn.addEventListener("click", displayMessage);

function displayMessage() {
    const box = document.createElement("div");
    box.setAttribute("class", "msgBox");

    switch(userMsgType.value){
        case "info":
            box.classList.add("msgBox--info");
            break;
        case "caution":
            box.classList.add("msgBox--caution");
            break;
        case "warning":
            box.classList.add("msgBox--warning");
            break;
    }

    main.appendChild(box);

    const msg = document.createElement("p");
    if(userMsg.value.trim() === ""){
        msg.textContent = "This is Test Message. You can Type your own Message in the Text Box above.";
    } else {
        msg.textContent = userMsg.value;
    }
    box.appendChild(msg);

    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "&times;";
    box.appendChild(closeBtn);

    closeBtn.onclick = () => box.parentNode.removeChild(box);
}