import React, { Component } from 'react';
import axios from 'axios';
import CountryListItem from './CountryListItem';
import './App.css';

class CountriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      searchQuery: '',
      isLoading: false,
      isFrench: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    this.setState({ isLoading: true });
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      console.log('axios response', response);
      this.setState({ countries: response.data, isLoading: false });
    });
  }

  handleChange(e) {
    const { name, type, value, checked } = e.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { searchQuery } = this.state;
    if (!searchQuery) return; // If no value to search for, skip making the request
    this.setState({ isLoading: true });
    axios.get(`https://restcountries.eu/rest/v2/name/${searchQuery}`).then((response) => {
      this.setState({ countries: response.data, isLoading: false });
    }).catch((error) => {
      this.setState({ countries: [], isLoading: false });
    });
  }

  render() {
    return (
      <div className="CountriesList">
        <form onSubmit={this.handleSubmit}>
          <input
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <input name="isFrench"
          type="checkbox"
          checked={this.state.isFrench}
          onChange={this.handleChange}
        />
        French
        {this.state.isLoading ? (
          <div className="loader" />
        ) : (
          <ul>
            {this.state.countries.map((country) => {
              return (
                <CountryListItem
                  country={country}
                  isFrench={this.state.isFrench}
                  key={country.alpha2Code}
                />
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default CountriesList;
