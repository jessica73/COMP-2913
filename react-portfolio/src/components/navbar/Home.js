import React, { Component } from 'react';
import '../../App.css';

class Home extends Component {
    render() {
        return(
            <p className="App-intro">
                <table>
                    <tr>
                        <td>Rock Paper Scissors</td>
                        <td>A game. Play against computer. First to score 5 wins!</td>
                    </tr>
                    <tr>
                        <td>Countries List</td>
                        <td>View country flags. Available in French.</td>
                    </tr>
                    <tr>
                        <td>Stop Watch</td>
                        <td>A stop watch.</td>
                    </tr>
                    <tr>
                        <td>Todo List</td>
                        <td>Add and cross tasks off a list.</td>
                    </tr>
                </table>
            </p>
        );
    }
}

export default Home;