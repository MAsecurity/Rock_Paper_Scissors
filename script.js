// Collect random input from computer and intepret them into Rock, Paper or Scissors 
let computerChoice = () => {
  let calcComputerChoice = Math.floor(Math.random() * 3);
  // extract random values ranging from 0 , 1, 2
  // use switch operators to assign 0 to rock , 1 to scissors and so on.
  switch(calcComputerChoice) {
    case 0:
      return "rock"
      break;
    case 1:
      return "paper"
      break;
    
    case 2:
      return "scissors"
      break;

  }

};

// Extract user input
let playerChoice = () => {
  let choiceOfUser =  prompt("Enter either Rock, Paper, Scissors");
  let result = choiceOfUser.toLowerCase();
  return result;
};




