// Global Variables
var newRound = new Game();

// Query Selectors
var gameTypesClass = document.querySelector('.game-types');
var classicGameBox = document.querySelector('.classic-game');
var advancedGameBox = document.querySelector('.advanced-game');
var fighterImageBox = document.querySelector('.fighter-choices');
var titleText = document.querySelector('.title');
var choseText = document.querySelector('.chose-text');
var rockFighter = document.querySelector('#rock');
var paperFighter = document.querySelector('#paper');
var scissorsFighter = document.querySelector('#scissors');
var advancedFighterImages = document.querySelector('.advanced-fighters');
var lizardFighter = document.querySelector('#lizard');
var spockFighter = document.querySelector('#spock');
var gameChange = document.querySelector('.change-game');

// Event Listeners
gameTypesClass.addEventListener('click', startGame);
gameChange.addEventListener('click', mainMenu);
fighterImageBox.addEventListener("click", function(e){
  if (e.target.classList.contains("rock")) {
    newRound.playerChoice = "rock";
    console.log(newRound.playerChoice, "player choice rock")
    newRound.checkWinDraw(newRound.playerChoice, newRound.gameType);
  }
  if (e.target.classList.contains("paper")) {
    newRound.playerChoice = "paper";
    newRound.checkWinDraw(newRound.playerChoice, newRound.gameType);
  }
  if (e.target.classList.contains("scissors")) {
    newRound.playerChoice = "scissors";
    newRound.checkWinDraw(newRound.playerChoice, newRound.gameType);
  }
});
advancedFighterImages.addEventListener("click", function(e){
  if (e.target.classList.contains("lizard")) {
    newRound.playerChoice = "lizard";
    newRound.checkWinDraw(newRound.playerChoice, newRound.gameType);
  }
  if (e.target.classList.contains("spock")) {
    newRound.playerChoice = "spock";
    newRound.checkWinDraw(newRound.playerChoice, newRound.gameType);
  }
});


// Functions

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function startGame(event) {
  hide(titleText);
  hide(classicGameBox);
  hide(advancedGameBox);
  show(choseText);
  show(fighterImageBox);
  show(gameChange);
  if (event.target.parentElement.id === "classic") {
    newRound.gameType = "classic";
    hide(advancedFighterImages);
    hide(lizardFighter);
    hide(spockFighter);
  } else {
    show(advancedFighterImages);
    show(lizardFighter);
    show(spockFighter);
    newRound.gameType = "advanced";
  }
}

function mainMenu() {
  newRound.gameType = "classic";
  show(titleText);
  show(classicGameBox);
  show(advancedGameBox);
  hide(choseText);
  hide(fighterImageBox);
  hide(advancedFighterImages);
  hide(lizardFighter);
  hide(spockFighter);
  hide(gameChange);
}

//
// resultsScreen() {
//
// }
//
// resetGame() {
//
// }
