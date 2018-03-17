import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import imgRock from './img/rock.jpg';
import imgPaper from './img/paper.jpg';
import imgScissors from './img/scissors.png';

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      outcome: '',
      outcomeColor: 'black',
      playerSelection: '',
      playerScore: 0,
      computerSelection: '',
      computerScore: 0
    }

    this.handlePlayerSelection = this.handlePlayerSelection.bind(this);
    this.handleResetGame = this.handleResetGame.bind(this);
  }

  convertSelection(selectionNum){
    let selection;

    if (selectionNum === ROCK) {
      selection = "Rock";
    } else if (selectionNum === PAPER) {
      selection = "Paper";
    } else if (selectionNum === SCISSORS) {
      selection = "Scissors";
    }

    return selection;
  }

  handlePlayerSelection(playerSelection){
    //console.log(playerSelection, this.convertSelection(playerSelection));
    
    let computerSelection = Math.floor(Math.random() * 3) + 1;
    //console.log(computerSelection, this.convertSelection(computerSelection));

    let playerSelectionName = this.convertSelection(playerSelection);
    let computerSelectionName = this.convertSelection(computerSelection);

    if (playerSelection === computerSelection) {
      //console.log("draw");
      this.setState({
        outcome: 'DRAW',
        outcomeColor: 'black',
        playerSelection: playerSelectionName,
        computerSelection: computerSelectionName
      });
    } else if (
      (playerSelection === ROCK && computerSelection === SCISSORS) 
      || (playerSelection === PAPER && computerSelection === ROCK) 
      || (playerSelection === SCISSORS && computerSelection === PAPER)) {
      //console.log("player wins: " + playerSelectionName + " beats " + computerSelectionName");
      this.setState({
        outcome: 'PLAYER WINS',
        outcomeColor: 'green',
        playerSelection: playerSelectionName,
        computerSelection: computerSelectionName,
        playerScore: this.state.playerScore + 1
      });
    } else {
      //console.log("computer wins: " + computerSelectionName + " beats " + playerSelectionName);
      this.setState({
        outcome: 'COMPUTER WINS',
        outcomeColor: 'red',
        playerSelection: playerSelectionName,
        computerSelection: computerSelectionName,
        computerScore: this.state.computerScore + 1
      });
    }
  }

  handleResetGame(){
   // console.log("reset");
    this.setState({
      outcome: '',
      outcomeColor: 'black',
      playerSelection: '',
      playerScore: 0,
      computerSelection: '',
      computerScore: 0
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Rock! Paper! Scissors!</h1>
        </header>
        <br />
        <button onClick={this.handleResetGame}>Reset Game</button>
        <br />
        <h2>Pick one:</h2>
        <p className="App-intro">
          <img src={imgRock} className="optionImage" alt="rock" onClick={() => this.handlePlayerSelection(1)} />
          <img src={imgPaper} className="optionImage" alt="paper" onClick={() => this.handlePlayerSelection(2)} />
          <img src={imgScissors} className="optionImage" alt="scissors" onClick={() => this.handlePlayerSelection(3)} />
        </p>
        <h2>Player ({this.state.playerSelection}) VS Computer ({this.state.computerSelection})</h2>
        <h2 style={{ color: this.state.outcomeColor }}>{this.state.outcome}</h2>
        <h2>Score Board</h2>
        <table align="center">
          <thead>          
            <tr>
              <th>Player</th>
              <th>Computer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.playerScore}</td>
              <td>{this.state.computerScore}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
