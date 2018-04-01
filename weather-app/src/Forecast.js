import React, { Component } from 'react';
import axios from 'axios';

class Forecast extends Component {
    constructor(props) {
        super(props);

        this.state = {
            forecast: []
        }
    }

    componentWillMount() {
        axios.get(`https://query.yahooapis.com/v1/public/yql?format=json&q=select * from weather.forecast where u="c"
            and woeid in (select woeid from geo.places(1) where text="${this.props.location}")`).then((response) => {
            //console.log(response.data.query.results.channel.item.forecast);
            this.setState({
                forecast: response.data.query.results.channel.item.forecast
            });
        })
    }

    render() {
        return (
            <div>
                {this.state.forecast.map((f) => {
                    return (
                        <p>{f.code} - {f.date} - {f.day} - {f.high} - {f.low} - {f.text}</p>
                    );
                })}
            </div>
        );
    }
}

export default Forecast;