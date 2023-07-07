// Collect random input from computer and intepret them into Rock, Paper or Scissors 
let getComputerChoice = () => {
  let calcComputerChoice = Math.floor(Math.random() * 3);
  // extract random values ranging from 0 , 1, 2
  // use switch operators to assign 0 to rock , 1 to scissors and so on.
  switch(calcComputerChoice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    
    case 2:
      return "scissors";
      break;

  }

};

// Extract user input
let getPlayerChoice = () => {
  let validatedInput = false;
  while (validatedInput === false) {
    let choiceOfUser = prompt("Enter either Rock, Paper, Scissors");
    let result = choiceOfUser.toLowerCase();
    if (result === null) {
      continue;
    }else if (result === "rock" || result === "paper" || result === "scissors"){
    // Convert input into lowercase 
      validatedInput = true;
      return result;
    }
    }
    };



// create a function which checks for has won against who

function checkWinner(Player, Computer){

// return values such as player and computer so they can be processed by playRound
  if (Player === Computer) {
    return  "Draw";
    }else if ( Player === "rock" && Computer === "scissors") {
      return "Player";
    }else if (Player === "scissors" && Computer === "paper"){
      return "Player";
    }else if (Player === "paper" && Computer === "rock"){
      return "Player";
    }else{
      return "Computer";
    }

  }
// create a function which calls the winner 

function playRound(Player, Computer) {
  const result = checkWinner(Player, Computer);

  if (result === "Draw"){
    alert("Draw");
  }else if(result === "Player"){
    alert(`You have won ${Player} beats ${Computer}`);

  }else {
    alert(`You have lost ${Computer} beats ${Player}`);

  }




}



// Create the main function for the game

function game(){
  for (let i = 0; i < 5; i++) {
    playRound(getPlayerChoice(), getComputerChoice());

    

  }


}


// Call the main function 
game()
