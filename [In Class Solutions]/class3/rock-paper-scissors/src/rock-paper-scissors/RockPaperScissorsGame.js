import React, { Component } from 'react';
import ScoreBoard from './ScoreBoard';
import PlayerChoice from './PlayerChoice';
import scissorsImage from '../assets/scissors.png';
import rockImage from '../assets/rock.png';
import paperImage from '../assets/paper.png';

function getComputerChoice() {
  const randomNumber = Math.random() * 100;
  const roundedNumber = Math.round(randomNumber);
  if (roundedNumber <= 33) {
    return 'paper';
  } else if (roundedNumber <= 67) {
    return 'rock';
  } else {
    return 'scissors';
  }
}

function getRockPaperScissorsWinner(playerChoice, computerChoice) {
  if ((playerChoice === 'scissors' && computerChoice === 'rock') ||
      (playerChoice === 'paper' && computerChoice === 'scissors') ||
      (playerChoice === 'rock' && computerChoice === 'paper')) {
    return 'computer';
  } else if ((playerChoice === 'scissors' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'rock' && computerChoice === 'scissors')) {
    return 'player';
  }
  return null;
}

class RockPaperScissorsGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerScore: 0,
      computerScore: 0
    };

    this.handleClickPlayerChoice = this.handleClickPlayerChoice.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
  }

  handleClickPlayerChoice(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = getRockPaperScissorsWinner(playerChoice, computerChoice);
    if (winner === 'player') {
          const computerScore = this.state.computerScore + 1;
          this.setState({ computerScore }, () => {
            if (this.state.computerScore >= 5) {
              return alert('computer wins!');
            }
          });
    } else if (winner === 'computer') {
          const playerScore = this.state.playerScore + 1;
          this.setState({ playerScore }, () => {
            if (this.state.playerScore >= 5) {
              return alert('player wins!');
            }
          });
    }
  }

  handleClickReset() {
    this.setState({ computerScore: 0, playerScore: 0 });
  }

  render() {
    return (
      <div>
        <ScoreBoard
          playerScore={this.state.playerScore}
          computerScore={this.state.computerScore}
        />
        <ul>
          <PlayerChoice
            imageSrc={scissorsImage}
            name='scissors'
            onClick={this.handleClickPlayerChoice}
          />
          <PlayerChoice
            imageSrc={paperImage}
            name='paper'
            onClick={this.handleClickPlayerChoice}
          />
          <PlayerChoice
            imageSrc={rockImage}
            name='rock'
            onClick={this.handleClickPlayerChoice}
          />
        </ul>
        <button onClick={this.handleClickReset}>Reset</button>
      </div>
    );
  }
}

export default RockPaperScissorsGame;
