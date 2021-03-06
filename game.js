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
    if (this.winConditions[this.computerChoice].includes(this.playerChoice)) {
      this.computer.scoreCounter();
      whoWins.innerText = `HAL9000 wins!`;
      computerScore.innerText = `${this.computer.score} WINS;`
      resultsScreen();
      document.getElementById('audio-lose').play();
    } else if (this.computerChoice === this.playerChoice){
      whoWins.innerText = `This game is a draw!`;
      resultsScreen();
      document.getElementById('audio-draw').play();
    } else {
      this.human.scoreCounter();
      whoWins.innerText = `Dave opened the pod bay doors!`;
      playerScore.innerText = `${this.human.score} WINS`;
      resultsScreen();
      document.getElementById('audio-win').play();
    }
  }
}
