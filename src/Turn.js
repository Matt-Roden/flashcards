const Card = require('../src/Card');

class Turn {
  constructor(guess, card) {
    this.userGuess = guess;
    this.card = card;
  }
  returnGuess() {
    return this.userGuess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    if(this.userGuess === this.card.correctAnswer) {
      return true
    }
  }
  giveFeedback() {
    if(this.evaluateGuess()) {
      return "Correct!";
    } else {
      return "Incorrect";
    }
  }
}
module.exports = Turn;