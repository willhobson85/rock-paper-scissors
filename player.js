class Player {
  constructor(player) {
    this.score = 0;
    this.choice = player.choice;
  }

  takeTurnClassic(choiceId) {
    this.choice = choiceId
  }

  takeTurnAdvanced(choiceId) {
    this.choice = choiceId;
  }

};
