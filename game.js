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

  checkWinDraw(playerChoice, gameType) {
    var randomChoice = this.computer.takeTurn(gameType);
    this.computerChoice = randomChoice;
    console.log(randomChoice, "computer");
    console.log(playerChoice, "human");
    if (this.winConditions[this.computerChoice].includes(this.playerChoice)) {
      this.computer.scoreCounter();
      return console.log(randomChoice, "I\'m sorry, Dave. I can\'t let you do that.")
    } else if (this.computerChoice === this.playerChoice){
      return console.log(randomChoice, "This game is a draw!")
    } else {
      this.human.scoreCounter();
      return console.log(randomChoice, "Dave opened the pod bay doors!")
    }
  }

  }
