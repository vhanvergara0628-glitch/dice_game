const one = document.querySelector("#one");
const two = document.querySelector("#two");
const button = document.querySelector("#button");
const head = document.querySelector("h1");
const arr = ["photo/1.png", "photo/2.png", "photo/3.png", "photo/4.png", "photo/5.png", "photo/6.png"];
function random(){
    var playerOne = (arr[Math.floor(Math.random()*6)]) ;
    var playerTwo = (arr[Math.floor(Math.random()*6)]);
    one.src = playerOne;
    two.src = playerTwo;

    if(playerOne > playerTwo){
        head.innerHTML = "Player One Wins!!";
    }
    else if(playerOne === playerTwo){
          head.innerHTML = "It's a tie!";
    }

    else{   
         head.innerHTML = "Player Two Wins!!";
    }
    
    }

        