// DOM elements
let headingText = document.getElementById("title");
const drakeBtn = document.getElementById("changeDrakeBtn");
const kendrickBtn = document.getElementById("clickThisBtn");
let drakeImg = document.getElementById("drake_img");
let kendrickImg = document.getElementById("kendrick_img");
const randomSongBtn = document.getElementById("random-song");
let randomSongCover = document.getElementById("random-song-cover");
let randomTxt = document.getElementById("random-txt");
let rapperDescription = document.getElementById("rapper-description");

// Songs array used to select a random song.
const songs = ["NOKIA - Drake", "Not Like Us - Kendrick",
    "Headlines - Drake", "HUMBLE - Kendrick",
    "God's Plan - Drake", "TV Off - Kendrick"
]

// Object Instantiation
const drake = {
    firstName: "Aubrey",
    lastName: "Graham",
    age: 38,
    displayDescription : function(){
        return "This is " + this.firstName + " " + this.lastName + "<br> Age: " + this.age;
    }
};

const kendrick = {
    firstName: "Kendrick",
    lastName: "Duckworth",
    age: 37,
    displayDescription : function(){
        return "This is " + this.firstName + " " + this.lastName + "<br> Age: " + this.age;
    }
};

// Flags
let isDrakeOhHellNah = true;
let kendrickVisible = true;

randomSongBtn.addEventListener("click", displayRandomSongAndDisplayCover);

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

    rapperDescription.innerHTML = drake.displayDescription();

    if(isDrakeOhHellNah){
        // Drake changes to oh yeah.
        drakeImg.src = 'assets/drake_oh_yeah.png';
        drakeBtn.textContent = "Oh Hell Nah";
    }
    else{
        // Drake reverts back to oh hell nah.
        drakeImg.src = 'assets/drake_hell_nah.png';
        drakeBtn.textContent = "Hell Yeah";
    }
}

function clickedSusBtn(){
    kendrickVisible = !kendrickVisible;

    if(kendrickVisible){
        kendrickImg.style.display = "block";
        kendrickBtn.textContent = "Unjumpscare";
        rapperDescription.innerHTML = kendrick.displayDescription();
    }
    else{
        kendrickImg.style.display = "none";
        kendrickBtn.textContent = "Click this button";
        rapperName.textContent = "";
    }
}

function displayRandomSongAndDisplayCover(){
    // Choose a random song from the songs array.
    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];
    randomTxt.textContent = randomSong;
    randomSongCover.style.display = "block";
    // Display the cover for the randomly chosen song.
    switch(randomIndex){
        case 0:
            // Change image of random song cover, also display the song cover.
            randomSongCover.src = 'assets/somesexysongs4u_cover.png';
            break;
        case 1:
            randomSongCover.src = 'assets/nlu_cover.png';
            break;
        case 2:
            randomSongCover.src = 'assets/take_care_cover.jpg';
            break;
        case 3:
            randomSongCover.src = 'assets/damn_cover.jpg';
            break;
        case 4:
            randomSongCover.src = 'assets/scorpion_cover.jpg';
            break;
        case 5:
            randomSongCover.src = 'assets/gnx_cover.png';
            break;
        default:
            break;
    }
}
