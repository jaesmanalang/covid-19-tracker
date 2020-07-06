import React from 'react';
import Country from '../country/Country';
import './CountryList.css';

const CountryList = ({ stats }) => {
  return (
    <div className="country-list">
      {stats
        .filter(country => country.Confirmed > 200000)
        .map(country => (
          <Country key={country.CountryCode} stats={country} />
        ))}
    </div>
  );
};

export default CountryList;
