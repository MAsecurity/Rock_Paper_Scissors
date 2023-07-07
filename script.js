//Rules of Rock Paper and Scissors are that Rock beats Scissors, Scissors beats Paper , Paper beats Rock

// First get computer choice using Math.random function.
let computerChoice = () => {
  let calcRandom = Math.floor(Math.random() * 3);
  // returns values 0 ,1 ,2 which can later be intepreted as Rock, Paper , Scissors using switch statements
  let result;
  switch(calcRandom) {
    case 0:
      return result = "rock";
      break;
    
    case 1:
      return result = "paper";
      break;

    case 2:
      return result = "scissors";
      break;
    
    
  }


};
// Get input from user but make them not case sensitive by converting inputs all to lowercase
let playerChoice = () => {
  let userSelection = prompt("Enter either Rock, Paper or Scissors: ");
  let result = userSelection.toLowerCase();
  return result;
};


// Write the main function for the game and include a for loop which ranges to 5 to keep the game going for 5 rounds

function play(player, computer) {
// Make sure to implement counters so that you can find out who wins the rounds 
  let computerWins = 0;
  let playerWins = 0;
  for (i = 0; i <= 5; i++) {
    if (player === computer) {
      alert("Draw\n" + "Current score \n"+ "computerWins: " + computerWins + "\nplayerWins: " + playerWins);

    }else if(player === "rock" && computer === "paper") {
      alert("Computer wins - paper beats rock\n" + "Current score \n"+ "computerWins: " + computerWins++ + "\nplayerWins: " + playerWins);

    }else if(player === "paper" && computer === "rock") {
      alert("Player wins - paper beats rock\n" + "Current score \n"+ "computerWins: " + computerWins + "\nplayerWins: " + playerWins++);

    }else if(player === "rock" && computer === "scissors") {
      alert("Player wins - rock beats scissors \n" + "Current score \n"+ "computerWins: " + computerWins + "\nplayerWins: " + playerWins++);

    }else if(player === "scissors" && computer === "rock") {
      alert("Computer wins - rock beats scissors \n" + "Current score \n"+ "computerWins: " + computerWins++ + "\nplayerWins: " + playerWins);

    }else if(player === "scissors" && computer === "Paper") {
      alert("Player wins - scissors beats paper \n" + "Current score \n"+ "computerWins: " + computerWins + "\nplayerWins: " + playerWins++);

    }else if(player === "paper" && computer === "scissors") {
      alert("Computer wins - scissors beats paper \n" + "Current score \n"+ "computerWins: " + computerWins + "\nplayerWins: " + playerWins++);

    }
    // Will loop through the function again for 5 times and then will break out of loop
    return play(playerChoice(), computerChoice());


  }
  
// Outside the play function create a new function which calculates the scores out of the 5 rounds and declares the winner and call it inside of this function
  game(playerWins, computerWins);
  
}

function game(playerscore, computerscore){
  if (computerscore > playerscore){
    alert("Computer won the game");
  }else if(computerscore < playerscore){
    alert ("Player won the game");
  }else {
    alert("Draw");
  }

}


// Write the function which prompts the user if he wishes to play or not 

function wantToPlay() {

  let chooseToPlay = prompt("Type y if you would like to play");
  let choiceToPlay = chooseToPlay.toLowerCase();
  if (choiceToPlay === "y") {
    return play(playerChoice(), computerChoice());

  }else if (choiceToPlay === null || choiceToPlay === "" || choiceToPlay === "null"){
    alert("you did not enter anything");
  }else if(choiceToPlay != "y") {
    alert("You did not enter y");
  }


}

wantToPlay();




