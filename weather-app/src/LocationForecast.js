import React, { Component } from 'react';
import './App.css';

import DayForecast from './DayForecast';

class LocationForecast extends Component {
    render() {
        return (
            <div style={{ paddingTop: '10px' }}>
                <div className="Forecast">
                    <table>
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>Date</th>
                                <th>High</th>
                                <th>Low</th>
                                <th colSpan="2">Forecast</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.forecast.map((f) => (
                                <DayForecast
                                    key={f.date} //assume Yahoo weather API only returns one forecast per date (i.e., date will be unique)
                                    date={f.date}
                                    day={f.day}
                                    high={f.high}
                                    low={f.low}
                                    forecast={f.text}
                                    forecastCode={f.code}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default LocationForecast;