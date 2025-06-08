let headingText = document.getElementById("title");
const drakeBtn = document.getElementById("changeDrakeBtn");
const kendrickBtn = document.getElementById("clickThisBtn");
let drakeImg = document.getElementById("drake_img");
let kendrickImg = document.getElementById("kendrick_img");

let isDrakeOhHellNah = true;
let kendrickVisible = true;


function changeText(){
    const userInput = prompt("Change the heading text: ");
    if(userInput === null || userInput === ""){
        headingText.textContent = 'null';
    }
    else{
        headingText.textContent = userInput;
    }
}

function changeFontSize(){
    const fontSize = prompt("Change the font size of the text: ");
    if(fontSize === null || isNaN(fontSize)){
        alert("Enter a valid font size!");
        return;
    }
    else{
        headingText.style.fontSize = fontSize + "px";
    }
}

drakeBtn.addEventListener("click", changeDrake);
kendrickBtn.addEventListener("click", clickedSusBtn);

function changeDrake(){
    // Toggles flip of images on clicks.
    isDrakeOhHellNah = !isDrakeOhHellNah;

    if(isDrakeOhHellNah){
        // Drake changes to oh yeah.
        drakeImg.src = 'assets/drake_oh_yeah.png';
    }
    else{
        // Drake reverts back to oh hell nah.
        drakeImg.src = 'assets/drake_hell_nah.png';
    }
}

function clickedSusBtn(){
    kendrickVisible = !kendrickVisible;

    if(kendrickVisible){
        kendrickImg.style.display = "block";
        kendrickBtn.textContent = "Unjumpscare";
    }
    else{
        kendrickImg.style.display = "none";
        kendrickBtn.textContent = "Click this button";
    }
}
