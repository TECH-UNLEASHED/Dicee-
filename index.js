var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var images1 = document.querySelectorAll("img")[0];

images1.setAttribute("src", randomImageSource);



var randomNumber2 = math.floor(Math.random() *6) + 1;

var randomNumberSource2 = "image/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomNumberSource2);

if(randomNumber1 > randomNumber2){
    document.querySelectorAll("h1").innerHTML = "Player 1 wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelectorAll("h1").innerHTML = "Player 2 wins!";
}
else{
    document.querySelectorAll("h1").innerHTML = "Draw!";
}