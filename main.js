// Global Variables
var newRound = new Game();

// Query Selectors
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
classicGameBox.addEventListener('click', startClassic);
advancedGameBox.addEventListener('click', startAdvanced);
gameChange.addEventListener('click', mainMenu);

// Functions

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function startClassic() {
  hide(titleText);
  hide(classicGameBox);
  hide(advancedGameBox);
  show(choseText);
  show(fighterImageBox);
  show(gameChange);
}

function startAdvanced() {
  hide(titleText);
  hide(classicGameBox);
  hide(advancedGameBox);
  show(choseText);
  show(fighterImageBox);
  show(advancedFighterImages);
  show(lizardFighter);
  show(spockFighter);
  show(gameChange);
}

function mainMenu() {
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
