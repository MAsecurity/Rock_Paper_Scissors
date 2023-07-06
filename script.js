// First get computer choice using Math.random function.
let computerChoice = () => {
  return Math.floor(Math.random() * 3);
  // returns values 0 ,1 ,2 which can later intepreted as Rock, Paper , Scissors

};
// Get input from user but make them not case sensitive by converting inputs all to lowercase
let playerChoice = () => {
  let userSelection = prompt("Enter either Rock, Paper or Scissors: ");
  let result = userSelection.toLowerCase();
  return result;
};
// Write the main function for the game and include a for loop which ranges to 5
// Begin comparing if user choice is rock and computer is 0 "rock"
// Make sure to intepret the random values as either rock, paper or scissors
// Example if (computerChoice is equal to 0 ) && (playerChoice is equal to "rock")
// { 
//   return "Both choices were rock"
// }




