import React, { Component } from 'react';
import axios from 'axios';

import LocationSelector from './LocationSelector';
import LocationForecast from './LocationForecast';

class WeatherForecast extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: '',
            forecast: []
        }

        this.handleLocationChange = this.handleLocationChange.bind(this);
    }

    handleLocationChange(location) {        
        if(!location) {
            this.setState({
                location: location,
                forecast: []
            });
        }
        else {
            axios.get(`https://query.yahooapis.com/v1/public/yql?format=json&q=select * from weather.forecast where u="c"
            and woeid in (select woeid from geo.places(1) where text="${location}")`).then((response) => {
                this.setState({
                    location: location,
                    forecast: response.data.query.results.channel.item.forecast
                });
            });
        }
    }

    render() {
        return (
            <div>                
                <LocationSelector 
                    onSelectLocation={this.handleLocationChange}
                />
                {
                    this.state.location === "" ?
                    "" :
                    <LocationForecast
                        forecast={this.state.forecast}
                    />
                }
            </div>
        );
    }
}

export default WeatherForecast;