

// generates randomNumber between 1-6
let Player1Roll = Math.floor(Math.random() * 6) + 1; 
let Player2Roll = Math.floor(Math.random() * 6) + 1;

// grab Dice img elements
let Player1Die = document.querySelector("img.img1");
let Player2Die = document.querySelector("img.img2");


// everytime page is refreshed change leftDie and rightDie images to simulate a random die roll
Player1Die.src = "./images/dice"+Player1Roll+".png";
Player2Die.src = "./images/dice"+Player2Roll+".png";


let header = document.querySelector("h1"); // grab header element

// decide winner by comaparing rolls then updating HTML 
if(Player1Roll > Player2Roll) {
    header.innerHTML = "🚩Player1 Wins!";
} else if(Player2Roll > Player1Roll) {
    header.innerHTML = "Player2 Wins!🚩";
} else {
    header.innerHTML = "🏳️Tie!🏳️"
}