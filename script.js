










// // Collect random input from computer and intepret them into Rock, Paper or Scissors 
// let getComputerChoice = () => {
//   let calcComputerChoice = Math.floor(Math.random() * 3);
//   // extract random values ranging from 0 , 1, 2
//   // use switch operators to assign 0 to rock , 1 to scissors and so on.
//   switch(calcComputerChoice) {
//     case 0:
//       return "rock";
//       break;
//     case 1:
//       return "paper";
//       break;
    
//     case 2:
//       return "scissors";
//       break;

//   }

// };

// // Extract user input
// let getPlayerChoice = () => {
//   let validatedInput = false;
//   while (validatedInput === false) {
//     let choiceOfUser = prompt("Enter either Rock, Paper, Scissors");
//     let result = choiceOfUser.toLowerCase();
//     // Convert input into lowercase 
//     if (result === null) {
//       continue;
//     }else if (result === "rock" || result === "paper" || result === "scissors"){
//     // set validatedInput to true to break out of while loop
//       validatedInput = true;
//       return result;
//     }
//     }
//     };



// // create a function which checks for who has won against who

// function checkWinner(Player, Computer){

// // return values such as player and computer or draw depending on the outcome so they can be evaluated by the playRound function
//   if (Player === Computer) {
//     return  "Draw";
//     }else if ( Player === "rock" && Computer === "scissors") {
//       return "Player";
//     }else if (Player === "scissors" && Computer === "paper"){
//       return "Player";
//     }else if (Player === "paper" && Computer === "rock"){
//       return "Player";
//     }else{
//       return "Computer";
//     }

//   }
// // create a function which calls the checkwinner function and processes its return values and also return values to the main function (game)
// // so that the counters can be updated

// function playRound(Player, Computer) {
//   const result = checkWinner(Player, Computer);

//   if (result === "Draw"){
//     alert("Draw");
//     return "Draw"
//   }else if(result === "Player"){
//     alert(`You have won ${Player} beats ${Computer}`);
//     return "Player"

//   }else {
//     alert(`You have lost ${Computer} beats ${Player}`);
//     return "Computer"

//   }




// }

// // Create the main function for the game
// function game(){
//   // initalize the counters
//   let scoreOfPlayer = 0;
//   let scoreOfComputer = 0;
//   // create the for loop which will loop for 5 rounds
//   for (let i = 0; i < 5; i++) {
//     let result = playRound(getPlayerChoice(), getComputerChoice());
//     // process the return values in playRound and increment on the given situation 
//     if (result === "Player") {
//       scoreOfPlayer++;
//     }else if (result === "Computer"){
//       scoreOfComputer++;
//     }
//   }
//   //Outside the for loop declare who has won the game by using if statements and comparing which counter is greater
//   if (scoreOfComputer > scoreOfPlayer){
//     alert("Computer has won the game");
//   }else if (scoreOfPlayer > scoreOfComputer){
//     alert("Player has won the game");
//   }



// }

// // Call the main function 
// game()
