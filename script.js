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

function main(computer, player) {
  for (i = 0; i <= 5; i++) {

  }
}



// Make sure to implement counters so that you can find out who wins the rounds 




