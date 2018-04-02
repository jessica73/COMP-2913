import React, { Component } from 'react';

class DayForecast extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.day}</td>
                <td>{this.props.date}</td>
                <td>{this.props.high}&deg;C</td>
                <td>{this.props.low}&deg;C</td>
                <td>{this.props.forecast}</td>
                <td><img src={"http://l.yimg.com/a/i/us/we/52/" + this.props.forecastCode + ".gif"} alt={this.props.forecast} /></td>
            </tr>
        );
    }
}

export default DayForecast;