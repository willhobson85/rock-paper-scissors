class Player {
  constructor(player) {
    this.score = 0;
    this.choice = player.choice;
  }

  takeTurn(gameType) {
    if (newRound.gameType === 'classic') {
      var weapons = ['rock', 'paper', 'scissors'];
      return weapons[Math.floor(Math.random() * weapons.length)];
    } else {
      var weapons = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      return weapons[Math.floor(Math.random() * weapons.length)];
    }
  }

  scoreCounter() {
    this.score++;
  }
};
