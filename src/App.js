import React, { Component, Fragment } from 'react';
import CountryList from './components/country-list/CountryList';

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
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { stats } = this.state;
    return (
      <div className="container">
        <CountryList stats={stats} />
      </div>
    );
  }
}

export default App;
