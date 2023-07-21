function game () {
  //Set counters for player and computer
  let playerScore = 0
  let computerScore = 0
  // Create your function play function
  function play() {
  // first add an event listener to to the button in intro check
  // to see if the button was clicked and if so change intr class to fade out and fadein the match class
  let intro = document.querySelector(".intro")
  let introBtn = document.querySelector(".intro button")
  let match = document.querySelector(".match")
  introBtn.addEventListener("click", function () {
    intro.classList.add("fadeOut");
    match.classList.add("fadeIn");
  });

  //Extract computer picks
  let computerOptions = ['rock', 'paper', 'scissors'];
  let computerRandom = Math.floor(Math.random() * 3);
  // Will return values such as 0,1,2 
  let computerChoice = computerOptions[computerRandom];
  let buttons = document.querySelectorAll(".option button")
  // Add an event listener for each button
  buttons.forEach( button => {
    button.addEventListener("click", function () {
      //Extract user picks
      let userChoice = button.textContent;
      //Extract computer picks
      let computerOptions = ['rock', 'paper', 'scissors'];
      let computerRandom = Math.floor(Math.random() * 3); // Will return values such as 0,1,2 
      let computerChoice = computerOptions[computerRandom];
      //update images
      let playerHand = document.querySelector(".player-hand");
      let computerHand = document.querySelector(".computer-hand");
      playerHand.src  = `./images/${button.textContent}.png`;
      computerHand.src = `./images/${computerChoice}.png`;
      //Call the compare function

    })
  })
  }
  function compare(Player, Computer){
    let winner = document.querySelector(".winner h1");
    if (Player === Computer) {
      winner.textContent = "It is a draw"

    }
    if (Player === 'rock' && Computer === 'scissors') {
      winner.textContent = "Player wins";
      
    }else {
      winner.textContent = "Computer wins";
    }
    if (Player === "scissors"  && Computer === 'Paper') {
      winner.textContent = "Player wins";
    }else {
      winner.textContent = Computer

    }

  }
  // Call the inner functions
  play();
}

// Call the outer functions

game();
