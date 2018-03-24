import React from 'react';
import Axios from 'axios';

import LoadingSpinner from './LoadingSpinner';
import CountryList from './CountryList';

class CountrySearch extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        countries: [],
        searchTerm: '',
        loading: false
      }
  
      this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
      this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    componentWillMount() {
    // Axios.get('https://restcountries.eu/rest/v2/all')
    //   .then((response) => {
    //     this.setState({
    //       countries: response.data
    //     });
    //   });
    }

    handleSearchTermChange(event) {
      this.setState({
        searchTerm: event.target.value
      });
    }
  
    handleSearchClick() {
      this.setState({ loading: true }, () => {
        Axios.get('https://restcountries.eu/rest/v2/name/' + this.state.searchTerm)
          .then((response) => {
            this.setState({
              countries: response.data,
              loading: false
            });
          })
          .catch((error) => {
            alert("no results found!");
            this.setState({
                countries: [],
                loading: false
            })
          });
        }
      )
    }

    render() {
      return (
          <div>    
            <p>
            <input type="text" value={this.state.searchTerm} onChange={this.handleSearchTermChange} />
            <button onClick={this.handleSearchClick}>Search</button>
            </p>
            { this.state.loading ? <LoadingSpinner /> : <CountryList countries={this.state.countries} /> }
          </div>
      );
    }
}

export default CountrySearch;