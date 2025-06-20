let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png"); // here we need to write the image path inside backticks;
document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}else if(randomNumber1> randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player1 Wins!";
}else{
    document.querySelector("h1").innerHTML = "Player2 Wins! 🚩";
}