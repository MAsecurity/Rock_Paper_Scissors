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
      let computerRandom = Math.floor(Math.random() * 3);
      // Will return values such as 0,1,2 
      let computerChoice = computerOptions[computerRandom];
      console.log(`userChoice ${userChoice} computerChoice ${computerChoice}`);
      



    })
  })
  }
  function compare(Player, Computer){

  }
  // Call the inner functions
  play();
}

// Call the outer functions

game();
