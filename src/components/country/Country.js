import React from 'react';
import './Country.css';
import active from './svg/active.svg';
import deaths from './svg/deaths.svg';
import recovery from './svg/recovery.svg';
import virus from './svg/virus.svg';

const Country = ({ stats }) => {
  return (
    <div className="country-container">
      {console.log(stats)}
      <h1 className="country-title">{stats.Country}</h1>
      <img
        src={`https://www.countryflags.io/${stats.CountryCode}/flat/64.png`}
      />
      <div className="country-record">
        <div className="country-record-info">
          <img src={virus} alt="total cases" />
          Total: {stats.Confirmed.toLocaleString()}
        </div>
        <div className="country-record-info">
          <img src={active} alt="active cases" />
          Active: {stats.Active.toLocaleString()}
        </div>
        <div className="country-record-info">
          <img src={recovery} alt="recovered patients" />
          Recovered: {stats.Recovered.toLocaleString()}
        </div>
        <div className="country-record-info">
          <img src={deaths} alt="deaths" />
          Deaths: {stats.Deaths.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default Country;
