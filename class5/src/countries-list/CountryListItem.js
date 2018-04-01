import React, { Component } from 'react';

class CountryListItem extends Component {
  render() {
    const { country, isFrench } = this.props;
    return (
      <li>
        <img src={country.flag} style={{ width: 150 }} />
        <h3>{isFrench ? country.translations.fr : country.name}</h3>
        <h4>Capital: {country.capital}</h4>
      </li>
    );
  }
}

export default CountryListItem;
