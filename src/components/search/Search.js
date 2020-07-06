import React, { Component } from 'react';
import './Search.css';
const Search = ({ placeholder, handleChange }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      className="search"
      onChange={handleChange}
    />
  );
};

export default Search;
