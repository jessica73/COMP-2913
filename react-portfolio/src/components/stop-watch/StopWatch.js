import React from 'react';

class StopWatch extends React.Component {
    constructor(props) {
        super(props);

        //initialize start stopwatch from 0
        this.state = {
            secondsElapsed: 0,
            isPaused: false //start running timer when component loads
        };

        this.toggleTimer = this.toggleTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }
    
    componentDidMount() {
        //increment stopwatch every second
        setInterval(() => {
            this.setState({
                //if stopwatch is paused, don't increment
                secondsElapsed: this.state.isPaused ? this.state.secondsElapsed : this.state.secondsElapsed + 1
            });
        }, 1000);
    }

    //flip the isPaused state - if paused, start; if running, pause
    toggleTimer() {
        this.setState({
            isPaused: !this.state.isPaused
        })
    }

    //reset the timer
    resetTimer() {
        this.setState({
            secondsElapsed: 0,
            isPaused: true //don't automatically start running when reset
        })
    }

    //show secondsElapsed in HH:MM:SS format (warning: only works up to 24 hours)
    render() {
        return(
            <div>
                <h1 style={{ color: this.state.isPaused ? "red": "black" }}>
                    {new Date((new Date(null)).setSeconds(this.state.secondsElapsed)).toISOString().substr(11,8)}
                </h1>
                <button onClick={this.toggleTimer}>{this.state.isPaused ? "Start" : "Stop"}</button>
                <button onClick={this.resetTimer}>Reset</button>
            </div>
        );
    }
}

export default StopWatch