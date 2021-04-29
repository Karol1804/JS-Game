// basic variables
var totalScore,roundScore,activePlayer,dice,playGame;


// zeroing and removing cubes 
function resetAll(){
    totalScore = [0,0]
    roundScore = 0;
    activePlayer = 0;
    playGame = true;

    // html text players
    document.getElementById("Player0").textContent = "Skóre 1. hráča";
    document.getElementById("Player1").textContent = "Skóre 2. hráča";
  
    document.getElementById("totalScore-0").textContent = 0;
    document.getElementById("totalScore-1").textContent = 0;

    document.getElementById("curentScore-0").textContent = 0;
    document.getElementById("curentScore-1").textContent = 0;

    // hiding of cube
   document.querySelector(".diceImage").style.display = "none";
   document.querySelector(".message").style.display = "none";
 
    //setting up the first player in every new game
    document.querySelector(".totalScore0").classList.add("active");
    document.querySelector(".totalScore1").classList.remove("active");

}
resetAll();

// changing the image to a random number
document.querySelector(".rollDice").addEventListener("click",function(){
    if(playGame){

    // 1.generating a number from 1 to 6
    dice = Math.ceil( Math.random()*6);

    // 2.display the correct image
    var diceElement = document.querySelector(".diceImage");
    diceElement.src ="images/Kocka" + dice +".jpg";
    diceElement.style.display = "block";

    // 3.reading numbers from cubes
    if(dice !== 1){
        roundScore = roundScore + dice;
        document.getElementById("curentScore-" + activePlayer).textContent = roundScore;
        document.querySelector(".message").style.display = "none"
    }
    else{
        document.querySelector(".message").style.display = "block";
        nextPlayer();
       
  }  
 }
});

// function to change player
function nextPlayer(){
    if(activePlayer === 0){
        activePlayer = 1;
        
    }
    else{
        activePlayer = 0;
       
    }
    roundScore = 0;

    document.getElementById("curentScore-0").textContent = 0;
    document.getElementById("curentScore-1").textContent = 0;

    document.querySelector(".diceImage").style.display = "none";

    document.querySelector(".totalScore0").classList.toggle("active");
    document.querySelector(".totalScore1").classList.toggle("active");
    

}

// hold score
document.querySelector(".holdScore").addEventListener("click",function(){
    if(playGame){
    totalScore[activePlayer] =  totalScore[activePlayer] + roundScore;
    document.querySelector("#totalScore-" + activePlayer).textContent = totalScore[activePlayer];

    if(totalScore[activePlayer] >= 100){
        document.querySelector("#Player" + activePlayer).textContent = "Hurááá,Víťaz";
        document.querySelector(".diceImage").style.display = "none";
        playGame = false;
    }
    else{
        nextPlayer();
    }
}
});

// new game
document.querySelector(".newGame").addEventListener("click",resetAll);



