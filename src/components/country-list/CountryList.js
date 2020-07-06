import React from 'react';
import Country from '../country/Country';
import './CountryList.css';

const CountryList = ({ stats, filteredStats }) => {
  return (
    <div className="country-list">
      {stats
        // .sort((a, b) => b.Confirmed - a.Confirmed)
        .slice(0, 12)
        .map(country => (
          <Country key={country.CountryCode} stats={country} />
        ))}
    </div>
  );
};

export default CountryList;
