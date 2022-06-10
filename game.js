class Game {
  constructor() {
    this.human = new Player('human');
    this.computer = new Player('machine');
    this.gameType;
    this.playerChoice;
    this.computerChoice;
    this.winConditions = {
      rock: ['scissors', 'lizard'],
      paper: ['rock', 'spock'],
      scissors:['paper', 'lizard'],
      lizard: ['spock', 'paper'],
      spock: ['rock', 'scissors']
    }
  }
  //
  // pickGame() {
  //
  // }
  //
  checkWinDraw(playerChoice) {
    var randomChoice = newRound.computer.takeTurn(gameType);
    if (newRound.winConditions[randomChoice][i].includes(playerChoice)) {
      return console.log(randomChoice, "I\'m sorry, Dave. I can\'t let you do that.")
    } else if (newRound.winConditions[playerChoice][i].includes(randomChoice)) {
      return console.log(randomChoice, "Dave opened the pod bay doors!")
    } else {
      return console.log(randomChoice, "This game is a draw!")
    }
  }
  //
  // drawGame() {
  //
  // }
  //
  // resetGame() {
  //
  // }
  }
