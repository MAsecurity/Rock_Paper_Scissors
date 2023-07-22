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
        playerHand.src  = `./images/${userChoice}.png`;
        computerHand.src = `./images/${computerChoice}.png`;
        //Call the compare function
        compare(userChoice,computerChoice);
        //Call the gameover function which will check if either computer or player wins
        gameOver(playerScore,computerScore);

      

    })
  })

  }

  function updateScoreBoard () {
    let score = document.querySelector(".score button");
    score.textContent = `${playerScore}:${computerScore}`;
  }
  function compare(Player, Computer){
    let winner = document.querySelector(".winner h1");
    if(Player === Computer) {
      winner.textContent = "It's a draw";
    }else if (Player === 'rock' && Computer === 'scissors') {
      winner.textContent = `Player wins ${Player} beats ${Computer}`;
      playerScore++;
      updateScoreBoard();
    }else if (Player === 'paper' && Computer === 'rock') {
      winner.textContent = `Player wins ${Player} beats ${Computer}`;
      playerScore++;
      updateScoreBoard();
    }else if (Player === 'scissors' && Computer === 'paper') {
      winner.textContent = `Player wins ${Player} beats ${Computer}`;
      playerScore++;
      updateScoreBoard();
    }else {
      winner.textContent = `Computer wins ${Computer} beats ${Player}`;
      computerScore++;
      updateScoreBoard();

    }
  }

  function gameOver(pScore, cScore) {
    let match = document.querySelector(".match");
    let winner = document.querySelector(".winner h1");
    let gameover = document.querySelector(".gameover");
    let results = document.querySelector(".gameover h1");
    let gameOverBtn = document.querySelector(".gameover button");
    if (pScore > 4) {
      match.classList.remove("fadeIn");
      gameover.classList.add("fadeIn");
      results.textContent = "Player won the game";
    }else if (cScore > 4) {
      match.classList.remove("fadeIn");
      gameover.classList.add("fadeIn");
      results.textContent = "Computer won the game";
      
    }
    //Reset values back to default if user clicks play again
    gameOverBtn.addEventListener("click", function () {
      playerScore = 0 ;
      computerScore = 0;
      updateScoreBoard();
      let playerHand = document.querySelector(".player-hand");
      let computerHand = document.querySelector(".computer-hand");
      playerHand.src  = `./images/rock.png`;
      computerHand.src = `./images/rock.png`;
      winner.textContent =  "Pick a choice";
      match.classList.add("fadeIn");
      gameover.classList.remove("fadeIn");
      
      
    })


  } 
  // Call the inner function
  play();
}
// Call the outer functions
game();




