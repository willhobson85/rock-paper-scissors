// Global Variables
var newRound = new Game();

// Query Selectors
var gameChange = document.querySelector('.change-game');
var titleText = document.querySelector('.title');
var classicGameBox = document.querySelector('.classic-game');
var fighterImageBox = document.querySelector('.fighter-choices');
var advancedGameBox = document.querySelector('.advanced-game');
var advancedFighterImages = document.querySelector('.advanced-fighters');
var choseText = document.querySelector('.chose-text');
var rockFighter = document.querySelector('#rock');
var paperFighter = document.querySelector('#paper');
var scissorsFighter = document.querySelector('#scissors');
var lizardFighter = document.querySelector('#lizard');
var spockFighter = document.querySelector('#spock');
var endGameScreen = document.querySelector('.win-screen');
var winnerText = document.querySelector('.winner-text');
var whoWins = document.querySelector('.winner');
var playerScore = document.querySelector('#player1-wins');
var computerScore = document.querySelector('#computer-wins');
var playerChampion = document.querySelector('.player-fighter');
var computerChampion = document.querySelector('.computer-fighter');

// Event Listeners

classicGameBox.addEventListener('click', setUpClassic);
advancedGameBox.addEventListener('click', setUpAdvanced);
gameChange.addEventListener('click', mainMenu);
fighterImageBox.addEventListener("click", function(e){
  if (e.target.classList.contains("rock")) {
    newRound.playerChoice = "rock";
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

function show(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('hidden');
  }
};

function hide(elements) {
  for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add('hidden');
    }
};

function setUpClassic() {
  newRound.gameType = "classic";
  startGame();
};

function setUpAdvanced() {
  newRound.gameType = "advanced";
  startGame();
};

function startGame() {
  hide([titleText, classicGameBox, advancedGameBox]);
  show([choseText, fighterImageBox, gameChange]);
  if (newRound.gameType === "classic") {
    hide([advancedFighterImages, lizardFighter, spockFighter]);
  } else {
    show([advancedFighterImages, lizardFighter, spockFighter]);
  }
};

function humanChampionImage() {
  if (newRound.playerChoice === "rock") {
    playerChampion.innerHTML = '<img class="fighter rock" id ="rock" src="./assets/therock.jpeg" alt="The Rock">'
  } else if (newRound.playerChoice === "paper") {
    playerChampion.innerHTML = '<img class="fighter paper" id="paper" src="./assets/paper.jpeg" alt="Toilet Paper with arms and smiley face">'
  } else if (newRound.playerChoice === "scissors") {
    playerChampion.innerHTML = '<img class="fighter scissors" id="scissors" src="./assets/Cutman.webp" alt="Mega Man\'s Villain Cut Man">'
  } else if (newRound.playerChoice === "lizard") {
    playerChampion.innerHTML = '<img class="fighter lizard" id="lizard" src="./assets/godzilla.jpeg" alt="Godzilla shooting energy beam into sky">'
  } else if (newRound.playerChoice === "spock") {
    playerChampion.innerHTML = '<img class="fighter spock" id="spock" src="./assets/spock.webp" alt="Spock">'
  }
};

function computerChampionImage() {
  if (newRound.computerChoice === "rock") {
    computerChampion.innerHTML = '<img class="fighter rock" id ="rock" src="./assets/therock.jpeg" alt="The Rock">'
  } else if (newRound.computerChoice === "paper") {
    computerChampion.innerHTML = '<img class="fighter paper" id="paper" src="./assets/paper.jpeg" alt="Toilet Paper with arms and smiley face">'
  } else if (newRound.computerChoice === "scissors") {
    computerChampion.innerHTML = '<img class="fighter scissors" id="scissors" src="./assets/Cutman.webp" alt="Mega Man\'s Villain Cut Man">'
  } else if (newRound.computerChoice === "lizard") {
    computerChampion.innerHTML = '<img class="fighter lizard" id="lizard" src="./assets/godzilla.jpeg" alt="Godzilla shooting energy beam into sky">'
  } else if (newRound.computerChoice === "spock") {
    computerChampion.innerHTML = '<img class="fighter spock" id="spock" src="./assets/spock.webp" alt="Spock">'
  }
};

function resultsScreen() {
  hide([choseText, fighterImageBox, advancedFighterImages, lizardFighter, spockFighter, gameChange]);
  show([winnerText, endGameScreen]);
  humanChampionImage();
  computerChampionImage();
  setTimeout(resetGame, 3000);
};

function mainMenu() {
  newRound.gameType = "classic";
  show([titleText, classicGameBox, advancedGameBox]);
  hide([choseText, fighterImageBox, advancedFighterImages, lizardFighter, spockFighter, gameChange]);
};

function resetGame() {
 hide([winnerText, endGameScreen]);
 startGame();
};
