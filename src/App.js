import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      countries: [],
      stats: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.covid19api.com/countries');
      const countries = await res.json();
      this.setState({ countries });
      this.state.countries.forEach(async country => {
        try {
          const response = await fetch(
            `https://api.covid19api.com/total/country/${country.Slug}`,
          );
          const data = await response.json();
          if (data.length) {
            this.setState(prevState => ({
              stats: prevState.stats.concat({
                ...data[data.length - 1],
                CountryCode: country.ISO2,
              }),
            }));
          }
        } catch (err) {
          console.log(err);
        }
      });
      console.log(this.state.countries);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        {this.state.stats.map(country => (
          <h1 key={country.Country}>{country.Country}</h1>
        ))}
      </div>
    );
  }
}

export default App;
