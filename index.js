let player1 = Math.floor(Math.random() * 6) + 1;
let player2 = Math.floor(Math.random() * 6) + 1;
let rng1 = "images/dice" + player1 + ".png";
let rng2 = "images/dice" + player2 + ".png";

document.querySelector(".img1").setAttribute("src", rng1);
document.querySelector(".img2").setAttribute("src", rng2);

if(player1 > player2)
    document.querySelector("h1").innerHTML = "🚩 Player 1 WINS!";

else if(player2 > player1)
    document.querySelector("h1").innerHTML = "Player 2 WINS! 🚩";

else
    document.querySelector("h1").innerHTML = "DRAW!";