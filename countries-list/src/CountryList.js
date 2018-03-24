import React from 'react';

class CountryList extends React.Component {
    render() {
        return(
            <ul>
              {this.props.countries.map((country) => {
                return(
                  <li key={country.alpha2Code}>{country.name}</li>
                );
              })}
            </ul>
        );
    }
}

export default CountryList;